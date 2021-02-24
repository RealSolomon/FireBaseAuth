/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/react';
import Alert from '@material-ui/lab/Alert';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../context/AuthContext';
import { styles } from './styles';

export const Home = () => {
  const [error, setError] = React.useState('');
  const { signout } = useAuth();
  const history = useHistory();

  async function handleSignOut() {
    setError('');

    try {
      await signout();
      history.push('/signup');
    } catch {
      setError('Failed to sign out');
      console.error(error, 'Failed to sign in');
    }
  }

  return (
    <div css={styles.container}>
      <h2 css={styles.head}>Home page</h2>
      {error && (
        <Alert variant="outlined" severity="error">
          {error}
        </Alert>
      )}
      <button onClick={handleSignOut} css={styles.btn}>
        Sign out
      </button>
    </div>
  );
};
