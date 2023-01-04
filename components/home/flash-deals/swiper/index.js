import styles from '../styles.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Navigation } from 'swiper';
import { flashDealsArray } from 'constants';
import FlashDealsSwiperOffersCard from './offers-card';

const FlashDealsSwiper = () => {
  return (
    <Swiper
      slidesPerView={6}
      spaceBetween={20}
      modules={[]}
      className="flashDeals__swiper"
    >
      <div className={styles.flashDeals__list}>
        {flashDealsArray.map((deal, i) => (
          <SwiperSlide key={i}>
            <FlashDealsSwiperOffersCard product={deal} />
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
};

export default FlashDealsSwiper;
