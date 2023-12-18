import { getMeHandler } from 'actions/auth';
import { getAllProductsHandler } from 'actions/products';
import AdminProductsPageComponent from 'components/admin/products';
import PageHeader from 'components/shared/page-header';
import { parseCookie } from 'utils/cookieParser';

const AdminProductsPage = ({ products }) => {
  return (
    <>
      <PageHeader title={'Admin Products'} content={'ShopPay Admin Products'} />
      <AdminProductsPageComponent products={products} />
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
        destination: '/',
      },
    };
  }

  const { err: getAllProductsError, data: getAllProductsData } =
    await getAllProductsHandler();
  if (getAllProductsError) {
    console.log(getAllProductsError);
    return {
      redirect: {
        destination: '/',
      },
    };
  }

  return {
    props: {
      products: getAllProductsData?.data?.data,
    },
  };
}

export default AdminProductsPage;
