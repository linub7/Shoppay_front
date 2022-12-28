import LinksComponent from './LinksComponent';
import Newsletter from './Newsletter';
import Socials from './Socials';
import styles from './styles.module.scss';

const FooterComponent = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <LinksComponent />
        <Socials />
        <Newsletter />
      </div>
    </footer>
  );
};

export default FooterComponent;
