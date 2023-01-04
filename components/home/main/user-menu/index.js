/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import {
  IoChatbubbleEllipsesOutline,
  IoClipboardOutline,
  IoHeartOutline,
  IoSettingsOutline,
} from 'react-icons/io5';
import { useSelector } from 'react-redux';
import styles from '../styles.module.scss';
import UserMenuInfos from './infos';
import UserMenuLinks from './links';
import UserMenuSwiper from './swiper';

const HomeMainUserMenu = () => {
  const { token, userData } = useSelector((state) => state.auth);
  return (
    <div className={styles.user}>
      {/* <img src="/images/" alt="" /> */}
      <div className={styles.user__container}>
        <UserMenuInfos token={token} userData={userData} />
        <UserMenuLinks />
        <UserMenuSwiper />
      </div>
    </div>
  );
};

export default HomeMainUserMenu;
