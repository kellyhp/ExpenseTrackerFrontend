"use client";
import styles from "../../../../_components/Form/Form.module.scss";
import { useState, useEffect } from "react";
import Link from "next/link";
import { getAuth, sendPasswordResetEmail } from "firebase/auth"; // Import Firebase Authentication methods

export default function ForgotForm() {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false); // State to track email validity

  const handleSend = (e) => {
    // console.log("email:", email);
    e.preventDefault();
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("Password reset email sent.");
        // Handle success (e.g., show a success message to the user)
      })
      .catch((error) => {
        console.error("Error sending password reset email:", error);
        // Handle error (e.g., show an error message to the user)
      });
  };

  // Function to validate email
  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  // Function to handle email input change
  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    setIsEmailValid(validateEmail(emailValue)); // Update email validity state
  };

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
