import HomeComponent from 'components/home/HomeComponent';
import CommonLayout from 'components/shared/layout/CommonLayout';

export default function Home() {
  return (
    <CommonLayout>
      <HomeComponent />
    </CommonLayout>
  );
}

export async function getServerSideProps(context) {
  console.log(context.query);

  return {
    props: {},
  };
}
