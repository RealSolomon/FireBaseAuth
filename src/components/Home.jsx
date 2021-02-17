/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import Alert from '@material-ui/lab/Alert';
import { useAuth } from '../context/AuthContext';
import { useHistory } from 'react-router-dom';
import { styles } from '../utils/index';

function Home() {
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
    }
  }

  return (
    <div css={styles.container} style={{ marginTop: '302px' }}>
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
}

export default Home;
