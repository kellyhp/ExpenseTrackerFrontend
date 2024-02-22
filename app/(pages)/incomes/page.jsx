"use client";
import Header from "./_components/Header/Header";
import TotalCard from "@components/TotalCard/TotalCard";
import IncomeCard from "./_components/IncomeCard/IncomeCard";
import IncomeForm from "./_components/IncomeForm/IncomeForm";
import styles from "../_components/Layout/Layout.module.scss";
import { useEffect, useState } from "react";

export default function Incomes() {
  const [isVerified, setIsVerified] = useState(""); // Use state instead of constant

  useEffect(() => {
    // Check if the sessionStorage item "verified" is not true
    if (typeof window !== "undefined") {
      const verified = sessionStorage.getItem("verified");
      console.log("isVerified:", verified);
      setIsVerified(verified); // Set the state
      if (verified === null) {
        window.location.href = "/";
      } else if (verified === "false") {
        console.log("LD");
        window.location.href = "/success-create";
      }
    }
  }, []);

  const [incomesData, setIncomesData] = useState([]);

  const handleIncomesAdded = (newIncome) => {
    setIncomesData(newIncome);
    console.log("newIncome:", newIncome);
  };

  // Conditional rendering based on verification status
  if (isVerified === "true") {
    // Use state instead of accessing sessionStorage directly
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
  } else {
    return null; // Render nothing if not verified
  }
}
