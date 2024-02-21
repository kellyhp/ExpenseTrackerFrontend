"use client";
import { useState, useEffect } from "react";
import {
  getAuth,
  sendEmailVerification,
  onAuthStateChanged,
} from "firebase/auth";
import { db } from "../../../../../../firebase";
import { updateDoc, doc } from "firebase/firestore";
import styles from "../../../../_components/Form/Form.module.scss";

export default function VerifyForm() {
  const [userEmail, setUserEmail] = useState("");
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [newEmail, setNewEmail] = useState(false); // State variable to trigger resend email

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email);

        if (!user.emailVerified || newEmail) {
          // Resend email if newEmail is true
          sendEmailVerification(auth.currentUser)
            .then(() => {
              console.log("Email verification sent.");
              setNewEmail(false); // Reset newEmail state after sending email
            })
            .catch((error) => {
              console.error("Error sending email verification:", error);
            });
        } else {
          setIsEmailVerified(true);
          const uid = sessionStorage.getItem("UID");
          const docRef = doc(db, "users", uid);
          updateDoc(docRef, { verified: true })
            .then(() => {
              console.log("User verification status updated in Firestore.");
              sessionStorage.setItem("verified", true);
              window.location.href = "/";
            })
            .catch((error) => {
              console.error("Error updating user verification status:", error);
            });
        }
      } else {
        setUserEmail("");
        setIsEmailVerified(false);
      }
    });

    // return () => unsubscribe();
  }, []); // Add newEmail to the dependency array

  const verifycheck = () => {
    window.location.reload();
  };

  const handleLoginRedirect = () => {
    window.location.href = "/";
  };

  return (
    <div className={styles.form}>
      <h3 className={styles.formTitle}>Verify Your Email</h3>
      {userEmail ? (
        <>
          <p>We have sent a verification email to {userEmail}.</p>
          <br />
          {isEmailVerified ? (
            <p>Your email is verified.</p>
          ) : (
            <p>
              Your email is not verified. Please check your email and verify it.
            </p>
          )}
          <br />
          <div className={styles.btnDiv}>
            <button
              type="button"
              className={styles.submit}
              onClick={verifycheck}
            >
              Click here to confirm verification
            </button>
            {/* <button type="button" className={styles.submit} onClick={resend}>
              Resend Email
            </button> */}
            <button
              type="button"
              className={styles.submit}
              onClick={handleLoginRedirect}
            >
              Back To Login
            </button>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
