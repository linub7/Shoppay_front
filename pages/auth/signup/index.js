import CommonLayout from 'components/shared/layout/CommonLayout';
import SignupComponent from 'components/signup/SignupComponent';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Signup = () => {
  const { token } = useSelector((state) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (token) {
      router.push('/');
    }
  }, [token]);
  return (
    <CommonLayout pageHeaderTitle={'ShopPay - Signup'}>
      <SignupComponent />
    </CommonLayout>
  );
};

export default Signup;
