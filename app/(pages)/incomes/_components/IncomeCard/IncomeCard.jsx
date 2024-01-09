import styles from '../../../_components/Transactions/Transactions.module.scss';
import Image from 'next/image';
import Delete from '../../../../../public/index/Delete.png';
import Edit from '../../../../../public/index/Edit.png';

export default function IncomeCard() {
  return (
    <div className={styles.container}>
      <h4>Income</h4>
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
          <Image src={Edit} width={30} height={30} alt="Edit-Button" />
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
          <Image src={Edit} width={30} height={30} alt="Edit-Button" />
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
          <Image src={Edit} width={30} height={30} alt="Edit-Button" />
          <Image src={Delete} width={30} height={30} alt="Delete-Button" />
        </div>
      </div>
    </div>
  );
}
