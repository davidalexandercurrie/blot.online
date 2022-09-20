import * as React from 'react';
import Layout from '../components/layout';
import Nav from '../components/nav';
import { pageContainer, pageTitle, pageP } from '../styles/Layout.module.css';

const contact = () => {
  return (
    <Layout>
      <div className={pageContainer}>
        <h1 className={pageTitle}>Contact</h1>
        <p className={pageP}>
          We welcome responses, proposals, criticism, support, all the feels.
        </p>

        <p className={pageP}>
          Get in touch with us by email{' '}
          <a className="page-link" href="mailto:blotjournalonline@gmail.com">
            blotjournalonline@gmail.com
          </a>
        </p>

        <p className={pageP}>
          Follow BLOT on instagram{' '}
          <a
            className="page-link"
            target="_blank"
            rel="noreferrer"
            href="https://instagram.com/blot.online"
          >
            @blot.online
          </a>
        </p>
      </div>
    </Layout>
  );
};

export default contact;

export const Head = () => <title>Blot: Contact</title>;
