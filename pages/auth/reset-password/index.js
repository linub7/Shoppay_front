import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ResetPasswordComponent from 'components/reset-password/ResetPasswordComponent';
import CommonLayout from 'components/shared/layout/CommonLayout';

const ResetPassword = ({ resetToken }) => {
  const { token } = useSelector((state) => state.auth);
  const router = useRouter();

  useEffect(() => {
    if (token) {
      router.push('/');
    }
  }, [token]);
  return (
    <CommonLayout>
      <ResetPasswordComponent resetToken={resetToken} />
    </CommonLayout>
  );
};

export async function getServerSideProps(context) {
  const {
    query: { resetToken },
  } = context;

  return {
    props: {
      resetToken,
    },
  };
}

export default ResetPassword;
