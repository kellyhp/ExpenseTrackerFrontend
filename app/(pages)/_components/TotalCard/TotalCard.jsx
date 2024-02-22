"use client";
import React, { useState, useEffect } from "react";
import styles from "./TotalCard.module.scss";

export default function TotalCard() {
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalOutcome, setTotalOutcome] = useState(0);
  const [totalBalance, setTotalBalance] = useState(0);
  const userId = sessionStorage.getItem("UID");

  useEffect(() => {
    async function fetchTotalIncome() {
      try {
        const response = await fetch(
          `http://localhost:3001/users/total-income`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("UID")}`,
            },
          }
        );
        const data = await response.json();
        console.log("KK:", data);
        setTotalIncome(data);
      } catch (error) {
        console.error("Error fetching total income:", error);
      }
    }

    async function fetchTotalOutcome() {
      try {
        const response = await fetch(
          `http://localhost:3001/users/total-outcome`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("UID")}`,
            },
          }
        );
        const data = await response.json();
        setTotalOutcome(data);
      } catch (error) {
        console.error("Error fetching total outcome:", error);
      }
    }

    async function fetchTotalBalance() {
      try {
        const response = await fetch(
          `http://localhost:3001/users/total-balance`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("UID")}`,
            },
          }
        );
        const data = await response.json();
        setTotalBalance(data);
      } catch (error) {
        console.error("Error fetching total balance:", error);
      }
    }

    fetchTotalIncome();
    fetchTotalOutcome();
    fetchTotalBalance();
  }, []);

  return (
    <div className={styles.TotalCard}>
      <div className={styles.Information}>
        <h2 className={styles.bal}>$ {totalBalance.toFixed(2)} </h2>
        <p className={styles.paragraph}> Current Balance </p>
        <h2 className={styles.in}>$ {totalIncome.toFixed(2)} </h2>
        <p className={styles.paragraph}> Income </p>
        <h2 className={styles.out}> $ {totalOutcome.toFixed(2)} </h2>
        <p className={styles.paragraph}> Outcome </p>
      </div>
    </div>
  );
}
