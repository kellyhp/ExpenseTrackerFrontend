import Header from './_components/Header/Header';
import TotalCard from '@components/TotalCard/TotalCard';
import IncomeCard from './_components/IncomeCard/IncomeCard';
import IncomeForm from './_components/IncomeForm/IncomeForm';
import styles from '../_components/Layout/Layout.module.scss';

export default function Incomes() {
  return (
    <main className={styles.mains}>
      <Header />
      <div className={styles.ColRow}>
        <div className={styles.RowCol}>
          <TotalCard />
          <IncomeForm />
        </div>
        <IncomeCard />
      </div>
    </main>
  );
}
