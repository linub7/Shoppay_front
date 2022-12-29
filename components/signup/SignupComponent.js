import { useState } from 'react';
import * as Yup from 'yup';
import Link from 'next/link';

import styles from './styles.module.scss';
import SignupHeader from './signup-header/SignupHeader';
import SignupForm from './signup-form/SignupForm';
import AuthButton from 'components/shared/buttons/auth-button';

const SignupComponent = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });
  const { name, email, password, passwordConfirm } = user;

  const handleChangeInput = (e) => {
    const {
      target: { value, name },
    } = e;
    setUser({ ...user, [name]: value });
  };

  const signupValidation = Yup.object({
    name: Yup.string()
      .required('What is your name?')
      .min(2, 'Name must be between 2 and 16 characters.')
      .max(16, 'Name must be between 2 and 16 characters.')
      .matches(/^[aA-zZ]/, 'Number and special characters are not allowed'),
    email: Yup.string()
      .required('Email Address is required.')
      .email('Please enter a valid email address.'),
    password: Yup.string()
      .required('Password is required.')
      .min(8, 'Password must be between 8 and 36 characters')
      .max(36, 'Password must be between 8 and 36 characters'),
    passwordConfirm: Yup.string()
      .required('Password Confirmation is required.')
      .oneOf([Yup.ref('password')], 'Password must match.'),
  });

  return (
    <div className={styles.login}>
      <div className={styles.login__container}>
        <SignupHeader />
        <SignupForm
          name={name}
          email={email}
          password={password}
          passwordConfirm={passwordConfirm}
          handleChangeInput={handleChangeInput}
          signupValidation={signupValidation}
        />
        <AuthButton type={'submit'} btnTitle="Sign up" />
        <div className={styles.forgot}>
          <Link href={'/auth/signin'}>Already have an account?</Link>
        </div>
      </div>
    </div>
  );
};

export default SignupComponent;
