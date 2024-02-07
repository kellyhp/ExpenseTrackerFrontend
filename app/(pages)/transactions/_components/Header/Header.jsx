import styles from "./Header.module.scss";

export default function Header() {
  return (
    <div className={styles.container}>
      <h1>Transactions</h1>
      <p className={styles.paragraph}>View all of your transactions here!</p>
    </div>
  );
}
