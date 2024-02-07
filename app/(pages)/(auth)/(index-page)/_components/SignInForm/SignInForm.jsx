"use client";
import styles from "../../../../_components/Form/Form.module.scss";
import { useState } from "react";
import Link from "next/link";

export default function SignInForm() {
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
        Don't have an account?{" "}
        <Link className={styles.link} href="/auth/create-account">
          Sign up
        </Link>
      </p>
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
      <p>
        Forgot Password?{" "}
        <Link className={styles.link} href="/auth/forgot-password">
          Reset Password
        </Link>
      </p>
      <br />
      <br />
      <button className={styles.submit} type="submit">
        <Link href="/"> Sign In </Link>
      </button>
    </form>
  );
}
