"use client";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth, db } from "../../../../../../firebase";
import { setDoc, doc } from "firebase/firestore";
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
    e.preventDefault();

    // Validation logic
    if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
      return;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match.");
      return;
    }

    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Access the user from userCredential
      const user = userCredential.user;
      console.log("User Added:", user);

      // Set user's UID in sessionStorage
      sessionStorage.setItem("UID", user.uid);
      const docRef = user.uid;
      console.log("docRef:", docRef);

      // Create user data object
      const userData = {
        name: firstName,
        email: email,
        verified: false,
      };
      sessionStorage.setItem("verified", false);

      // Set user data in Firestore
      await setDoc(doc(db, "users", docRef), userData);
      console.log("Document written with ID: ", docRef);

      // If successful, you can redirect the user
      window.location.href = "/success-create";
    } catch (err) {
      console.log("err:", err);
    }
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
      <br />
      {passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
      {confirmPasswordError && (
        <p style={{ color: "red" }}>{confirmPasswordError}</p>
      )}
      <br />
      <button className={styles.submit} type="submit">
        Create Account
      </button>
    </form>
  );
}
