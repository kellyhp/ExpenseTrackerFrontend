"use client";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../../../../../firebase";
import { collection, setDoc, doc } from "firebase/firestore";
// import Link from "next/link";

// import {
//   createUserWithEmailAndPassword,
//   sendEmailVerification,
//   updateProfile,
// } from "firebase/auth";
import styles from "../../../../_components/Form/Form.module.scss";
import { useState } from "react";
import Link from "next/link";

export default function CreateForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const handleSubmit = async (e) => {
    console.log("email:", email, "  password:", password);
    e.preventDefault();
    console.log("HI");
    try {
      console.log("---");
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("!!!");
      const user = userCredential.user;
      console.log("User Added:", user);
      sessionStorage.setItem("UID", user.uid);
      const docRef = sessionStorage.getItem("UID");
      console.log("docRef:", docRef);
      const userData = {
        name: firstName + " " + lastName,
        email: email,
        verified: false,
      };
      sessionStorage.setItem("verified", false);
      await setDoc(doc(db, "users", docRef), userData);
      console.log("Document written with ID: ", docRef);
    } catch (err) {
      console.log("err:", err);
    }
    console.log("Bye1");
    window.location.href = "/verify";
    console.log("k11");
  };

  return (
    <div>
      {alertMessage && <div className={styles.alert}>{alertMessage}</div>}
      <form className={styles.form} onSubmit={handleSubmit}>
        <h3 className={styles.formTitle}>Create Account</h3>
        <p>
          Already have an account?{" "}
          <Link className={styles.link} href="/">
            Login
          </Link>
        </p>
        <br />
        <label>
          <input
            className={styles.input}
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
            required
          />
        </label>
        <br />
        <label>
          <input
            className={styles.input}
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
            required
          />
        </label>
        <br />
        <label>
          <input
            className={styles.input}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </label>
        <br />
        <label>
          <input
            className={styles.input}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </label>
        <br />
        <br />
        <button className={styles.submit} type="submit">
          {/* <Link href="/verify"> Create Account</Link> */}
          Create Account
        </button>
      </form>
    </div>
  );
}
