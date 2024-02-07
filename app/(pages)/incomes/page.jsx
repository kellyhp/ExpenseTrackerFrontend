"use client";
import Header from "./_components/Header/Header";
import TotalCard from "@components/TotalCard/TotalCard";
import IncomeCard from "./_components/IncomeCard/IncomeCard";
import IncomeForm from "./_components/IncomeForm/IncomeForm";
import styles from "../_components/Layout/Layout.module.scss";
import { useEffect, useState } from "react";

export default function Incomes() {
  const [incomesData, setIncomesData] = useState([]);
  const handleIncomesAdded = (newIncome) => {
    setIncomesData(newIncome);
    // setExpensesData((prevExpenses) => [...prevExpenses, newExpenses]);
    console.log("newIncome:", newIncome);
  };

  return (
    <main className={styles.mains}>
      <Header />
      <div className={styles.ColRow}>
        <div className={styles.RowCol}>
          <TotalCard />
          <IncomeForm onIncomeAdded={handleIncomesAdded} />
        </div>
        <IncomeCard incomesData={incomesData} />
      </div>
    </main>
  );
}
