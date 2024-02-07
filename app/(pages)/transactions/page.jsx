import Header from "./_components/Header/Header";
import TransactionCard from "./_components/TransactionCard/TransactionCard";
import styles from "../_components/Layout/Layout.module.scss";

export default function Transactions() {
  return (
    <main className={styles.mains}>
      <Header />
      <TransactionCard />
    </main>
  );
}
