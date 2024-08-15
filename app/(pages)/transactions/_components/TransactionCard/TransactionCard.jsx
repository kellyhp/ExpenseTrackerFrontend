"use client";
import styles from "../../../_components/History/History.module.scss";
import { useEffect, useState } from "react";

export default function TransactionCard() {
  const [Expense, setExpense] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://expensetracker-dz2s.onrender.com/users`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("UID")}`,
          },
        });
        const data = await response.json();
        setExpense(data);
        // console.log("TopThreeExpense:", TopThreeExpense);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // useEffect(() => {
  //   console.log("TopThreeExpense:", TopThreeExpense);
  // }, [TopThreeExpense]);
  return (
    <div className={styles.container}>
      <h4>Transactions History</h4>
      <div className={styles.titles}>
        <p className={styles.spaceName}> Name </p>
        <p className={styles.spaceType}> Type </p>
        <p className={styles.spaceDate}> Date </p>
        <p className={styles.spaceAmount}> Amount </p>
      </div>
      {Expense.map((expense, index) => (
        <>
          <div className={styles.actionContainer}>
            <p className={styles.Name}> {expense.name} </p>
            <p className={styles.Type}> {expense.type} </p>
            <p className={styles.Date}> {expense.date} </p>
            <p className={styles.Amount}> {expense.cost.toFixed(2)} </p>
          </div>
        </>
      ))}
    </div>
  );
}
