import CommonLayout from 'components/shared/layout/CommonLayout';
import { useRouter } from 'next/router';

export default function Home() {
  return <CommonLayout></CommonLayout>;
}

export async function getServerSideProps(context) {
  console.log(context.query);

  return {
    props: {},
  };
}
