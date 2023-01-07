import FooterComponent from '../footer';
import HeaderComponent from '../header';
import PageHeader from '../page-header';

const CommonLayout = ({ children, pageHeaderTitle, pageHeaderContent }) => {
  return (
    <>
      <PageHeader title={pageHeaderTitle} content={pageHeaderContent} />
      <HeaderComponent />
      {children}
      <FooterComponent />
    </>
  );
};

export default CommonLayout;
