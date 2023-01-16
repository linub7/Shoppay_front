import { getMeHandler } from 'actions/auth';
import AdminCreateProductPageComponent from 'components/admin/create-product';
import PageHeader from 'components/shared/page-header';
import { parseCookie } from 'utils/cookieParser';

const AdminCreateProductPage = () => {
  return (
    <>
      <PageHeader
        title={'Admin Create Product'}
        content={'ShopPay Admin Create Product'}
      />
      <AdminCreateProductPageComponent />
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

export default AdminCreateProductPage;
