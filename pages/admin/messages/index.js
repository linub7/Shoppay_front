import { getMeHandler } from 'actions/auth';
import AdminMessagesPageComponent from 'components/admin/messages';
import PageHeader from 'components/shared/page-header';
import { parseCookie } from 'utils/cookieParser';

const AdminMessagesPage = () => {
  return (
    <>
      <PageHeader title={'Admin Messages'} content={'ShopPay Admin Messages'} />
      <AdminMessagesPageComponent />
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

  return {
    props: {},
  };
}

export default AdminMessagesPage;
