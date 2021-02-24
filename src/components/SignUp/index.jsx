/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import Alert from '@material-ui/lab/Alert';
import { jsx } from '@emotion/react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../context/AuthContext';
import { styles } from './styles';

export const SignUp = () => {
  const emailRef = React.useRef();
  const passwordRef = React.useRef();
  const { signup, sendemail } = useAuth();
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push('/confirm');
      await sendemail();
    } catch {
      setError('Failed to create an account');
      console.error(error, 'Failed to sign in');
    }
    setLoading(false);
  }

  return (
    <div css={styles.container}>
      <h2 css={styles.head}>Create account</h2>
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
          Create account
        </button>
      </form>
    </div>
  );
};
