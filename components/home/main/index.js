import HomeMainHeader from './header';
import HomeMainMenu from './menu';
import HomeMainOffers from './offers';
import styles from './styles.module.scss';
import HomeMainSwiper from './swiper';
import HomeMainUserMenu from './user-menu';

const HomeMainComponent = () => {
  return (
    <div className={styles.main}>
      <HomeMainHeader />
      <HomeMainMenu />
      <HomeMainSwiper />
      <HomeMainOffers />
      <HomeMainUserMenu />
    </div>
  );
};

export default HomeMainComponent;
