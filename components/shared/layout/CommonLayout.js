import { useRouter } from 'next/router';
import FooterComponent from '../footer';
import HeaderComponent from '../header';
import PageHeader from '../page-header';

const CommonLayout = ({ children, pageHeaderTitle, pageHeaderContent }) => {
  const { pathname } = useRouter();

  return (
    <>
      <PageHeader title={pageHeaderTitle} content={pageHeaderContent} />
      <HeaderComponent />
      {children}
      {pathname !== '/cart' && <FooterComponent />}
    </>
  );
};

export default CommonLayout;
