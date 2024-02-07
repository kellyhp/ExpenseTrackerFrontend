import styles from "../../../_components/Header/Header.module.scss";

export default function Header() {
  return (
    <div className={styles.container}>
      <h1>Incomes</h1>
      <p className={styles.paragraph}>
        Input all of your income statements here!
      </p>
    </div>
  );
}
