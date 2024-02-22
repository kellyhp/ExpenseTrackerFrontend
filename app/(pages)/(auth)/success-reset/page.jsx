import styles from "../../_components/Layout/Layout.module.scss";
import info from "../../_components/Info/Info.module.scss";
import form from "../../_components/Form/Form.module.scss";
import Image from "next/image";
import AggieBank from "../../../../public/index/AggieBank.png";
import Success from "../../../../public/index/success.png";
import Link from "next/link";

export default function Login() {
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
          <div className={form.form}>
            <div className={form.title}>
              <Image
                className={form.success}
                src={Success}
                alt="logo"
                width={100}
                height={100}
              />
            </div>
            <br />
            <p> Check your email, we've sent a password reset link. </p>
            <br />
            <Link href="/" className={form.submit}>
              Login
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
