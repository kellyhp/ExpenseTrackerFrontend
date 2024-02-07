"use client";
import styles from "../../../../_components/Form/Form.module.scss";
import { useState } from "react";
import Link from "next/link";

export default function CreateForm() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your sign-in logic here
    console.log({ email, password });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3 className={styles.formTitle}>Welcome</h3>
      <p>
        Already have an account?{" "}
        <Link className={styles.link} href="/auth/login">
          Login
        </Link>
      </p>
      <br />
      <label>
        <input
          className={styles.input}
          type="text"
          value={firstName}
          onChange={(e) => setfirstName(e.target.value)}
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
          onChange={(e) => setlastName(e.target.value)}
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
        <Link href="/auth/verify"> Create Account </Link>
      </button>
    </form>
  );
}
