import styles from './styles.module.scss';

const HomeMainComponent = () => {
  return (
    <div className={styles.main}>
      <div className={styles.header}>header</div>
      <div className={styles.menu}>main</div>
      <div className={styles.swiper}>swiper</div>
      <div className={styles.offers}>offers</div>
      <div className={styles.user}>user</div>
    </div>
  );
};

export default HomeMainComponent;
