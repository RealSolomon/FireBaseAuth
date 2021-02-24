/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/react';
import { useHistory } from 'react-router-dom';
import Alert from '@material-ui/lab/Alert';

import { styles } from './styles';
import { useAuth } from '../../context/AuthContext';

export const Login = () => {
  const emailRef = React.useRef();
  const passwordRef = React.useRef();
  const { login } = useAuth();
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push('/');
    } catch {
      setError('Failed to sign in');
      console.error(error, 'Failed to sign in');
    }
    setLoading(false);
  }

  return (
    <div css={styles.container}>
      <h2 css={styles.head}>Log In</h2>
      {error && (
        <Alert variant="outlined" severity="error">
          {error}
        </Alert>
      )}
      <form css={styles.form} onSubmit={handleSubmit}>
        <label css={styles.label}>Email</label>
        <br />
        <input
          className="holder"
          css={styles.holder}
          style={{ marginBottom: '40px' }}
          type="email"
          placeholder="you@example.com"
          ref={emailRef}
        ></input>
        <br />
        <label css={styles.label} style={{ display: 'flex' }}>
          Password &nbsp; <p css={styles.pass}>(min 8 symbols)</p>
        </label>
        <input
          className="holder"
          css={styles.holder}
          type="password"
          placeholder="••••••••••••••••••••"
          ref={passwordRef}
        ></input>
        <br />
        <button css={styles.btn} type="submit" disabled={loading}>
          Log In
        </button>
      </form>
    </div>
  );
};
