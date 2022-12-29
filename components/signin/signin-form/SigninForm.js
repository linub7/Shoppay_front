import { Form, Formik } from 'formik';

import LoginInput from 'components/shared/inputs/login-input';
import styles from '../styles.module.scss';

const SigninForm = ({
  email,
  password,
  loginValidation,
  handleChangeInput,
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
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SigninForm;
