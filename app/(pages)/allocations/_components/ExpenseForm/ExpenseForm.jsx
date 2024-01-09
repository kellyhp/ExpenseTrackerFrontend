'use client';
import styles from '../../../_components/Form/Form.module.scss';
import { useState } from 'react';

export default function ExpenseForm() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [type, setType] = useState('');
  const [cost, setCost] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // form submission logic here
    console.log({ name, date, type, cost });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h3 className={styles.formTitle}>Expense</h3>
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
          onChange={(e) => setCost(Math.max(0, parseFloat(e.target.value)))}
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
