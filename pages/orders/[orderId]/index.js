import { getOrderHandler } from 'actions/orders';
import PageHeader from 'components/shared/page-header';
import UserOrderPageComponent from 'components/order';
import { parseCookie } from 'utils/cookieParser';

const UserOrderPage = ({ orderData, paypalClientId, stripePublicKey }) => {
  return (
    <>
      <PageHeader title={'ShopPay - Order'} content={'ShopPay Order Page'} />
      <UserOrderPageComponent
        orderData={orderData}
        paypalClientId={paypalClientId}
        stripePublicKey={stripePublicKey}
      />
    </>
  );
};

export async function getServerSideProps(context) {
  const {
    query: { orderId },
  } = context;
  const cookie = parseCookie(context.req.headers.cookie);
  if (!cookie?.userData) {
    return {
      redirect: {
        destination: '/cart',
      },
    };
  }
  const { token } = JSON.parse(cookie?.userData);
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
  const paypalClientId = process.env.PAYPAL_CLIENT_ID;
  const stripePublicKey = process.env.STRIPE_PUBLIC_KEY;
  return {
    props: {
      orderData: getOrderHandlerData?.data?.data?.order,
      paypalClientId,
      stripePublicKey,
    },
  };
}

export default UserOrderPage;
