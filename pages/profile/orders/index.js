import { getMeHandler } from 'actions/auth';
import { getAllUserOrdersHandler } from 'actions/orders';
import ProfileOrdersPageComponent from 'components/profile/orders';
import PageHeader from 'components/shared/page-header';
import slugify from 'slugify';
import { parseCookie } from 'utils/cookieParser';

const ProfileOrdersPage = ({ orders, me, tab }) => {
  return (
    <>
      <PageHeader
        title={`${me?.name} - Profile > Orders`}
        content={'ShopPay Profile Orders page'}
      />
      <ProfileOrdersPageComponent orders={orders} me={me} tab={tab} />
    </>
  );
};

export async function getServerSideProps(context) {
  const tab = context.query.tab || 0;
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

  const { err: getAllUserOrdersError, data: getAllUserOrdersData } =
    await getAllUserOrdersHandler(token);

  if (getAllUserOrdersError) {
    console.log(getAllUserOrdersError);
    return {
      redirect: {
        destination: '/',
      },
    };
  }

  const { filter } = context.query;
  console.log(filter);
  let orders = [];
  if (filter === 'all-orders') {
    orders = getAllUserOrdersData?.data?.data;
  } else if (filter === 'paid') {
    orders = getAllUserOrdersData?.data?.data.filter((order) => order?.isPaid);
  } else if (filter === 'unpaid') {
    orders = getAllUserOrdersData?.data?.data.filter((order) => !order?.isPaid);
  } else {
    orders = getAllUserOrdersData?.data?.data.filter(
      (order) =>
        slugify(order?.status, { lower: true }).toString() === filter.toString()
    );
  }

  return {
    props: {
      orders,
      me: getMeData?.data?.data,
      tab,
    },
  };
}

export default ProfileOrdersPage;
