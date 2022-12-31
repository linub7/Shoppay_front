import CommonLayout from 'components/shared/layout/CommonLayout';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  console.log(router);
  return <CommonLayout></CommonLayout>;
}
