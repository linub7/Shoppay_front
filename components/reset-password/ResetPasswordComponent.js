import { resetPasswordHandler } from 'actions/auth';
import SigninHeader from 'components/signin/signin-header/SigninHeader';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import * as Yup from 'yup';
import ResetPasswordForm from './reset-password-form';
import styles from './styles.module.scss';

const ResetPasswordComponent = ({ resetToken }) => {
  const [passInfo, setPassInfo] = useState({
    password: '',
    passwordConfirm: '',
  });
  const [loading, setLoading] = useState(false);
  const { password, passwordConfirm } = passInfo;

  const router = useRouter();

  const handleChangeInput = (e) => {
    const {
      target: { name, value },
    } = e;

    setPassInfo({ ...passInfo, [name]: value });
  };

  const resetPasswordValidation = Yup.object({
    password: Yup.string()
      .required('Password is required.')
      .min(8, 'Password must be between 8 and 36 characters')
      .max(36, 'Password must be between 8 and 36 characters'),
    passwordConfirm: Yup.string()
      .required('Password Confirmation is required.')
      .oneOf([Yup.ref('password')], 'Password must match.'),
  });

  const handleResetPassword = async () => {
    setLoading(true);
    const { err, data } = await resetPasswordHandler(
      password,
      passwordConfirm,
      resetToken
    );

    if (err) {
      console.log(err);
      setLoading(false);
      toast.error(err);
      return;
    }
    setLoading(false);
    toast.success('Your password changed successfully 👍.');
    setTimeout(() => {
      router.push('/auth/signin');
    }, 1500);
  };

  return (
    <div className={styles.reset}>
      <div className={styles.reset__container}>
        <SigninHeader>
          Reset your password <Link href={'/auth/signin'}>Login instead.</Link>
        </SigninHeader>
        <ResetPasswordForm
          password={password}
          passwordConfirm={passwordConfirm}
          handleChangeInput={handleChangeInput}
          handleResetPassword={handleResetPassword}
          resetPasswordValidation={resetPasswordValidation}
        />
      </div>
    </div>
  );
};

export default ResetPasswordComponent;
