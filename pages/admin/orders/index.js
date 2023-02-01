import { getMeHandler } from 'actions/auth';
import { getAllOrdersHandler } from 'actions/orders';
import AdminOrdersPageComponent from 'components/admin/orders';
import PageHeader from 'components/shared/page-header';
import { parseCookie } from 'utils/cookieParser';

const AdminOrdersPage = ({ orders }) => {
  return (
    <>
      <PageHeader title={'Admin Orders'} content={'ShopPay Admin Orders'} />
      <AdminOrdersPageComponent orders={orders} />
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

  const { err: getAllOrdersError, data: getAllOrdersData } =
    await getAllOrdersHandler(token);

  if (getAllOrdersError) {
    console.log(getAllOrdersError);
    return {
      redirect: {
        destination: '/',
      },
    };
  }

  return {
    props: {
      orders: getAllOrdersData?.data?.data,
    },
  };
}

export default AdminOrdersPage;
