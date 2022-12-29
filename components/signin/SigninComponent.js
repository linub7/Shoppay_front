import { useState } from 'react';
import * as Yup from 'yup';

import SigninHeader from './signin-header/SigninHeader';
import styles from './styles.module.scss';
import SigninForm from './signin-form/SigninForm';
import AuthButton from 'components/shared/buttons/auth-button';
import Link from 'next/link';

const SigninComponent = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { email, password } = user;

  const handleChangeInput = (e) => {
    const {
      target: { value, name },
    } = e;
    setUser({ ...user, [name]: value });
  };

  const loginValidation = Yup.object({
    email: Yup.string()
      .required('Email Address is required.')
      .email('Please enter a valid email address.'),
    password: Yup.string()
      .required('Password is required.')
      .min(8, 'Password must be at least 8 character'),
  });
  return (
    <div className={styles.login}>
      <div className={styles.login__container}>
        <SigninHeader />
        <SigninForm
          email={email}
          password={password}
          handleChangeInput={handleChangeInput}
          loginValidation={loginValidation}
        />
        <AuthButton type={'submit'} btnTitle="Sign in" />
        <div className={styles.forgot}>
          <Link href={'/auth/signup'}>{`Don't have an account?`}</Link>
        </div>
        <div className={styles.forgot}>
          <Link href={'/auth/forgot-password'}>Forgot Password?</Link>
        </div>
      </div>
    </div>
  );
};

export default SigninComponent;
