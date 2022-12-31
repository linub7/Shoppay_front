import { Form, Formik } from 'formik';

import LoginInput from 'components/shared/inputs/login-input';
import styles from '../styles.module.scss';
import AuthButton from 'components/shared/buttons/auth-button';

const SigninForm = ({
  email,
  password,
  loginValidation,
  handleChangeInput,
  handleSignin,
}) => {
  return (
    <div className={styles.login__form}>
      <h1>Sign in</h1>
      <p>Get Access to one of the best E-Shopping services in the world.</p>
      <Formik
        enableReinitialize
        initialValues={{
          email,
          password,
        }}
        validationSchema={loginValidation}
        onSubmit={() => handleSignin()}
      >
        {(form) => (
          <Form>
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
            <AuthButton type={'submit'} btnTitle="Sign in" />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SigninForm;
