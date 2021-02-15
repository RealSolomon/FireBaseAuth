import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';
import { useAuth } from '../context/AuthContext';

function SignUp() {
  const emailRef = React.useRef();
  const passwordRef = React.useRef();
  const { signup } = useAuth();
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError('Failed to create an account');
    }
    setLoading(false);
  }

  return (
    <div>
      <h2>Create account</h2>
      {error && (
        <Alert variant="outlined" severity="error">
          {error}
        </Alert>
      )}
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          inputRef={emailRef}
        />
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          inputRef={passwordRef}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={loading}
        >
          Create account
        </Button>
      </form>
    </div>
  );
}

export default SignUp;
