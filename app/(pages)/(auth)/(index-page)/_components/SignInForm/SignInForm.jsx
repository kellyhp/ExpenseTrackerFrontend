"use client";
import styles from "../../../../_components/Form/Form.module.scss";
import { useState, useEffect } from "react";
import Link from "next/link";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../../../firebase";
export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Implement your sign-in logic here
    console.log({ email, password });

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("Signed in user:", user);
      console.log("Uid:", user.uid);
      if (user.uid) {
        sessionStorage.setItem("UID", user.uid);
        sessionStorage.setItem("verified", user.emailVerified);
        window.location.href = "/dashboard";
      }
    } catch (error) {
      console.error("Sign-in error:", error.message);
      setConfirmPasswordError("Incorrect Password");
      return;
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3 className={styles.formTitle}>Welcome</h3>
      <p>
        Don't have an account?{" "}
        <Link className={styles.link} href="/create-account">
          Sign up
        </Link>
      </p>
      <br />
      <label className={styles.label}>
        {" "}
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
        {" "}
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
      <br />
      {confirmPasswordError && (
        <p style={{ color: "red" }}>{confirmPasswordError}</p>
      )}
      <p>
      <br />
        Forgot Password?{" "}
        <Link className={styles.link} href="/forgot-password">
          Reset Password
        </Link>
      </p>
      <br />
      <button className={styles.submit} type="submit">
        Sign In
      </button>
    </form>
  );
}
