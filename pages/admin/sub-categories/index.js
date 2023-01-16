import { getMeHandler } from 'actions/auth';
import { getAllSubCategoriesHandler } from 'actions/sub-category';
import AdminSubCategoriesPageComponent from 'components/admin/sub-categories';
import PageHeader from 'components/shared/page-header';
import { parseCookie } from 'utils/cookieParser';

const AdminSubCategoriesPage = ({ subcategories }) => {
  return (
    <>
      <PageHeader
        title={'Admin Sub Categories'}
        content={'ShopPay Admin Sub Categories'}
      />
      <AdminSubCategoriesPageComponent subcategories={subcategories} />
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

  const { err: getAllSubCategoriesError, data: getAllSubCategoriesData } =
    await getAllSubCategoriesHandler();

  if (getAllSubCategoriesError) {
    console.log(getAllSubCategoriesError);
    return {
      redirect: {
        destination: '/',
      },
    };
  }

  return {
    props: {
      subcategories: getAllSubCategoriesData?.data?.data,
    },
  };
}

export default AdminSubCategoriesPage;
