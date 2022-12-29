import FooterComponent from '../footer';
import HeaderComponent from '../header';

const CommonLayout = ({ children }) => {
  return (
    <>
      <HeaderComponent />
      {children}
      <FooterComponent />
    </>
  );
};

export default CommonLayout;
