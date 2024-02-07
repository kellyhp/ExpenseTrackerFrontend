'use client';
import styles from "../../../_components/Form/Form.module.scss";
import { useEffect, useState } from "react";

export default function ExpenseForm({ onExpenseAdded }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [type, setType] = useState("");
  const [cost, setCost] = useState("");
  const [expenseAdd, setExpenseAdd] = useState(false);
  const [getData, setGetData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/users");
        const data = await response.json();
        setGetData(data);
        console.log("GetData:", getData);
        onExpenseAdded(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setExpenseAdd(false);
    };
    fetchData();
  }, [expenseAdd]);

  async function PostData() {
    console.log("Hkkk");
    try {
      const response = await fetch("http://localhost:3001/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, date, type, cost, category: "expense" }),
      });
      const data = await response.json();
      console.log("data:", data);
      // console.log("setExpenseAdd1:", expenseAdd);
      setExpenseAdd(true);
      // onExpenseAdded(data);
    } catch (error) {
      console.error("Error posting data:", error);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Format cost to have two decimal places
    const formattedCost = parseFloat(cost).toFixed(2);
  
    // Form submission logic here
    console.log("Expense:", { name, date, type, cost: formattedCost });
    await PostData();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3 className={styles.formTitle}>Expense</h3>
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
          required
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
      <br />
      <label>
        <select
          className={styles.input}
          required
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option disabled hidden value="">
            {" "}
            Select An Option{" "}
          </option>
          <option value="food">Food</option>
          <option value="academics">Academics</option>
          <option value="personal-care">Personal Care</option>
          <option value="housing">Housing</option>
          <option value="travel">Travel</option>
          <option value="misc">Misc</option>
        </select>
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
        Add Outcome
      </button>
    </form>
  );
}
