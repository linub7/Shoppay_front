import HomeMainMenu from './menu';
import HomeMainOffers from './offers';
import styles from './styles.module.scss';
import HomeMainSwiper from './swiper';

const HomeMainComponent = () => {
  return (
    <div className={styles.main}>
      <div className={styles.header}>header</div>
      <HomeMainMenu />
      <HomeMainSwiper />
      <HomeMainOffers />
      <div className={styles.user}>user</div>
    </div>
  );
};

export default HomeMainComponent;
