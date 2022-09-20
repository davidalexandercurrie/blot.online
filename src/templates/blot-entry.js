import * as React from 'react';
import Layout from '../components/layout';
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import ReactMarkdown from 'react-markdown';

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
  articleImage,
  articleImageContainer,
  articleImageCaption,
  audioCaption,
  noBulletList,
  endText,
  audioPlayer,
  artistBio,
} from '../styles/Layout.module.css';

const article = ({ pageContext }) => {
  const Bold = ({ children }) => <span className={rtBold}>{children}</span>;
  const Text = ({ children }) => <p>{children}</p>;
  const Caption = ({ children }) => (
    <p className={articleImageCaption}>{children}</p>
  );

  const authors =
    pageContext.author.length > 1 ? (
      <h2 className={entryAuthor}>{pageContext.authorDisplay}</h2>
    ) : (
      <h2 className={entryAuthor}>{pageContext.author[0].name}</h2>
    );

  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <Bold>{text}</Bold>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
      [BLOCKS.UL_LIST]: (node, children) => (
        <ul className={noBulletList}>{children}</ul>
      ),
      [INLINES.EMBEDDED_ENTRY]: (node, children) => {
        const entry = pageContext.references.footnotes.find(
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
        console.log(node.data.target);
        if (node.data.target.__typename == 'ContentfulImage') {
          const { gatsbyImageData } = node.data.target.image;
          const { alt, caption } = node.data.target;
          return (
            <>
              <GatsbyImage
                imgClassName={articleImage}
                className={articleImageContainer}
                image={getImage(gatsbyImageData)}
                alt={alt}
              />
              {caption && (
                <div className={articleImageCaption}>
                  {renderRichText(caption)}
                </div>
              )}
            </>
          );
        } else if (node.data.target.__typename == 'ContentfulAudio') {
          const { caption } = node.data.target;
          return (
            <>
              <div className={audioPlayer}>
                <audio controls>
                  <source src={node.data.target.audioFile.file.url} />
                  Your browser doesn't support mp3s
                </audio>
                <p className={audioCaption}>{renderRichText(caption)}</p>
              </div>
            </>
          );
        }
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
        <h1 className={entryTitle}>
          <ReactMarkdown>{pageContext.title}</ReactMarkdown>
        </h1>
        <h2 className={entrySubtitle}>{pageContext.subtitle}</h2>
        {authors}
        <div className={entryBody}>{renderRichText(bodyRichText, options)}</div>
        {pageContext.references.footnotes.length > 0 && (
          <>
            <h2 className={footnoteTitle}>Notes</h2>
            <div id="entry-footnotes" className={footnotes}>
              {pageContext.references.footnotes.map(reference => (
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
        <div className={artistBio}>
          {pageContext.author.length > 0 &&
            pageContext.author.map(author => {
              return (
                <ReactMarkdown>
                  {author.length > 0 && author.shortBio.shortBio}
                </ReactMarkdown>
              );
            })}
        </div>
      </div>
    </Layout>
  );
};

export default article;
