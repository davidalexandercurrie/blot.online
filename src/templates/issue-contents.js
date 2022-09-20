import React from 'react';
import Layout from '../components/layout';
import {
  issueContentsTitle,
  issueContentsAuthor,
  issueContainer,
  issueBodyContainer,
  issueContentsArticleTitle,
  issueContentsArticleContainer,
  issueReleased,
} from '../styles/Layout.module.css';
import { Link } from 'gatsby';
import ReactMarkdown from 'react-markdown';

const issueContents = ({ pageContext }) => {
  console.log(pageContext);
  const articles = pageContext.articles.map(article => {
    console.log(article.authorDisplay);
    const authors =
      article.author.length > 1 ? (
        <div className={issueContentsAuthor}>{article.authorDisplay}</div>
      ) : (
        <div className={issueContentsAuthor}>{article.author[0].name}</div>
      );

    return (
      <>
        <div className={issueContentsArticleContainer}>
          <Link className={issueContentsArticleTitle} to={article.slug}>
            <ReactMarkdown>{article.headerTitle}</ReactMarkdown>
          </Link>

          {authors}
        </div>
      </>
    );
  });
  return (
    <Layout>
      <div className={issueContainer}>
        <h1 className={issueContentsTitle}>{pageContext.title}</h1>
        <h3 className={issueReleased}>{pageContext.released}</h3>
        <div className={issueBodyContainer}>{articles}</div>
      </div>
    </Layout>
  );
};

export default issueContents;
