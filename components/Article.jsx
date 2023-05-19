import React from 'react';
import styles from '../styles/Article.module.css';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

function Article() {
  return (
    <div className={styles.articleContainer}>
      <div className={styles.articlesHeader}>
        <h3>Un titre</h3>
        <FontAwesomeIcon icon={faBookmark} className={styles.bookmarkIcon} />
      </div>
      <h4 style={{ textAlign: 'right' }}>Un auteur</h4>
      <div className={styles.divider}></div>
      <Image
        src="/fonts/bulding.png"
        alt="une description de la photo"
        width={400}
        height={224}
      />
      <p>Une description</p>
    </div>
  );
}

export default Article;