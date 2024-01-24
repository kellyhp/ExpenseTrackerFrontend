import styles from '../../_components/Layout/Layout.module.scss';
import info from '../../_components/Info/Info.module.scss';
import Image from 'next/image';
import AggieBank from '../../../../public/index/AggieBank.png';
import CheckForm from './_components/CheckForm/CheckForm';

export default function CheckEmail() {
  return (
    <main className={styles.home}>
      <div className={info.layout}>
        <div className={info.info}>
          <div className={info.intro}>
            <div className={info.title}>
              <Image src={AggieBank} alt="logo" width={150} height={50} />
            </div>
            <div className={info.bottom}>
              <h2> Expense Tracker</h2>
              <p>
                Input your income, expense, and transactions to see how much
                you've been spending
              </p>
            </div>
          </div>
        </div>
        <div className={info.form}>
          <CheckForm />
        </div>
      </div>
    </main>
  );
}
