import CommonLayout from 'components/shared/layout/CommonLayout';
import SigninComponent from 'components/signin/SigninComponent';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Signin = () => {
  const { token } = useSelector((state) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (token) {
      router.push('/');
    }
  }, [token]);

  return (
    <CommonLayout>
      <SigninComponent />
    </CommonLayout>
  );
};

export default Signin;
