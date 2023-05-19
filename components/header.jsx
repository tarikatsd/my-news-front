import React from 'react';
import styles from '../styles/Header.module.css';
import { DateTime } from 'luxon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

function Header() {
  const date = DateTime.now().toFormat('MMMM dd yyyy');

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <div>{date}</div>
        <h1 className={styles.title}>My News</h1>
        <FontAwesomeIcon icon={faUser} className={styles.userIcon} />
      </div>

      <div className={styles.linkContainer}>
        <Link href="/" className={styles.link}>
          Articles
        </Link>
        <Link href="#" className={styles.link}>
          Bookmarks
        </Link>
      </div>
    </header>
  );
}

export default Header;