import { getAdminDashboardStuffHandler } from 'actions/admin';
import { getMeHandler } from 'actions/auth';
import AdminDashboardPageComponent from 'components/admin/dashboard';
import PageHeader from 'components/shared/page-header';
import { parseCookie } from 'utils/cookieParser';

const AdminDashboardPage = ({ users, orders, products }) => {
  return (
    <>
      <PageHeader
        title={'Admin Dashboard'}
        content={'ShopPay Admin Dashboard'}
      />
      <AdminDashboardPageComponent
        users={users}
        orders={orders}
        products={products}
      />
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

  if (getMeData?.data?.data?.role !== 'admin') {
    return {
      redirect: {
        destination: '/',
      },
    };
  }

  const { err: getAdminDashboardStuffError, data: getAdminDashboardStuffData } =
    await getAdminDashboardStuffHandler(token);

  if (getAdminDashboardStuffError) {
    console.log(getAdminDashboardStuffError);
    return {
      redirect: {
        destination: '/',
      },
    };
  }

  return {
    props: {
      users: getAdminDashboardStuffData?.data?.data?.users,
      orders: getAdminDashboardStuffData?.data?.data?.orders,
      products: getAdminDashboardStuffData?.data?.data?.products,
    },
  };
}

export default AdminDashboardPage;
