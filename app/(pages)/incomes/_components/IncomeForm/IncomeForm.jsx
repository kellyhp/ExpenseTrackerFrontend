'use client';
import styles from "../../../_components/Form/Form.module.scss";

import { useState, useEffect } from "react";

export default function ExpenseForm({ onIncomeAdded }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("");
  const [cost, setCost] = useState("");
  const [incomeAdd, setIncomeAdd] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/users/income");
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
    console.log("Hkkk");
    try {
      const response = await fetch("http://localhost:3001/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, date, type, cost, category: "income" }),
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
    
    // Format cost to have two decimal places
    const formattedCost = parseFloat(cost).toFixed(2);
  
    // form submission logic here
    console.log("Income:", { name, date, type, cost: formattedCost });
    await PostData();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3 className={styles.formTitle}>Income</h3>
      <label>
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
      <label>
        <input
          className={styles.input}
          type="date"
          value={date}
          required
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
      <br />
      <label>
        <input
          className={styles.input}
          type="text"
          value={name}
          required
          onChange={(e) => setType(e.target.value)}
          maxLength={15}
          placeholder="Type"
        />
      </label>
      <br />
      <label>
        <input
          className={styles.input}
          type="number"
          value={cost}
          required
          onChange={(e) => setCost(e.target.value)} 
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
