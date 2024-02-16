"use client";
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

  const handleSubmit = (e) => {
    e.preventDefault();
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
        <Link href="/verify"> Create Account </Link>
      </button>
    </form>
  );
}

