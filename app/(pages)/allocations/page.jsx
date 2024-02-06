"use client";
import Header from "./_components/Header/Header";
import TotalCard from "@components/TotalCard/TotalCard";
import ExpenseCard from "./_components/ExpenseCard/ExpenseCard";
import ExpenseForm from "./_components/ExpenseForm/ExpenseForm";
import styles from "../_components/Layout/Layout.module.scss";
import { useEffect, useState } from "react";

export default function Allocations() {
  const [expensesData, setExpensesData] = useState([]);
  const handleExpenseAdded = (newExpenses) => {
    console.log("---");
    console.log("newExpenses:", newExpenses);
    setExpensesData(newExpenses);
    // setExpensesData((prevExpenses) => [...prevExpenses, newExpenses]);
    console.log("newExpenses:", newExpenses);
  };

  const handleExpenseEdit = (index, editedValues) => {
    // Update expensesData when an expense is edited
    const updatedExpenses = [...expensesData];
    updatedExpenses[index] = { ...updatedExpenses[index], ...editedValues };
    setExpensesData(updatedExpenses);
  };

  return (
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
  );
}
