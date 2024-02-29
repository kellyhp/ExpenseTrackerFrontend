"use client";
import styles from "../../../_components/Form/Form.module.scss";

import { useState, useEffect } from "react";

export default function ExpenseForm({ onIncomeAdded }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("");
  const [cost, setCost] = useState("");
  const [incomeAdd, setIncomeAdd] = useState(false);
  let uid;

  if (typeof window !== "undefined") {
    uid = sessionStorage.getItem("UID");
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://expensetracker-dz2s.onrender.com/users/income", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("UID")}`,
          },
        });
        const data = await response.json();
        console.log("Income fetched data:", data);
        onIncomeAdded(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setIncomeAdd(false);
    };
    fetchData();
  }, [incomeAdd]);

  async function PostData() {
    try {
      const response = await fetch("https://expensetracker-dz2s.onrender.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: sessionStorage.getItem("UID"),
          name,
          date,
          type,
          cost,
          category: "income",
        }),
      });
      const data = await response.json();
      console.log("data:", data);
      setIncomeAdd(true);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // form submission logic here
    console.log("Income:", { name, date, type, cost });
    await PostData();
    window.location.reload();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3 className={styles.formTitle}>Income</h3>
      <label for="name" className={styles.label}>
        {" "}
        Name
        <input
          className={styles.input}
          type="text"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
          maxLength={20}
          placeholder="Name"
        />
      </label>
      <br />
      <label for="date" className={styles.label}>
        {" "}
        Date
        <input
          className={styles.input}
          type="date"
          value={date}
          required
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
      <br />
      <label for="type" className={styles.label}>
        {" "}
        Income Type
        <input
          className={styles.input}
          type="text"
          value={type}
          required
          onChange={(e) => setType(e.target.value)}
          maxLength={15}
          placeholder="Type"
        />
      </label>
      <br />
      <label for="cost" className={styles.label}>
        {" "}
        Value
        <input
          className={styles.input}
          type="number"
          value={cost}
          required
          onChange={(e) => setCost(Math.max(0, parseFloat(e.target.value)))}
          placeholder="0.00"
          min="0"
          step="0.01"
        />
      </label>
      <br />
      <button className={styles.submit} type="submit">
        Add Income
      </button>
    </form>
  );
}
