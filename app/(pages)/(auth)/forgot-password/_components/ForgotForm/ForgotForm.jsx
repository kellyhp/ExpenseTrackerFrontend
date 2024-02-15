"use client";
import styles from "../../../../_components/Form/Form.module.scss";
import { useState } from "react";
import Link from "next/link";

export default function ForgotForm() {
  const [email, setEmail] = useState("");

  const handleSend = () => {
    // logic to send the password reset email (API??)
  };

  const isEmailValid = email.trim() !== ""; // Check if email is non-empty

  return (
    <form className={styles.form} onSubmit={handleSend}>
      <h3 className={styles.formTitle}>Forgot Password</h3>
      <p>
        Enter the email you used to create your account so we can send you
        instructions on how to reset your password.
      </p>
      <br />
      <label className={styles.label}> Email
        <input
          className={styles.input}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <br />
      <div className={styles.btnDiv}>
        {isEmailValid && (
          <Link
            href="/check-email"
            className={styles.submit}
            onClick={handleSend}
          >
            Send
          </Link>
        )}
        <Link href="/" className={styles.submit}>
          Back To Login
        </Link>
      </div>
    </form>
  );
}
