import { getMeHandler } from 'actions/auth';
import { getAllCouponsHandler } from 'actions/coupon';
import AdminCouponsPageComponent from 'components/admin/coupons';
import PageHeader from 'components/shared/page-header';
import { parseCookie } from 'utils/cookieParser';

const AdminCouponsPage = ({ coupons }) => {
  return (
    <>
      <PageHeader title={'Admin Coupons'} content={'ShopPay Admin Coupons'} />
      <AdminCouponsPageComponent coupons={coupons} />
    </>
  );
};

export async function getServerSideProps(context) {
  const cookie = parseCookie(context.req.headers?.cookie);

  if (!cookie?.userData) {
    return {
      redirect: {
        destination: '/',
      },
    };
  }

  const { token } = JSON.parse(cookie?.userData);

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
        destination: '/admin/dashboard',
      },
    };
  }

  const { err: getAllCouponsError, data: getAllCouponsData } =
    await getAllCouponsHandler(token);

  if (getAllCouponsError) {
    console.log(getAllCouponsError);
    return {
      redirect: {
        destination: '/',
      },
    };
  }

  return {
    props: {
      coupons: getAllCouponsData?.data?.data,
    },
  };
}

export default AdminCouponsPage;
