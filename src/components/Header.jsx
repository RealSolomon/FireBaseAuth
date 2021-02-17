/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { css, jsx } from '@emotion/react';
import logo from '../img/logo.svg';

function Header() {
  const styles = {
    headcont: css`
      width: 100%;
      height: 81px;
      background-color: #fff;
      display: flex;
      justify-content: space-between;
    `,
    logo: css`
      margin-left: 51px;
    `,
    navbar: css`
      background-color: #fff;
    `,
    btn: css`
      margin-right: 51px;
      background-color: #57b3e4;
      border-radius: 5px;
      padding: 10px 26px 10px 24px;
      border: none;
      color: #fff;
      font-weight: bold;
      font-size: 18px;
      line-height: 22px;
      align-items: center;
      text-align: center;
    `,
  };

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
          <button css={styles.btn}>Post a pitch</button>
        </ul>
      </div>
    </>
  );
}
export default Header;
