import { getMeHandler } from 'actions/auth';
import AdminDashboardPageComponent from 'components/admin/dashboard';
import PageHeader from 'components/shared/page-header';
import { parseCookie } from 'utils/cookieParser';

const AdminDashboardPage = () => {
  return (
    <>
      <PageHeader
        title={'Admin Dashboard'}
        content={'ShopPay Admin Dashboard'}
      />
      <AdminDashboardPageComponent />
    </>
  );
};

export async function getServerSideProps(context) {
  const cookie = parseCookie(context.req.headers?.cookie);

  if (!cookie.userData) {
    return {
      redirect: {
        destination: '/',
      },
    };
  }

  const { token } = JSON.parse(cookie.userData);

  const { err: getMeError, data: getMeData } = await getMeHandler(token);
  if (getMeError) {
    console.log(getMeError);
    return {
      redirect: {
        destination: '/',
      },
    };
  }

  if (getMeData?.data?.data?.user?.role !== 'admin') {
    return {
      redirect: {
        destination: '/',
      },
    };
  }

  return {
    props: {},
  };
}

export default AdminDashboardPage;