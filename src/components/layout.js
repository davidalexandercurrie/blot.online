import React from 'react';
import Header from './header';
import Footer from './footer';
import '@fontsource/work-sans';
import {} from '../styles/Layout.module.css';

const pageStyles = {
  margin: `0 auto`,
  padding: `0 0rem`,
  fontFamily: `Work Sans, sans-serif`,
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
