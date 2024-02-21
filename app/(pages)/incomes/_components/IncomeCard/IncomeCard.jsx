"use client";
import React, { useState } from "react";
import styles from "../../../_components/Transactions/Transactions.module.scss";
import Image from "next/image";
import Delete from "../../../../../public/index/Delete.png";
import Edit from "../../../../../public/index/Edit.png";
import Modal from "../Modal/Modal";

export default function IncomeCard({ incomesData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedValues, setEditedValues] = useState({
    name: "",
    type: "",
    date: "",
    cost: 0,
  });

  const handleEditClick = (inc) => {
    setIsModalOpen(true);
    setEditedValues(inc);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleDeleteClick = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/users/${id}`, {
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

  const handleModalSave = (formData) => {
    // Handle saving data to MongoDB
    console.log("Saving data:", formData);

    setIsModalOpen(false);
  };
  return (
    <div className={styles.container}>
      <h4>Income</h4>
      <div className={styles.titles}>
        <p className={styles.spaceName}> Name </p>
        <p className={styles.spaceType}> Type </p>
        <p className={styles.spaceDate}> Date </p>
        <p className={styles.spaceAmount}> Amount </p>
      </div>
      {incomesData.map((income, index) => (
        <>
          <div className={styles.actionContainer}>
            <div className={styles.ColRow}>
              <p className={styles.Name}>{income.name}</p>
              <p className={styles.Type}>{income.type}</p>
              <p className={styles.Date}>{income.date}</p>
              <p className={styles.Amount}>{income.cost}</p>
            </div>
            <div className={styles.ED_Button}>
              <button
                className={styles.button}
                onClick={() => handleEditClick(income)}
              >
                <Image src={Edit} width={30} height={30} alt="Edit-Button" />
              </button>
              <button
                className={styles.button}
                onClick={() => handleDeleteClick(income._id)}
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
