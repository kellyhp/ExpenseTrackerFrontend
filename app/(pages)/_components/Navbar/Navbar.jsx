'use client';
import Link from 'next/link';
import Image from 'next/image';
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx';
import AggieBank from '../../../../public/index/AggieBank.png';

import styles from './Navbar.module.scss';
import useToggle from '@hooks/useToggle';

export default function Navbar({ navLinks }) {
  const [active, toggleActive, _, setInactive] = useToggle(false);

  return (
    <div className={styles.relative_wrapper}>
      <div className={styles.container}>
        <h2 className={styles.hello}>Hello, Arthur</h2>
        <div className={styles.nav_container}>
          <div className={`${styles.links} ${active ? styles.active : null}`}>
            {navLinks.map((link) => (
              <Link key={link.slug} href={link.slug} onClick={setInactive}>
                <div className={styles.link}>
                  {link.image && (
                    <Image
                      className={styles.linkImage}
                      src={link.image}
                      width={30}
                      height={30}
                      alt={link.name}
                    />
                  )}
                  {link.name}
                </div>
              </Link>
            ))}
          </div>
          <button className={styles.menu} onClick={toggleActive}>
            {active ? <RxCross2 /> : <RxHamburgerMenu />}
          </button>
        </div>
        <Image
          className={styles.AggieBank}
          src={AggieBank}
          width={150}
          height={50}
          alt="Logo"
        />
      </div>
    </div>
  );
}
