/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import { useAuth } from '../context/AuthContext';
import { useHistory } from 'react-router-dom';

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
    <div
      css={{
        position: 'absolute',
        top: '383px',
        left: '50%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <h2
        css={{
          fontWeight: '800',
          fontSize: '36px',
          lineHeight: '44px',
          color: '#254353',
          textAlign: 'center',
          // position: 'absolute',
          // top: '50%',
          // left: '50%',
          // marginRight: '-50%',
          // transform: 'translate(-50%, -50%)',
        }}
      >
        Home page
      </h2>
      {error && (
        <Alert variant="outlined" severity="error">
          {error}
        </Alert>
      )}
      {/* <Button
        css={{
          marginTop: '40px',
        }}
        variant="contained"
        color="primary"
        onClick={handleSignOut}
      >
        Sign out
      </Button> */}
      <button
        onClick={handleSignOut}
        css={{
          marginTop: '40px',
          width: '430px',
          height: '50px',
          backgroundColor: '#57B3E4',
          borderRadius: '35px',
          border: 'none',
          fontSize: '18px',
          lineHeight: '22px',
          color: '#fff',
          fontWeight: '700',
          cursor: 'pointer',
        }}
      >
        Sign out
      </button>
    </div>
  );
}

export default Home;
