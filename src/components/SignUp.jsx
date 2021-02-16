/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Alert from '@material-ui/lab/Alert';
import { useAuth } from '../context/AuthContext';
import { useHistory } from 'react-router-dom';
import { jsx } from '@emotion/react';

function SignUp() {
  const emailRef = React.useRef();
  const passwordRef = React.useRef();
  const { signup } = useAuth();
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
    } catch {
      setError('Failed to create an account');
    }
    setLoading(false);
  }

  return (
    <div
      css={{
        position: 'absolute',
        // top: '50%',
        left: '50%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        top: '288px',
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
        Create account
      </h2>
      {error && (
        <Alert variant="outlined" severity="error">
          {error}
        </Alert>
      )}
      <form
        css={{
          marginTop: '55px',
        }}
        onSubmit={handleSubmit}
      >
        <label
          css={{
            fontWeight: '600',
            fontSize: '14px',
            lineHeight: '17px',
            color: 'rgba(37, 67, 83, 0.75)',
          }}
        >
          Email
        </label>
        <br />
        <input
          className="holder"
          css={{
            width: '430px',
            height: '40px',
            border: '0.5px solid #C7C7C7',
            boxSizing: 'border-box',
            borderRadius: '3px',
            marginTop: '4px',
            fontWeight: '500',
            fontSize: '14px',
            lineHeight: '17px',
            letterSpacing: '0.03em',
            paddingLeft: '20px',
            marginBottom: '45px',
          }}
          type="email"
          placeholder="you@example.com"
          inputRef={emailRef}
        ></input>
        <br />
        <label
          css={{
            fontWeight: '600',
            fontSize: '14px',
            lineHeight: '17px',
            color: 'rgba(37, 67, 83, 0.75)',
            display: 'flex',
          }}
        >
          Password &nbsp;{' '}
          <p
            css={{
              color: 'rgba(37, 67, 83, 0.4)',
              fontWeight: '600',
            }}
          >
            (min 8 symbols)
          </p>
        </label>
        <input
          className="holder"
          css={{
            width: '430px',
            height: '40px',
            border: '0.5px solid #C7C7C7',
            boxSizing: 'border-box',
            borderRadius: '3px',
            marginTop: '4px',
            fontWeight: '500',
            fontSize: '14px',
            lineHeight: '17px',
            letterSpacing: '0.03em',
            paddingLeft: '20px',
          }}
          type="password"
          placeholder="••••••••••••••••••••"
          inputRef={passwordRef}
        ></input>
        {/* <TextField
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
        /> */}
        <br />
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
          }}
          type="submit"
          disabled={loading}
        >
          Create account
        </button>
        {/* <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={loading}
        >
          Create account
        </Button> */}
      </form>
    </div>
  );
}

export default SignUp;
