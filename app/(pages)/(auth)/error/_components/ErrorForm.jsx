import styles from "../../../_components/Form/Form.module.scss";
import Link from "next/link";

export default function ErrorForm() {

  return (
    <div className={styles.form}>
      <h3 className={styles.formTitle}>Oops - Looks Like Something Went Wrong</h3>
      <p> You don't have permission to access this resource.</p>
      <br/>
      <br/>
      <button className={styles.submit}>
        <Link href="/"> Go Back To Login </Link>
      </button>
    </div>
  );
}
