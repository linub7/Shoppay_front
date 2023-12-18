import { getMeHandler } from 'actions/auth';
import { getAllCategoriesHandler } from 'actions/category';
import { getAllProductsNameAndSubProductsHandler } from 'actions/products';
import AdminCreateProductPageComponent from 'components/admin/create-product';
import PageHeader from 'components/shared/page-header';
import { parseCookie } from 'utils/cookieParser';

const AdminCreateProductPage = ({ parents, categories }) => {
  return (
    <>
      <PageHeader
        title={'Admin Create Product'}
        content={'ShopPay Admin Create Product'}
      />
      <AdminCreateProductPageComponent
        parents={parents}
        categories={categories}
      />
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

  const {
    err: getAllProductsNameAndSubProductsError,
    data: getAllProductsNameAndSubProductsData,
  } = await getAllProductsNameAndSubProductsHandler(token);

  if (getAllProductsNameAndSubProductsError) {
    console.log(getAllProductsNameAndSubProductsError);
    return {
      redirect: {
        destination: '/',
      },
    };
  }

  const { err: getAllCategoriesError, data: getAllCategoriesData } =
    await getAllCategoriesHandler();
  if (getAllCategoriesError) {
    console.log(getAllCategoriesError);
    return {
      redirect: {
        destination: '/',
      },
    };
  }

  return {
    props: {
      parents: getAllProductsNameAndSubProductsData?.data?.data,
      categories: getAllCategoriesData?.data?.data,
    },
  };
}

export default AdminCreateProductPage;
