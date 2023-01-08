/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { IoPlay } from 'react-icons/io5';
import styles from './styles.module.scss';

const CartPageComponentHeader = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__container}>
        <div className={styles.header__left}>
          <Link href={'/'}>
            <img src={'/images/shop-logo.png'} alt="logo" />
          </Link>
        </div>
        <div className={styles.header__right}>
          <Link href={'/browse'} passHref>
            <a>
              <span>Continue Shopping</span>
              <IoPlay />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPageComponentHeader;
