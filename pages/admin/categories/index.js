import { getMeHandler } from 'actions/auth';
import { getAllCategoriesHandler } from 'actions/category';
import AdminCategoriesPageComponent from 'components/admin/categories';
import PageHeader from 'components/shared/page-header';
import { parseCookie } from 'utils/cookieParser';

const AdminCategoriesPage = ({ categories }) => {
  console.log(categories);
  return (
    <>
      <PageHeader
        title={'Admin Categories'}
        content={'ShopPay Admin Categories'}
      />
      <AdminCategoriesPageComponent categories={categories} />
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
      categories: getAllCategoriesData?.data?.data,
    },
  };
}

export default AdminCategoriesPage;
