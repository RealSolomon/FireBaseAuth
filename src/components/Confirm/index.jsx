/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/react';
import Alert from '@material-ui/lab/Alert';
import { Link } from 'react-router-dom';

import { useAuth } from '../../context/AuthContext';
import { styles } from './styles';

import mail from '../../img/mail.svg';
import spinner from '../../img/spinblue.svg';

export const Confirm = () => {
  const [error, setError] = React.useState('');
  const { currentUser, sendemail } = useAuth();
  const [loading, setLoading] = React.useState(false);
  const [timerRunning, setTimerRunning] = React.useState(true);

  const [counter, setCounter] = React.useState(60);

  React.useEffect(() => {
    const data = localStorage.getItem('timer-counter');
    if (data) {
      setCounter(JSON.parse(data));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem('timer-counter', JSON.stringify(counter));
  });

  React.useEffect(() => {
    let timer;
    if (counter > 0) {
      timer = setTimeout(() => setCounter((c) => c - 1), 1000);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [counter]);

  async function handleSend() {
    setError('');
    setLoading(true);
    setTimerRunning(false);

    try {
      setTimeout(() => {
        setLoading(false);
        setCounter(60);
        setTimerRunning(true);
      }, 2500);
      await sendemail();
    } catch {
      setError('Failed to resend the message');
      console.error(error, 'Failed to sign in');
    }
  }

  return (
    <>
      <div css={styles.content}>
        <div css={styles.leftside}>
          <h2 css={styles.head}>Confirm account</h2>
          {error && (
            <Alert variant="outlined" severity="error">
              {error}
            </Alert>
          )}
          <p css={styles.info}>
            Please confirm your email by clicking on the link in the
            confirmation email that we sent to &nbsp;{' '}
            <p css={styles.infomail}>{currentUser.email}</p>
          </p>

          {timerRunning ? (
            <button css={styles.btn} onClick={handleSend} disabled={counter}>
              {!loading & (counter > 0) ? `Resend in ${counter}s` : 'Resend'}
            </button>
          ) : (
            <button css={styles.btn} onClick={handleSend} disabled>
              {loading ? (
                <img src={spinner} alt="spinner"></img>
              ) : (
                `Resend in ${counter}s`
              )}
            </button>
          )}

          <br />
          <Link css={styles.lnk} to="/signup">
            Sign out
          </Link>
        </div>
        <p css={styles.rightside}>
          <img src={mail} alt="mail"></img>
        </p>
      </div>
    </>
  );
};
