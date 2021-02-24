/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Link } from 'react-router-dom';

import { styles } from './styles';
import logo from '../../img/logo.svg';

export const Header = () => (
  <div css={styles.content}>
    <p css={styles.logo}>
      <Link to="/">
        <img src={logo} alt="Logo"></img>
      </Link>
    </p>
    <ul id="nav" css={styles.navbar}>
      <li>Find partner</li>
      <li>Blog</li>
      <li>
        <Link to="/login" css={styles.link}>
          Log in
        </Link>
      </li>
      <button css={styles.btn}>Post a pitch</button>
    </ul>
  </div>
);
