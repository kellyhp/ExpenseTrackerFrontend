'use client';
import styles from './TotalCard.module.scss';

export default function TotalCard() {
  return (
    <div className={styles.TotalCard}>
      <div className={styles.Information}>
        <h2 className={styles.bal}>$ 2850.75 </h2>
        <p className={styles.paragraph}> Current Balance </p>
        <h2 className={styles.in}>$ 1500.50 </h2>
        <p className={styles.paragraph}> Income </p>
        <h2 className={styles.out}> $ 350.60 </h2>
        <p className={styles.paragraph}> Outcome </p>
      </div>
    </div>
  );
}
