import Link from 'next/link';
import styles from '../../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <p className={styles.logo}>Ariz-Ariz</p>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.item}>
          <Link href="/blog">Blog</Link>
        </li>
        <li className={styles.item}>
          <Link href="/users">Users</Link>
        </li>
      </ul>
    </header>
  );
}
