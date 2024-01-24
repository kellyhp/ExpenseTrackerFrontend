'use client';
import { useState } from 'react';
import styles from '../../../_components/Form/Form.module.scss';

function Modal({ isOpen, onClose, onSave, initialData }) {
  const [name, setName] = useState(initialData ? initialData.name : '');
  const [date, setDate] = useState(initialData ? initialData.date : '');
  const [type, setType] = useState(initialData ? initialData.type : 'food');
  const [cost, setCost] = useState(initialData ? initialData.cost : 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ name, date, type, cost });
  };

  return (
    isOpen && (
      <div className={styles.modalOverlay}>
        <div className={styles.modal}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <h3 className={styles.formTitle}>Edit This Expense</h3>
            <label>
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
            <label>
              <input
                className={styles.input}
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </label>
            <br />
            <label>
              <select
                className={styles.input}
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
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
