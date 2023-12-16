/* eslint-disable @next/next/no-img-element */
import styles from '../styles.module.scss';

import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation, Autoplay } from 'swiper';
import { swiperImageLinks } from 'constants';

const HomeMainSwiper = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mainSwiper"
      >
        {swiperImageLinks.map((link, index) => (
          <SwiperSlide key={index}>
            <img src={link} alt="swiper" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HomeMainSwiper;
