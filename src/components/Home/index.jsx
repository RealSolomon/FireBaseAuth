/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';
import { jsx } from '@emotion/react';
import { useHistory } from 'react-router-dom';
import { styles } from './styles';

const Home = ({ logout, firebase }) => {
  const history = useHistory();

  async function handleSignOut() {
    await logout();
    history.push('/signup');
  }

  return (
    <div css={styles.container}>
      <h2 css={styles.head}>Home page</h2>
      <div>{firebase.profile.displayName}</div>
      <div>{firebase.auth.email}</div>
      <button onClick={handleSignOut} css={styles.btn}>
        Sign out
      </button>
    </div>
  );
};

const mapStateToProps = ({ firebase }) => ({
  firebase,
});

const mapDispatchToProps = {
  logout: actions.signOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
