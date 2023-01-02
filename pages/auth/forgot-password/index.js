import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ForgotPasswordComponent from 'components/forgot-password/ForgotPasswordComponent';
import CommonLayout from 'components/shared/layout/CommonLayout';

const ForgotPassword = () => {
  const { token } = useSelector((state) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (token) {
      router.push('/');
    }
  }, [token]);

  return (
    <CommonLayout>
      <ForgotPasswordComponent />
    </CommonLayout>
  );
};

export default ForgotPassword;
