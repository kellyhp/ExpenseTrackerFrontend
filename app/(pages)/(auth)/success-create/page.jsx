"use client";
import React, { useEffect, useState } from "react";
import {
  getAuth,
  sendEmailVerification,
  onAuthStateChanged,
  onIdTokenChanged,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import styles from "../../_components/Layout/Layout.module.scss";
import info from "../../_components/Info/Info.module.scss";
import form from "../../_components/Form/Form.module.scss";
import Image from "next/image";
import AggieBank from "../../../../public/index/AggieBank.png";
import Success from "../../../../public/index/success.png";
import Link from "next/link";
import { auth, db } from "../../../../firebase";

export default function Login() {
  const [emailVerified, setEmailVerified] = useState(false);
  console.log("auth:", auth.currentUser);

  const sendVerificationEmail = async () => {
    console.log("HI");
    try {
      await new Promise((resolve, reject) => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            resolve(user);
          } else {
            reject(new Error("No user is currently signed in."));
          }
          unsubscribe();
        });
      }).then((user) => {
        console.log("Authenticated user:", user);
        if (user.emailVerified) {
          console.log("User is already verified.");
          setEmailVerified(true); // Update state to indicate email is verified
        } else {
          sendEmailVerification(user)
            .then(() => {
              console.log("Email verification sent successfully.");
              // Add another then to continuously check if the email is verified
              const checkEmailVerification = setInterval(() => {
                // Re-authenticate the user to get the latest email verification status
                const currentUser = auth.currentUser;
                if (currentUser) {
                  currentUser.reload().then(() => {
                    if (currentUser.emailVerified) {
                      console.log("User's email is verified.");
                      setEmailVerified(true); // Update state to indicate email is verified
                      clearInterval(checkEmailVerification);
                      // Perform actions here when the email is verified
                      // Update 'verified' field in Firestore
                      const docRef = sessionStorage.getItem("UID");
                      if (docRef) {
                        sessionStorage.setItem("verified", true);
                        setDoc(
                          doc(db, "users", docRef),
                          { verified: true },
                          { merge: true },
                        )
                          .then(() =>
                            console.log(
                              "Firestore document updated with 'verified' field set to true",
                            ),
                          )
                          .catch((error) =>
                            console.error(
                              "Error updating Firestore document:",
                              error,
                            ),
                          );
                      }
                    }
                  });
                }
              }, 5000); // Check every 5 seconds
            })
            .catch((error) => {
              console.error("Error sending email verification:", error);
            });
        }
      });
    } catch (error) {
      console.error("Error sending email verification:", error);
    }
  };

  useEffect(() => {
    sendVerificationEmail();
  }, []);

  return (
    <main className={styles.home}>
      <div className={info.layout}>
        <div className={info.info}>
          <div className={info.intro}>
            <div className={info.title}>
              <Image src={AggieBank} alt="logo" width={150} height={50} />
            </div>
            <div className={info.bottom}>
              <h2>Expense Tracker</h2>
              <p>
                Input your income, expense, and transactions to see how much
                you've been spending
              </p>
            </div>
          </div>
        </div>
        <div className={info.form}>
          <div className={form.form}>
            <div className={form.title}>
              <Image
                className={form.success}
                src={Success}
                alt="logo"
                width={100}
                height={100}
              />
            </div>
            <br />
            {emailVerified ? (
              <>
                <p>Your email is verified!</p>
                <Link href="/" className={form.submit}>
                  Login
                </Link>
              </>
            ) : (
              <>
                <p>Check your email, we've sent a verification link.</p>
                {/* You can add a loading indicator here if needed */}
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
