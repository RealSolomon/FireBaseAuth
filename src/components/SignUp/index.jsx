/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/react';
import { connect } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import * as actions from '../../store/actions';
import { styles } from './styles';

const SignUpSchema = Yup.object().shape({
  displayName: Yup.string()
    .typeError('Must be string')
    .required('Required Field')
    .min(3, 'Too short!')
    .max(25, 'Too long!'),
  password: Yup.string()
    .min(8, 'The password is too short.')
    .required('The password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Password mismatch')
    .required('The confirm password field is required'),
  email: Yup.string()
    .email(
      'Invalid email'
      // '/^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/'
    )
    .required('The Email is required.'),
});

const SignUp = ({ signUp, loading, error }) => {
  return (
    <div>
      <Formik
        initialValues={{
          displayName: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={SignUpSchema}
        onSubmit={async (values, { setSubmitting }) => {
          await signUp(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, isValid }) => (
          <Form css={styles.container}>
            <div style={{ display: 'block' }}>
              <h2 style={{ marginBottom: '10px' }} css={styles.head}>
                Create account
              </h2>
              <label css={styles.label}>Your Name</label>
              <br />
              <Field
                css={styles.holder}
                style={{ marginBottom: '10px' }}
                type="name"
                name="displayName"
                placeholder="Tap your name..."
              />
              <ErrorMessage name="name" />
              <br />
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
              <Field
                type="password"
                name="password"
                placeholder="Your password..."
                css={styles.holder}
                style={{ marginBottom: '10px' }}
              />
              <br />
              <ErrorMessage name="password" />
              <br />
              <label
                style={{ marginTop: '10px', marginBottom: '-20px' }}
                css={styles.label}
              >
                Password Confirmation
              </label>
              <br />
              <Field
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password..."
                css={styles.holder}
                style={{ marginBottom: '10px' }}
              />
              <br />
              <ErrorMessage name="confirmPassword" />
              <br />
              <button
                disabled={!isValid || isSubmitting}
                css={styles.btn}
                type="submit"
              >
                Create account
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

const mapStateToProps = ({ auth }) => ({
  loading: auth.loading,
  error: auth.error,
});

const mapDispatchToProps = {
  signUp: actions.signUp,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
