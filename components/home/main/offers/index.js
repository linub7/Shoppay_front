/* eslint-disable @next/next/no-img-element */
import styles from '../styles.module.scss';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper';
import { offersArray } from 'constants';
import Link from 'next/link';

function HomeMainOffers() {
  return (
    <div className={styles.offers}>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="offers_swiper"
      >
        {offersArray.map((offer, i) => (
          <SwiperSlide key={i}>
            <Link href={'/'}>
              <img src={offer.image} alt={offer.image} />
            </Link>
            <span>{offer.price}</span>
            <span>-{offer.discount}%</span>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HomeMainOffers;
