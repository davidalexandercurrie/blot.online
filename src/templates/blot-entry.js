import * as React from 'react';
import Layout from '../components/layout';
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import scrollTo from 'gatsby-plugin-smoothscroll';
import {
  entryBody,
  entryTitle,
  entryContainer,
  entrySubtitle,
  rtBold,
  entryAuthor,
  footnotes,
  footnoteNote,
  footnoteNumber,
  footnoteTitle,
  superScriptLink,
  scrollToElement,
} from '../styles/Layout.module.css';

const article = ({ pageContext }) => {
  const Bold = ({ children }) => <span className={rtBold}>{children}</span>;
  const Text = ({ children }) => <p>{children}</p>;

  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <Bold>{text}</Bold>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
      [INLINES.EMBEDDED_ENTRY]: (node, children) => {
        const entry = pageContext.body.references.find(
          element => element.contentful_id === node.data.target.contentful_id
        );
        return (
          <sup
            className={superScriptLink}
            onClick={() => scrollTo(`#footnote-${entry.contentful_id}`)}
          >
            {entry.number}
          </sup>
        );
      },
      [BLOCKS.EMBEDDED_ENTRY]: node => {
        return '';
      },
      [BLOCKS.EMBEDDED_ASSET]: node => {
        return (
          <>
            <h2>Embedded Asset</h2>
            <pre>
              <code>{JSON.stringify(node, null, 2)}</code>
            </pre>
          </>
        );
      },
    },
  };

  const bodyRichText = pageContext.body;
  return (
    <Layout headerText={pageContext.headerTitle}>
      <div className={entryContainer}>
        <h1 className={entryTitle}>{pageContext.title}</h1>
        <h2 className={entrySubtitle}>{pageContext.subtitle}</h2>
        {pageContext.author.map(author => (
          <h2 key={author.name} className={entryAuthor}>
            {author.name}
          </h2>
        ))}
        <div className={entryBody}>{renderRichText(bodyRichText, options)}</div>
        {pageContext.body.references.length > 0 && (
          <>
            <h2 className={footnoteTitle}>Notes</h2>
            <div id="entry-footnotes" className={footnotes}>
              {pageContext.body.references.map(reference => (
                <>
                  <p className={footnoteNumber}>
                    <span
                      className={scrollToElement}
                      id={`footnote-${reference.contentful_id}`}
                    ></span>
                    {reference.number}
                  </p>
                  <div className={footnoteNote}>
                    {renderRichText(reference.text)}
                  </div>
                </>
              ))}
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default article;
