import styles from './RecentCard.module.scss';

export default function RecentCard() {
  return (
    <div className={styles.container}>
      <h4>Transactions History</h4>
      <div className={styles.titles}>
        <p className={styles.spaceName}> Name </p>
        <p className={styles.spaceType}> Type </p>
        <p className={styles.spaceDate}> Date </p>
        <p className={styles.spaceAmount}> Amount </p>
      </div>
      <div className={styles.actionContainer}>
        <p className={styles.Name}> Tercero Market </p>
        <p className={styles.Type}> Shopping </p>
        <p className={styles.Date}> 11/14/2023 </p>
        <p className={styles.Amount}> $115.94 </p>
      </div>
      <div className={styles.actionContainer}>
        <p className={styles.Name}> Tercero Market </p>
        <p className={styles.Type}> Shopping </p>
        <p className={styles.Date}> 11/14/2023 </p>
        <p className={styles.Amount}> $115.94 </p>
      </div>
      <div className={styles.actionContainer}>
        <p className={styles.Name}> Tercero Market </p>
        <p className={styles.Type}> Shopping </p>
        <p className={styles.Date}> 11/14/2023 </p>
        <p className={styles.Amount}> $115.94 </p>
      </div>
      <div className={styles.actionContainer}>
        <p className={styles.Name}> Tercero Market </p>
        <p className={styles.Type}> Shopping </p>
        <p className={styles.Date}> 11/14/2023 </p>
        <p className={styles.Amount}> $115.94 </p>
      </div>
    </div>
  );
}
