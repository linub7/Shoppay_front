/* eslint-disable @next/next/no-img-element */
import { useSelector } from 'react-redux';

import styles from '../styles.module.scss';
import UserMenuInfos from './infos';
import UserMenuLinks from './links';
import UserMenuSwiper from './swiper';

const HomeMainUserMenu = () => {
  const { token, userData } = useSelector((state) => state.auth);
  return (
    <div className={styles.user}>
      <div className={styles.user__container}>
        <UserMenuInfos token={token} userData={userData} />
        <UserMenuLinks />
        <UserMenuSwiper />
      </div>
    </div>
  );
};

export default HomeMainUserMenu;
