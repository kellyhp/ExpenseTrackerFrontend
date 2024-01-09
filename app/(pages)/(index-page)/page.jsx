import Header from './_components/Header/Header';
import TotalCard from '@components/TotalCard/TotalCard';
import RecentCard from './_components/RecentCard/RecentCard';
import styles from '../_components/Layout/Layout.module.scss';

export default function Home() {
  return (
    <main className={styles.mains}>
      <Header />
      <div className={styles.ColRow}>
        <TotalCard />
        <RecentCard />
      </div>
    </main>
  );
}
