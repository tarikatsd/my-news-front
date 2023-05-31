import React from 'react';
import Image from 'next/image';
import styles from '../styles/Article.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { addBookmarks, removeBookmarks } from '@/reducers/bookmarks';
import { hideArticles } from '@/reducers/hiddenArticles';

// Code du composant Article qui représente un article de presse.

function Article(props) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);

  const handleBookmarkClick = () => {
    if (!user.token) {
      // si l'utilisateur n'est pas connecté, on ne fait rien et on sort de la fonction
      return;
    }
    fetch(`https://my-news-back-2.vercel.app/users/canBookmark/${user.token}`) // on vérifie si l'utilisateur peut ajouter un article en favoris
      .then((res) => res.json())
      .then((data) => {
        if (data.result && data.canBookmark) {
          if (props.isBookmarked) {
            dispatch(removeBookmarks(props));
          } else {
            dispatch(addBookmarks(props));
          }
        }
      });
  };

  let iconStyle = {};
  let eyeStyle = {};
  if (props.isBookmarked) {
    // si isBookmarked est true cela veut dire que l'article est présent dans bookmarks
    // donc l'icone sera jaune
    iconStyle = { color: '#E9BE59' };
    eyeStyle = { display: 'none' };
  } else {
    //sinon elle sera noir
    iconStyle = { color: '#000000' };
  }

  return (
    <>
      <div className={styles.articleContainer}>
        <div className={styles.articleHeader}>
          <h3>{props.title}</h3>
          <FontAwesomeIcon
            icon={faEyeSlash}
            className={styles.eyeIcon}
            style={eyeStyle}
            onClick={() => {
              dispatch(hideArticles(props.title));
            }}
          />
          <FontAwesomeIcon
            icon={faBookmark}
            style={iconStyle}
            className={styles.bookmarkIcon}
            onClick={() => handleBookmarkClick()}
          />
        </div>
        <h4 style={{ textAlign: 'right' }}>{props.author}</h4>
        <div className={styles.divider}></div>
        <Image
          src={props.urlToImage}
          alt="une image"
          width={400}
          height={225}
        />
        <p>{props.description}</p>
      </div>
    </>
  );
}

export default Article;