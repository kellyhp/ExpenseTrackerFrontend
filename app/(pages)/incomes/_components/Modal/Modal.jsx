"use client";
import { useState } from "react";
import styles from "../../../_components/Form/Form.module.scss";

function Modal({ isOpen, onClose, onSave, initialData }) {
  console.log("initialData:", initialData.name);
  const [name, setName] = useState(initialData ? initialData.name : "");
  const [date, setDate] = useState(initialData ? initialData.date : "");
  const [type, setType] = useState(initialData ? initialData.type : "food");
  const [cost, setCost] = useState(initialData ? initialData.cost : 0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    onSave({ name, date, type, cost });

    try {
      // Make a PUT request to update the expense in the database
      const response = await fetch(
        `https://expensetracker-dz2s.onrender.com/users/${initialData._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, date, type, cost, category: "income" }),
        },
      );

      if (!response.ok) {
        console.error("Error updating income:", response.statusText);
        // Handle error as needed
        return;
      }

      const updatedExpense = await response.json();
      console.log("Income updated in the database:", updatedExpense);

      window.location.reload();
    } catch (error) {
      console.error("Error updating income:", error);
      // Handle error as needed
    }
    onClose();
  };

  return (
    isOpen && (
      <div className={styles.modalOverlay}>
        <div className={styles.modal}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <h3 className={styles.formTitle}>Edit This Income</h3>
            <label className={styles.label}>
              {" "}
              Name
              <input
                className={styles.input}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={20}
                placeholder="Name"
              />
            </label>
            <br />
            <label className={styles.label}>
              {" "}
              Date
              <input
                className={styles.input}
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </label>
            <br />
            <label className={styles.label}>
              {" "}
              Type
              <input
                className={styles.input}
                type="text"
                value={name}
                onChange={(e) => setType(e.target.value)}
                maxLength={15}
                placeholder="Type"
              />
            </label>
            <br />
            <label className={styles.label}>
              {" "}
              Value
              <input
                className={styles.input}
                type="number"
                value={cost}
                onChange={(e) =>
                  setCost(Math.max(0, parseFloat(e.target.value)))
                }
                placeholder="0.00"
                min="0"
                step="0.01"
              />
            </label>
            <div className={styles.btnDiv}>
              <button className={styles.submit} type="submit">
                Save Changes
              </button>
              <button className={styles.close} onClick={onClose}>
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
}

export default Modal;
