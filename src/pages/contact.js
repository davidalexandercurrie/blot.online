import * as React from 'react';
import Layout from '../components/layout';
import {
  pageContainer,
  pageTitle,
  noBulletList,
} from '../styles/Layout.module.css';

const contact = () => {
  return (
    <Layout>
      <div className={pageContainer}>
        <h1 className={pageTitle}>Contact</h1>
        <p className={noBulletList}>
          We welcome responses, proposals, criticism, support, all the feels.
        </p>

        <li className={noBulletList}>
          Get in touch with us by email{' '}
          <a className="page-link" href="mailto:blotjournalonline@gmail.com">
            blotjournalonline@gmail.com
          </a>
        </li>

        <li className={noBulletList}>
          Follow BLOT on instagram{' '}
          <a
            className="page-link"
            target="_blank"
            rel="noreferrer"
            href="https://instagram.com/blot.online"
          >
            @blot.online
          </a>
        </li>
      </div>
    </Layout>
  );
};

export default contact;

export const Head = () => <title>Blot: Contact</title>;
