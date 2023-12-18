import { getMeHandler } from 'actions/auth';
import ProfileAddressesPageComponent from 'components/profile/addresses';
import PageHeader from 'components/shared/page-header';
import { parseCookie } from 'utils/cookieParser';

const ProfileAddressesPage = ({ me, tab }) => {
  return (
    <>
      <PageHeader
        title={`${me?.name} - Profile > Addresses`}
        content={'ShopPay Profile Addresses page'}
      />
      <ProfileAddressesPageComponent me={me} tab={tab} />
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

  return {
    props: {
      me: getMeData?.data?.data,
      tab,
    },
  };
}

export default ProfileAddressesPage;
