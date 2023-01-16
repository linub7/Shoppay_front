import { getMeHandler } from 'actions/auth';
import { getAllSubCategoriesHandler } from 'actions/sub-category';
import { parseCookie } from 'utils/cookieParser';

const AdminSubCategoriesPage = ({ subcategories }) => {
  return <div>AdminSubCategoriesPage</div>;
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
