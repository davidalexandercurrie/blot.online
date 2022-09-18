import React from 'react';
import { Link } from 'gatsby';
import {
  navInactive,
  navLink,
  navContainer,
} from '../styles/Layout.module.css';

const nav = () => {
  return (
    <nav className={navContainer}>
      <div>
        <Link to="/issue-01" className={navLink}>
          Issue 01
        </Link>
      </div>
      <div className={navInactive}>News</div>
      <div>
        <Link to="/about" className={navLink}>
          About
        </Link>
      </div>
      <div>
        <Link to="/contact" className={navLink}>
          Contact
        </Link>
      </div>

      <div className={navInactive}>Archive</div>
    </nav>
  );
};

export default nav;
