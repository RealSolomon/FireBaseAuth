/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/react';
import { styles } from '../utils/index';
import logo from '../img/logo.svg';

function Header() {
  return (
    <>
      <div css={styles.headcont}>
        <p css={styles.logo}>
          <img src={logo} alt="Logo"></img>
        </p>
        <ul id="nav" css={styles.navbar}>
          <li>Find partner</li>
          <li>Blog</li>
          <li>Log in</li>
          <button css={styles.headbtn}>Post a pitch</button>
        </ul>
      </div>
    </>
  );
}
export default Header;
