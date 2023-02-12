import { getMeHandler } from 'actions/auth';
import ProfilePaymentPageComponent from 'components/profile/payment';
import PageHeader from 'components/shared/page-header';
import { parseCookie } from 'utils/cookieParser';

const ProfilePaymentPage = ({ me, tab }) => {
  return (
    <>
      <PageHeader
        title={`${me?.name} - Profile > Payment`}
        content={'ShopPay Profile Payment page'}
      />
      <ProfilePaymentPageComponent me={me} tab={tab} />
    </>
  );
};

export async function getServerSideProps(context) {
  const tab = context.query.tab || 0;
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

  return {
    props: {
      me: getMeData?.data?.data,
      tab,
    },
  };
}

export default ProfilePaymentPage;
