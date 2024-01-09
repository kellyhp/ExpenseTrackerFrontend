import styles from '../../../_components/Header/Header.module.scss';

export default function Header() {
  return (
    <div className={styles.container}>
      <h1>Expense Dashboard</h1>
      <p className={styles.paragraph}>
        Get a summary of your tracked expenses here!
      </p>
    </div>
  );
}
