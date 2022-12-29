import { Form, Formik } from 'formik';

import LoginInput from 'components/shared/inputs/login-input';
import styles from '../styles.module.scss';

const SignupForm = ({
  name,
  email,
  password,
  passwordConfirm,
  signupValidation,
  handleChangeInput,
}) => {
  return (
    <div className={styles.login__form}>
      <h1>Sign up</h1>
      <p>Get Access to one of the best E-Shopping services in the world.</p>
      <Formik
        enableReinitialize
        initialValues={{
          name,
          email,
          password,
          passwordConfirm,
        }}
        validationSchema={signupValidation}
      >
        {(form) => (
          <Form>
            <LoginInput
              type="text"
              name="name"
              value={name}
              icon={'user'}
              placeholder={'Name'}
              onChange={handleChangeInput}
            />
            <LoginInput
              type="email"
              name="email"
              value={email}
              icon={'email'}
              placeholder={'Email Address'}
              onChange={handleChangeInput}
            />
            <LoginInput
              type="password"
              name="password"
              value={password}
              icon={'password'}
              placeholder={'Password'}
              onChange={handleChangeInput}
            />
            <LoginInput
              type="password"
              name="passwordConfirm"
              value={passwordConfirm}
              icon={'passwordConfirm'}
              placeholder={'Password Confirm'}
              onChange={handleChangeInput}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignupForm;
