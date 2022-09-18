import React from 'react';
import { useState, useEffect, useRef } from 'react';
import '@fontsource/open-sans';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import {
  headerContainer,
  headerLogo,
  headerCenter,
  showHeaderCenter,
  hideHeaderCenter,
  showHeaderBackground,
  hideHeaderBackground,
  headerRight,
} from '../styles/Layout.module.css';

const Logo = () => {
  return (
    <Link to="/" className={headerLogo}>
      <StaticImage
        src="../images/blot-logo-transparent.png"
        width={120}
        height={120}
        placeholder="none"
        alt="BLOT Logo"
      />
    </Link>
  );
};

const Header = ({ headerText, root }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const ref = useRef();
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position > 500 ? true : false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header
      className={`${headerContainer}  ${
        root
          ? null
          : scrollPosition
          ? showHeaderBackground
          : hideHeaderBackground
      }`}
    >
      <Logo />
      <div
        ref={ref}
        className={`${headerCenter} ${
          root
            ? showHeaderCenter
            : scrollPosition
            ? showHeaderCenter
            : hideHeaderCenter
        }`}
      >
        {headerText}
      </div>
      <div className={headerRight}></div>
    </header>
  );
};

export default Header;
