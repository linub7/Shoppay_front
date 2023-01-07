/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from 'swiper/react';

import styles from '../styles.module.scss';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import Link from 'next/link';
import { similarProducts } from 'constants';

const SingleProductComponentInfosSimilarProducts = () => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={5}
      slidesPerGroup={3}
      navigation={true}
      modules={[Navigation]}
      className="swiper similar_swiper"
      breakpoints={{
        640: {
          width: 640,
          slidesPerView: 5,
        },
      }}
    >
      {similarProducts.map((simProd, i) => (
        <SwiperSlide key={i}>
          <Link href="">
            <img src={simProd} alt="similar product" />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SingleProductComponentInfosSimilarProducts;
