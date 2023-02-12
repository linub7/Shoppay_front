import { getMeHandler } from 'actions/auth';
import ProfileSecurityPageComponent from 'components/profile/security';
import PageHeader from 'components/shared/page-header';
import { parseCookie } from 'utils/cookieParser';

const ProfileSecurityPage = ({ me, tab }) => {
  return (
    <>
      <PageHeader
        title={`${me?.name} - Profile > Security`}
        content={'ShopPay Profile Security page'}
      />
      <ProfileSecurityPageComponent me={me} tab={tab} />
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

export default ProfileSecurityPage;
