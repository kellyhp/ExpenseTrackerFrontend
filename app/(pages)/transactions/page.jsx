"use client";
import Header from "./_components/Header/Header";
import TransactionCard from "./_components/TransactionCard/TransactionCard";
import styles from "../_components/Layout/Layout.module.scss";
import { useEffect, useState } from "react";

export default function Transactions() {
  const [isVerified, setIsVerified] = useState("");

  useEffect(() => {
    // Check if the sessionStorage item "verified" is not true
    if (typeof window !== "undefined") {
      const verified = sessionStorage.getItem("verified");
      setIsVerified(verified);
      if (verified === null) {
        window.location.href = "/";
      } else if (verified === "false") {
        window.location.href = "/success-create";
      }
    }
  }, []);

  return isVerified === "true" ? (
    <main className={styles.mains}>
      <Header />
      <TransactionCard />
    </main>
  ) : null;
}
