"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import AggieBank from "../../../../public/index/AggieBank.png";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../../../firebase"; // Assuming you have initialized Firestore in firebase.js
import styles from "./Navbar.module.scss";
import useToggle from "@hooks/useToggle";

export default function Navbar({ navLinks }) {
  const [active, toggleActive, _, setInactive] = useToggle(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // Fetch user data from Firestore based on UID from localStorage
    const fetchUserData = async () => {
      const uid = sessionStorage.getItem("UID");

      if (uid) {
        try {
          const userRef = doc(db, "users", uid);
          const userDoc = await getDoc(userRef);
          if (userDoc.exists()) {
            const userData = userDoc.data();
            setUserName(userData.name);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };

    fetchUserData();
  }, []);

  const handleSignOut = () => {
    sessionStorage.removeItem("UID");
    sessionStorage.removeItem("verified");
  };

  return (
    <div className={styles.relative_wrapper}>
      <div className={styles.container}>
        <h2 className={styles.hello}>Hello, {userName}</h2>{" "}
        {/* Display user name */}
        <div className={styles.nav_container}>
          <div className={`${styles.links} ${active ? styles.active : null}`}>
            {navLinks.map((link) => (
              <Link
                key={link.slug}
                href={link.slug}
                onClick={
                  () =>
                    link.name === "Sign Out" ? handleSignOut() : setInactive()
                  //                                                      ^^
                }
              >
                <div className={styles.link}>
                  {link.image && (
                    <Image
                      className={styles.linkImage}
                      src={link.image}
                      width={30}
                      height={30}
                      alt={link.name}
                    />
                  )}
                  {link.name}
                </div>
              </Link>
            ))}
          </div>
          <button className={styles.menu} onClick={toggleActive}>
            {active ? <RxCross2 /> : <RxHamburgerMenu />}
          </button>
        </div>
        <Image
          className={styles.AggieBank}
          src={AggieBank}
          width={150}
          height={50}
          alt="Logo"
        />
      </div>
    </div>
  );
}
