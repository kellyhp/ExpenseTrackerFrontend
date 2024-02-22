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
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleSubmit = async (e) => {
    console.log("email:", email, "  password:", password);
    e.preventDefault();
    console.log("HI");
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
    } else if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match.");
    } else {
      setPasswordError("");
      setConfirmPasswordError("");
      // Implement your sign-in logic here
      console.log({ email, password });
    }
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
        name: firstName,
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
    window.location.href = "/success-create";
    console.log("k11");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3 className={styles.formTitle}>Welcome</h3>
      <p>
        Already have an account?{" "}
        <Link className={styles.link} href="/">
          Login
        </Link>
      </p>
      <br />
      <label className={styles.label}>
        First Name
        <input
          className={styles.input}
          type="text"
          value={firstName}
          onChange={(e) => setfirstName(e.target.value)}

          required
        />
      </label>
      <br />
      <label className={styles.label}>
        Last Name
        <input
          className={styles.input}
          type="text"
          value={lastName}
          onChange={(e) => setlastName(e.target.value)}

          required
        />
      </label>
      <br />
      <label className={styles.label}>
        Email
        <input
          className={styles.input}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <br />
      <label className={styles.label}>
        Password
        <input
          className={styles.input}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <br />
      <label className={styles.label}>
        Confirm Password
        <input
          className={styles.input}
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </label>
      <br/>
      {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
      {confirmPasswordError && <p style={{ color: "red" }}>{confirmPasswordError}</p>}
      <br />
      <button className={styles.submit} type="submit">
        <Link href="/create-account"> Create Account </Link>
      </button>
    </form>
  );
}
