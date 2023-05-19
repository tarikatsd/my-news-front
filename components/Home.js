import React from 'react';
import Article from './Article';
import TopArticle from './TopArticle';
import styles from '../styles/Home.module.css';
import Head from 'next/head';

function Home() {
  const articles = [];

  for (let i = 0; i < 8; i++) {
    articles.push(<Article />);
  }

  return (
    <div>
      <Head>
        <title>My News - Home</title>
      </Head>

      <TopArticle />

      <div className={styles.articlesContainer}>{articles}</div>
    </div>
  );
}

export default Home;