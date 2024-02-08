import styles from "../../../../_components/Form/Form.module.scss";
import Link from "next/link";

export default function CheckForm() {
  // Logic to resend the forgot password email

  return (
    <div className={styles.form}>
      <h3 className={styles.formTitle}>Check Your Email</h3>
      <p>
        We have sent an email with password reset information to
        a****e@e***e.com.
      </p>
      <br />
      <p>Didn't receive the email? Check spam or promotion folder.</p>
      <br />
      <div className={styles.btnDiv}>
        <button
          type="button"
          // onClick={handleResendEmail}
          className={styles.submit}
        >
          Resend Email
        </button>
        <Link href="/" className={styles.submit}>
          {" "}
          Back To Login{" "}
        </Link>
      </div>
    </div>
  );
}
