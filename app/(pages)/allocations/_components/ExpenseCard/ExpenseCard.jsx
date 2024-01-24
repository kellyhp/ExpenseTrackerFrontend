'use client';
import React, { useState } from 'react';
import styles from '../../../_components/Transactions/Transactions.module.scss';
import Image from 'next/image';
import Delete from '../../../../../public/index/Delete.png';
import Edit from '../../../../../public/index/Edit.png';
import Modal from '../Modal/Modal';

export default function ExpenseCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalSave = (formData) => {
    // Handle saving data to MongoDB
    console.log('Saving data:', formData);

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
      <div className={styles.actionContainer}>
        <div className={styles.ColRow}>
          <p className={styles.Name}> Tercero Market </p>
          <p className={styles.Type}> Shopping </p>
        </div>
        <div className={styles.ColRow}>
          <p className={styles.Date}> 11/14/2023 </p>
          <p className={styles.Amount}> $115.94 </p>
        </div>
        <div className={styles.ED_Button}>
          <button className={styles.button} onClick={handleEditClick}>
            <Image src={Edit} width={30} height={30} alt="Edit-Button" />
          </button>
          <Image src={Delete} width={30} height={30} alt="Delete-Button" />
        </div>
      </div>
      <div className={styles.actionContainer}>
        <div className={styles.ColRow}>
          <p className={styles.Name}> Tercero Market </p>
          <p className={styles.Type}> Shopping </p>
        </div>
        <div className={styles.ColRow}>
          <p className={styles.Date}> 11/14/2023 </p>
          <p className={styles.Amount}> $115.94 </p>
        </div>
        <div className={styles.ED_Button}>
          <button className={styles.button} onClick={handleEditClick}>
            <Image src={Edit} width={30} height={30} alt="Edit-Button" />
          </button>
          <Image src={Delete} width={30} height={30} alt="Delete-Button" />
        </div>
      </div>
      <div className={styles.actionContainer}>
        <div className={styles.ColRow}>
          <p className={styles.Name}> Tercero Market </p>
          <p className={styles.Type}> Shopping </p>
        </div>
        <div className={styles.ColRow}>
          <p className={styles.Date}> 11/14/2023 </p>
          <p className={styles.Amount}> $115.94 </p>
        </div>
        <div className={styles.ED_Button}>
          <button className={styles.button} onClick={handleEditClick}>
            <Image src={Edit} width={30} height={30} alt="Edit-Button" />
          </button>
          <Image src={Delete} width={30} height={30} alt="Delete-Button" />
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSave={handleModalSave}
        initialData={
          {
            /* Pass initial data*/
          }
        }
      />
    </div>
  );
}
