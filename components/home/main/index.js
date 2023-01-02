import HomeMainOffers from './offers';
import styles from './styles.module.scss';
import HomeMainSwiper from './swiper';

const HomeMainComponent = () => {
  return (
    <div className={styles.main}>
      <div className={styles.header}>header</div>
      <div className={styles.menu}>main</div>
      <HomeMainSwiper />
      <HomeMainOffers />
      <div className={styles.user}>user</div>
    </div>
  );
};

export default HomeMainComponent;
