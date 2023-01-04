import FlashDealsHeader from './header';
import styles from './styles.module.scss';
import FlashDealsSwiper from './swiper';

const FlashDealsComponent = () => {
  return (
    <div className={styles.flashDeals}>
      <FlashDealsHeader />
      <FlashDealsSwiper />
    </div>
  );
};

export default FlashDealsComponent;
