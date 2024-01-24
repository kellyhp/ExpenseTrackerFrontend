'use client';
import styles from '../../../../_components/Form/Form.module.scss';
import { useState } from 'react';
import Link from 'next/link';

export default function ResetForm() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  // need API to reset afterwards

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    resetPassword(newPassword);
  };

  const resetPassword = async (newPassword) => {
    if (newPassword.length > 0) {
      window.location.href = '/auth/login';
    }
    //If the reset is successful, navigate to the login page
    window.location.href = '/auth/login';
  };
  console.log('Error:', error);

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {error && (
        <p style={{ color: 'red' }}>
          {error} <br />
        </p>
      )}
      <h3 className={styles.formTitle}>Reset Password</h3>
      <p>Choose a new password for your account.</p>
      <br />
      <label>
        <input
          className={styles.input}
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder="New Password"
          required
        />
      </label>
      <br />
      <label>
        <input
          className={styles.input}
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          required
        />
      </label>
      <br />
      <div className={styles.btnDiv}>
        <button className={styles.submit} type="submit">
          Reset Password
        </button>
        <Link href="/auth/login" className={styles.submit}>
          Back To Login
        </Link>
      </div>
    </form>
  );
}
