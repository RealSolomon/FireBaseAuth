/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import mail from '../img/mail.svg';

function Confirm() {
  const [error, setError] = React.useState('');
  const { currentUser, signout } = useAuth();
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
    <>
      <div
        css={{
          position: 'absolute',
          top: '283px',
          left: '50%',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div
          css={{
            float: 'left',
            marginTop: '56px',
          }}
        >
          <h2
            css={{
              fontWeight: '800',
              fontSize: '36px',
              lineHeight: '44px',
              color: '#254353',
              textAlign: 'center',
            }}
          >
            Confirm account
          </h2>
          {error && (
            <Alert variant="outlined" severity="error">
              {error}
            </Alert>
          )}
          <p
            css={{
              width: '294px',
              height: '51px',
              fontWeight: '600',
              fontSize: '14px',
              lineHeight: '17px',
              textAlign: 'center',
              color: 'rgba(37, 67, 83, 0.4)',
              marginTop: '20px',
              marginLeft: '70px',
            }}
          >
            Please confirm your email by clicking on the link in the
            confirmation email that we sent to &nbsp;{' '}
            <p
              css={{
                color: 'rgba(37, 67, 83, 0.75)',
                display: 'inline',
              }}
            >
              {currentUser.email}
            </p>
          </p>
          <button
            css={{
              marginTop: '40px',
              width: '430px',
              height: '50px',
              background: '#57B3E4',
              borderRadius: '35px',
              border: 'none',
              fontStyle: 'normal',
              fontWeight: 'bold',
              fontSize: '18px',
              lineHeight: '22px',
              color: '#fff',
              cursor: 'pointer',
              marginBottom: '15px',
            }}
            onClick={handleSignOut}
          >
            Resend
          </button>
          {/* <Button variant="contained" color="primary" onClick={handleSignOut}>
        Resend
      </Button> */}
          <br />
          <Link
            css={{
              fontWeight: 600,
              fontSize: '14px',
              lineHeight: '17px',
              color: 'rgba(37, 67, 83, 0.75)',
              marginLeft: '43%',
            }}
            to="/signup"
          >
            Sign out
          </Link>
        </div>
        <p
          css={{
            marginLeft: '243px',
            float: 'right',
          }}
        >
          <img src={mail} alt="mail"></img>
        </p>
      </div>
    </>
  );
}

export default Confirm;
