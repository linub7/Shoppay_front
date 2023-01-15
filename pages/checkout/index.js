import { getUserCartHandler } from 'actions/cart';
import CheckoutPageComponent from 'components/checkout';
import PageHeader from 'components/shared/page-header';
import { parseCookie } from 'utils/cookieParser';

const CheckoutPage = ({ cart }) => {
  return (
    <>
      <PageHeader
        title={'ShopPay - Checkout'}
        content={'ShopPay Checkout page'}
      />
      <CheckoutPageComponent cart={cart} user={cart?.user} />
    </>
  );
};

export async function getServerSideProps(context) {
  const cookie = parseCookie(context.req.headers?.cookie);
  if (!cookie.userData) {
    return {
      redirect: {
        destination: '/cart',
      },
    };
  }
  const { token } = JSON.parse(cookie.userData);

  const { err: getUserCartError, data: getUserCartData } =
    await getUserCartHandler(token);
  if (getUserCartError) {
    console.log(getUserCartData);
    return {
      redirect: {
        destination: '/cart',
      },
    };
  }
  console.log(getUserCartData);
  if (!getUserCartData.data?.data) {
    return {
      redirect: {
        destination: '/cart',
      },
    };
  }

  return {
    props: {
      cart: getUserCartData?.data?.data,
    },
  };
}

export default CheckoutPage;
