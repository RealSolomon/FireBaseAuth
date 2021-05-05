/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import * as actions from '../../store/actions';
import { connect } from 'react-redux';

import { styles } from './styles';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email.')
    .required('The email is required.'),
  password: Yup.string()
    .required('The password is required.')
    .min(8, 'Too short.'),
});

const Login = ({ login, loading }) => {
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={LoginSchema}
      onSubmit={async (values, { setSubmitting }) => {
        await login(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, isValid }) => (
        <Form css={styles.container}>
          <div style={{ display: 'block' }}>
            <h2 style={{ marginBottom: '10px' }} css={styles.head}>
              Log In
            </h2>
            <label css={styles.label}>Email</label>
            <br />
            <Field
              css={styles.holder}
              style={{ marginBottom: '10px' }}
              type="email"
              name="email"
              placeholder="you@example.com"
            />
            <br />
            <ErrorMessage name="email" />
            <br />
            <label
              css={styles.label}
              style={{ display: 'flex', marginTop: '10px' }}
            >
              Password &nbsp; <p css={styles.pass}>(min 8 symbols)</p>
            </label>
            <br />
            <Field
              css={styles.holder}
              style={{ marginTop: '-10px', marginBottom: '10px' }}
              type="password"
              name="password"
              placeholder="••••••••••••••••••••"
            />
            <br />
            <ErrorMessage name="password" />
            <br />
            <button
              css={styles.btn}
              disabled={!isValid || isSubmitting}
              loading={loading ? 'Logging in...' : null}
              type="submit"
            >
              Log In
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

const mapStateToProps = ({ auth }) => ({
  loading: auth.loading,
  error: auth.error,
});

const mapDispatchToProps = {
  login: actions.signIn,
  //   cleanUp: actions.clean,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
