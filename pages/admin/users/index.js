import { getMeHandler } from 'actions/auth';
import { getAllUsersHandler } from 'actions/users';
import AdminUsersPageComponent from 'components/admin/users';
import PageHeader from 'components/shared/page-header';
import { parseCookie } from 'utils/cookieParser';

const AdminUsersPage = ({ users }) => {
  return (
    <>
      <PageHeader title={'Admin Users'} content={'ShopPay Admin Users'} />
      <AdminUsersPageComponent users={users} />
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

  const { err: getAllUsersError, data: getAllUsersData } =
    await getAllUsersHandler(token);
  if (getAllUsersError) {
    console.log(getAllUsersError);
    return {
      redirect: {
        destination: '/',
      },
    };
  }

  return {
    props: {
      users: getAllUsersData?.data?.data?.reverse(),
    },
  };
}

export default AdminUsersPage;
