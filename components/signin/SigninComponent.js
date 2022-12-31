import { useState } from 'react';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import Cookie from 'js-cookie';
import { toast } from 'react-hot-toast';

import SigninHeader from './signin-header/SigninHeader';
import styles from './styles.module.scss';
import SigninForm from './signin-form/SigninForm';
import Link from 'next/link';
import CustomDotLoader from 'components/shared/loaders/custom-dot-loader';
import { authenticate } from 'store/slices/authSlice';
import { signinHandler } from 'actions/auth';

const SigninComponent = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { email, password } = user;

  const dispatch = useDispatch();

  const router = useRouter();

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
  const handleSignin = async () => {
    setLoading(true);
    const { err, data } = await signinHandler(email, password);
    if (err) {
      setLoading(false);
      toast.error(err);
      return;
    }
    const payload = { token: data?.token, userData: data?.data?.user };
    Cookie.set('userData', JSON.stringify(payload));
    dispatch(authenticate({ token: data?.token, userData: data?.data?.user }));
    setLoading(false);
    setUser({ email: '', password: '' });
    toast.success('Signin Successfully 👍.');
    setTimeout(() => {
      router.push('/');
    }, 2000);
  };

  // const handleSignin = async () => {
  //   setLoading(true);
  //   try {
  //     const { data } = await axios.post(
  //       `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/signin`,
  //       { email, password }
  //     );
  //     const payload = { token: data?.token, userData: data?.data?.user };
  //     Cookie.set('userData', JSON.stringify(payload));
  //     dispatch(
  //       authenticate({ token: data?.token, userData: data?.data?.user })
  //     );
  //     setLoading(false);
  //     setUser({ email: '', password: '' });
  //     toast.success('Signin Successfully 👍.');
  //     setTimeout(() => {
  //       router.push('/');
  //     }, 2000);
  //   } catch (error) {
  //     setLoading(false);
  //     console.log(error);
  //     toast.error(`OOOPS! ${error.response?.data?.message}`);
  //   }
  // };
  return (
    <div className={styles.login}>
      <div className={styles.login__container}>
        {loading && <CustomDotLoader loading={loading} />}
        <SigninHeader />
        <SigninForm
          email={email}
          password={password}
          handleChangeInput={handleChangeInput}
          loginValidation={loginValidation}
          handleSignin={handleSignin}
        />
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
