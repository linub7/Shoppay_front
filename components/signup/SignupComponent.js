import { useState } from 'react';
import * as Yup from 'yup';
import Link from 'next/link';
import { toast } from 'react-hot-toast';
import Cookie from 'js-cookie';

import styles from './styles.module.scss';
import SignupHeader from './signup-header/SignupHeader';
import SignupForm from './signup-form/SignupForm';
import CustomDotLoader from 'components/shared/loaders/custom-dot-loader';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { authenticate } from 'store/slices/authSlice';
import { signupHandler } from 'actions/auth';

const SignupComponent = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });
  const { name, email, password, passwordConfirm } = user;

  const router = useRouter();
  const dispatch = useDispatch();

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

  const handleSignup = async () => {
    setLoading(true);
    const { err, data } = await signupHandler(
      name,
      email,
      password,
      passwordConfirm
    );
    if (err) {
      setLoading(false);
      console.log(err);
      toast.error(
        `OOOPS! Email already has been taken, please try another or signin 😔.`
      );
      return;
    }

    toast.success(data?.data?.message);
    const payload = { token: data?.token, user: data?.data?.user };
    Cookie.set('userData', JSON.stringify(payload));
    dispatch(authenticate({ token: data?.token, userData: data?.data?.user }));
    setLoading(false);
    setUser({ name: '', email: '', password: '', passwordConfirm: '' });

    setTimeout(() => {
      router.push('/');
    }, 2000);
  };

  // const handleSignup = async () => {
  //   setLoading(true);
  //   try {
  //     const { data } = await axios.post(
  //       `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/signup`,
  //       { name, email, password, passwordConfirm }
  //     );
  //     toast.success(data?.data?.message);
  //     const payload = { token: data?.token, user: data?.data?.user };
  //     Cookie.set('userData', JSON.stringify(payload));
  //     dispatch(
  //       authenticate({ token: data?.token, userData: data?.data?.user })
  //     );
  //     setLoading(false);
  //     setUser({ name: '', email: '', password: '', passwordConfirm: '' });

  //     setTimeout(() => {
  //       router.push('/');
  //     }, 2000);
  //   } catch (error) {
  //     setLoading(false);
  //     console.log(error);
  //     toast.error(
  //       `OOOPS! Email already has been taken, please try another or signin 😔.`
  //     );
  //   }
  // };

  return (
    <div className={styles.login}>
      <div className={styles.login__container}>
        {loading && <CustomDotLoader loading={loading} />}
        <SignupHeader />
        <SignupForm
          name={name}
          email={email}
          password={password}
          passwordConfirm={passwordConfirm}
          handleChangeInput={handleChangeInput}
          signupValidation={signupValidation}
          handleSignup={handleSignup}
        />
        <div className={styles.forgot}>
          <Link href={'/auth/signin'}>Already have an account?</Link>
        </div>
      </div>
    </div>
  );
};

export default SignupComponent;
