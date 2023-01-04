/* eslint-disable @next/next/no-img-element */
// Import Swiper React components
import styles from '../../styles.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { EffectCards } from 'swiper';
import { userSwiperArray } from 'constants';

const UserMenuSwiper = () => {
  return (
    <div className={styles.user__swiper}>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="userMenu__swiper"
        style={{
          maxWidth: '180px',
          height: '240px',
          marginTop: '4rem',
        }}
      >
        {userSwiperArray.map((item, i) => (
          <SwiperSlide key={i}>
            <img src={item?.image} alt="user_swiper" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default UserMenuSwiper;
