/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import Alert from '@material-ui/lab/Alert';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import mail from '../img/mail.svg';
import { styles } from '../utils/index';

function Confirm() {
  const [error, setError] = React.useState('');
  const { currentUser, sendemail } = useAuth();

  async function handleResend() {
    setError('');

    try {
      await sendemail();
    } catch {
      setError('Failed to resend the message');
    }
  }

  return (
    <>
      <div css={styles.confcont}>
        <div
          css={{
            float: 'left',
          }}
        >
          <h2 css={styles.head}>Confirm account</h2>
          {error && (
            <Alert variant="outlined" severity="error">
              {error}
            </Alert>
          )}
          <p css={styles.info}>
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
            css={styles.btn}
            style={{ marginBottom: '15px' }}
            onClick={handleResend}
          >
            Resend
          </button>
          <br />
          <Link css={styles.lnk} to="/signup">
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
