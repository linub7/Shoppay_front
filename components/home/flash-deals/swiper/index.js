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
      slidesPerView={1}
      spaceBetween={10}
      navigation={true}
      modules={[Navigation]}
      className="flashDeals__swiper"
      breakpoints={{
        450: {
          slidesPerView: 2,
        },
        630: {
          slidesPerView: 3,
        },
        920: {
          slidesPerView: 4,
        },
        1232: {
          slidesPerView: 5,
        },
        1520: {
          slidesPerView: 6,
        },
      }}
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
