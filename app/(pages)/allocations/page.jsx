"use client";
import Header from "./_components/Header/Header";
import TotalCard from "@components/TotalCard/TotalCard";
import ExpenseCard from "./_components/ExpenseCard/ExpenseCard";
import ExpenseForm from "./_components/ExpenseForm/ExpenseForm";
import styles from "../_components/Layout/Layout.module.scss";
import { useEffect, useState } from "react";

export default function Allocations() {
  const [isVerified, setIsVerified] = useState("");

  useEffect(() => {
    // Check if the sessionStorage item "verified" is not true
    if (typeof window !== "undefined") {
      const verified = sessionStorage.getItem("verified");
      setIsVerified(verified);
      if (verified === null) {
        window.location.href = "/";
      } else if (verified === "false") {
        window.location.href = "/verify";
      }
    }
  }, []);

  const [expensesData, setExpensesData] = useState([]);

  const handleExpenseAdded = (newExpenses) => {
    setExpensesData(newExpenses);
  };

  const handleExpenseEdit = (index, editedValues) => {
    // Update expensesData when an expense is edited
    const updatedExpenses = [...expensesData];
    updatedExpenses[index] = { ...updatedExpenses[index], ...editedValues };
    setExpensesData(updatedExpenses);
  };

  return isVerified === "true" ? (
    <main className={styles.mains}>
      <Header />
      <div className={styles.ColRow}>
        <div className={styles.RowCol}>
          <TotalCard expenseData={expensesData} />
          <ExpenseForm onExpenseAdded={handleExpenseAdded} />
        </div>
        <ExpenseCard
          expensesData={expensesData}
          onExpenseEdit={handleExpenseEdit}
        />
      </div>
    </main>
  ) : null;
}
