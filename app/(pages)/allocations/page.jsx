import Header from './_components/Header/Header';
import TotalCard from '@components/TotalCard/TotalCard';
import ExpenseCard from './_components/ExpenseCard/ExpenseCard';
import ExpenseForm from './_components/ExpenseForm/ExpenseForm';
import styles from '../_components/Layout/Layout.module.scss';

export default function Allocations() {
  return (
    <main className={styles.mains}>
      <Header />
      <div className={styles.ColRow}>
        <TotalCard />
        <ExpenseCard />
      </div>
      <ExpenseForm />
    </main>
  );
}
