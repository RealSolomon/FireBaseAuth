import React from 'react';
import Button from '@material-ui/core/Button';
import Alert from '@material-ui/lab/Alert';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Confirm() {
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
      <h2>Confirm account</h2>
      {error && (
        <Alert variant="outlined" severity="error">
          {error}
        </Alert>
      )}

      <p>
        Please confirm your email by clicking on the link in the confirmation
        email that we sent to ozzy@softcery.com
      </p>
      <Button
        variant="contained"
        color="primary"
        type="submit"
        disabled={loading}
      >
        Resend
      </Button>
      <Link to="/signup">Sign out</Link>
    </div>
  );
}

export default Confirm;
