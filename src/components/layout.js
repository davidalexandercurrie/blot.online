import React from 'react';
import Header from './header';
import Footer from './footer';
import '@fontsource/open-sans';
import {} from '../styles/Layout.module.css';

const pageStyles = {
  margin: `0 auto`,
  padding: `0 0rem`,
  fontFamily: `Open Sans`,
};

export default function Layout({ children, headerText, root }) {
  return (
    <>
      <Header headerText={headerText} root={root} />

      <div style={pageStyles}>{children}</div>
      <Footer></Footer>
    </>
  );
}
