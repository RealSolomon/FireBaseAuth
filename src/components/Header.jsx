/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/react';
import { styles } from '../utils/index';
import logo from '../img/logo.svg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <div css={styles.headcont}>
        <p css={styles.logo}>
          <Link to="/">
            <img src={logo} alt="Logo"></img>
          </Link>
        </p>
        <ul id="nav" css={styles.navbar}>
          <li>Find partner</li>
          <li>Blog</li>
          <li>
            <Link to="/login" css={styles.loglink}>
              Log in
            </Link>
          </li>
          <button css={styles.headbtn}>Post a pitch</button>
        </ul>
      </div>
    </>
  );
}
export default Header;
