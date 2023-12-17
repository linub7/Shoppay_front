import Link from 'next/link';
import { useState } from 'react';
import * as Yup from 'yup';
import { toast } from 'react-hot-toast';

import SigninHeader from 'components/signin/signin-header/SigninHeader';
import ForgotPasswordForm from './forgot-password-form';
import styles from './styles.module.scss';
import { forgotPasswordHandler } from 'actions/auth';
import CustomDotLoader from 'components/shared/loaders/custom-dot-loader';
import { forgotPasswordValidation } from 'utils/formValidations';

const ForgotPasswordComponent = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChangeInput = (e) => setEmail(e.target.value);

  // const forgotPasswordValidation = Yup.object({
  //   email: Yup.string()
  //     .required('Email Address is required.')
  //     .email('Please enter a valid email address.'),
  // });

  const handleSendRequest = async () => {
    setLoading(true);
    const { err, data } = await forgotPasswordHandler(email);
    if (err) {
      console.log(err);
      setLoading(false);
      toast.error(err);
      return;
    }
    setLoading(false);
    toast.success(data?.message);
    setEmail('');
  };

  return (
    <div className={styles.forgot}>
      <div className={styles.forgot__container}>
        {loading && <CustomDotLoader loading={loading} />}
        <SigninHeader>
          Forgot your password?{' '}
          <Link href={'/auth/signin'}>Login instead.</Link>
        </SigninHeader>
        <ForgotPasswordForm
          email={email}
          forgotPasswordValidation={forgotPasswordValidation}
          handleChangeInput={handleChangeInput}
          handleSendRequest={handleSendRequest}
        />
      </div>
    </div>
  );
};

export default ForgotPasswordComponent;
