'use client';
import { useEffect, useState } from "react";
import styles from "../../../_components/History/History.module.scss";

export default function RecentCard({ userId }) {
  const [topThreeExpenses, setTopThreeExpenses] = useState([]);

  useEffect(() => {
    const fetchTopThreeExpenses = async () => {
      try {
        const response = await fetch(`http://localhost:3001/users/${userId}`);
        const data = await response.json();
        setTopThreeExpenses(data);
      } catch (error) {
        console.error("Error fetching top three expenses:", error);
      }
    };

    fetchTopThreeExpenses();
  }, [userId]);

  return (
    <div className={styles.container}>
      <h4>Transactions History</h4>
      <div className={styles.titles}>
        <p className={styles.spaceName}> Name </p>
        <p className={styles.spaceType}> Type </p>
        <p className={styles.spaceDate}> Date </p>
        <p className={styles.spaceAmount}> Amount </p>
      </div>
      {topThreeExpenses.map((expense, index) => (
        <div className={styles.actionContainer} key={index}>
          <p className={styles.Name}>{expense.name}</p>
          <p className={styles.Type}>{expense.type}</p>
          <p className={styles.Date}>{expense.date}</p>
          <p className={styles.Amount}>${expense.cost.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
}
