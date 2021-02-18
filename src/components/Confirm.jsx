/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';
import Alert from '@material-ui/lab/Alert';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import mail from '../img/mail.svg';
import { styles } from '../utils/index';
import spinner from '../img/spinblue.svg';

function Confirm() {
  const [error, setError] = React.useState('');
  const { currentUser, sendemail } = useAuth();
  const [loading, setLoading] = React.useState(false);

  const [counter, setCounter] = React.useState(60);
  React.useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
  }, [counter]);

  async function handleResend() {
    setError('');
    setLoading(true);

    try {
      // await sendemail();
      setTimeout(() => {
        setLoading(false);
      }, 2500);
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
            {loading ? <img src={spinner} alt="spinner"></img> : 'Resend'}
            {counter}
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
