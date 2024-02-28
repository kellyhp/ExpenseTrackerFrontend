"use client";
import React, { useEffect, useState } from "react";
import styles from "../../../_components/Transactions/Transactions.module.scss";
import Image from "next/image";
import Delete from "../../../../../public/index/Delete.png";
import Edit from "../../../../../public/index/Edit.png";
import Modal from "../Modal/Modal";

export default function ExpenseCard({ expensesData, onExpenseEdit }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editMode, setEditMode] = useState(null);
  const [editedValues, setEditedValues] = useState({
    name: "",
    type: "",
    date: "",
    cost: 0,
  });

  const handleDeleteClick = async (id) => {
    try {
      const response = await fetch(`https://expensetracker-dz2s.onrender.com/users/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        // Handle successful deletion
        // You may want to update the local state or perform any other actions
        console.log("Expense deleted successfully");
      } else {
        // Handle errors
        console.error("Failed to delete expense");
      }
    } catch (error) {
      console.error("Error while deleting expense", error);
    }
    window.location.reload();
  };

  const handleEditClick = (exp) => {
    // console.log("expensesData:", expensesData);
    setIsModalOpen(true);
    setEditedValues(exp);
    // console.log("EXP_.name:", exp.name);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalSave = (formData) => {
    // Handle saving data to MongoDB
    console.log("Saving data:", formData);

    setIsModalOpen(false);
  };

  return (
    <div className={styles.container}>
      <h4>Expenses</h4>
      <div className={styles.titles}>
        <p className={styles.spaceName}> Name </p>
        <p className={styles.spaceType}> Type </p>
        <p className={styles.spaceDate}> Date </p>
        <p className={styles.spaceAmount}> Amount </p>
      </div>
      {expensesData.map((expense, index) => (
        <>
          <div className={styles.actionContainer}>
            <div className={styles.ColRow}>
              <p className={styles.Name}>{expense.name}</p>
              <p className={styles.Type}>{expense.type}</p>
            </div>
            <div className={styles.ColRow}>
              <p className={styles.Date}>{expense.date}</p>
              <p className={styles.Amount}>{expense.cost.toFixed(2)}</p>
            </div>
            <div className={styles.ED_Button}>
              <button
                className={styles.button}
                onClick={() => handleEditClick(expense)}
              >
                <Image src={Edit} width={30} height={30} alt="Edit-Button" />
              </button>
              <button
                className={styles.button}
                onClick={() => handleDeleteClick(expense._id)}
              >
                <Image
                  src={Delete}
                  width={30}
                  height={30}
                  alt="Delete-Button"
                />
              </button>
            </div>
          </div>
        </>
      ))}
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          onSave={handleModalSave}
          initialData={editedValues}
        />
      )}
    </div>
  );
}
