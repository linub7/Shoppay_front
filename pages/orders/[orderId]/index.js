import { getOrderHandler } from 'actions/orders';
import PageHeader from 'components/shared/page-header';
import UserOrderPageComponent from 'components/order';
import { parseCookie } from 'utils/cookieParser';

const UserOrderPage = ({ order }) => {
  return (
    <>
      <PageHeader title={'ShopPay - Order'} content={'ShopPay Order Page'} />
      <UserOrderPageComponent order={order} />
    </>
  );
};

export async function getServerSideProps(context) {
  const {
    query: { orderId },
  } = context;
  const cookie = parseCookie(context.req.headers.cookie);
  const { token } = JSON.parse(cookie.userData);
  const { err: getOrderHandlerError, data: getOrderHandlerData } =
    await getOrderHandler(orderId, token);

  if (getOrderHandlerError) {
    console.log(getOrderHandlerError);
    return {
      redirect: {
        destination: '/',
      },
    };
  }
  return {
    props: {
      order: getOrderHandlerData?.data?.data?.order,
    },
  };
}

export default UserOrderPage;
