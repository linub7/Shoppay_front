/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useState } from 'react';
import {
  IoCaretDownOutline,
  IoHeartOutline,
  IoPersonCircleOutline,
  IoShieldHalfOutline,
} from 'react-icons/io5';
import { useSelector } from 'react-redux';
import styles from './styles.module.scss';

const TopSection = ({ setIsMenuVisible }) => {
  const { token, userData } = useSelector((state) => state.auth);
  return (
    <div className={styles.top}>
      <div className={styles.top__container}>
        <div></div>
        <ul className={styles.top__list}>
          <li>
            <img
              src={'/images/america-flag.webp'}
              // src="https://static.vecteezy.com/system/resources/thumbnails/009/418/326/small/american-flag-free-png.png"
              alt="american flag"
            />
            <span>United States / usd</span>
          </li>
          <li>
            <IoShieldHalfOutline />
            <span>Buyer Protection</span>
          </li>
          <li>
            <span>Customer Service</span>
          </li>
          <li>
            <span>Help</span>
          </li>
          <li>
            <IoHeartOutline />
            <Link href={'/profile/wishlist'}>
              <span>Wishlist</span>
            </Link>
          </li>
          <div onClick={() => setIsMenuVisible((prev) => !prev)}>
            {token ? (
              <li>
                <div className={styles.flex}>
                  <img src="/images/temp-user.png" alt="user" />
                  <span>
                    <b>{userData?.name}</b>
                  </span>
                  <IoCaretDownOutline />
                </div>
              </li>
            ) : (
              <li>
                <div className={styles.flex}>
                  <IoPersonCircleOutline />
                  <span>Account</span>
                  <IoCaretDownOutline />
                </div>
              </li>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default TopSection;
