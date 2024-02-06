"use client";
import styles from "./TotalCard.module.scss";

export default function TotalCard({ expenseData }) {
  console.log("ED:", expenseData);
  // const totalOutcome = expenseData.reduce(
  //   (total, expense) => total + expense.cost,
  //   0
  // ); {totalOutcome.toFixed(2)}
  return (
    <div className={styles.TotalCard}>
      <div className={styles.Information}>
        <h2 className={styles.bal}>$ 2850.75 </h2>
        <p className={styles.paragraph}> Current Balance </p>
        <h2 className={styles.in}>$ 1500.50 </h2>
        <p className={styles.paragraph}> Income </p>
        <h2 className={styles.out}> $ 222 </h2>
        <p className={styles.paragraph}> Outcome </p>
      </div>
    </div>
  );
}
