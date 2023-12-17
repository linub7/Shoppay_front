/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { IoCartOutline, IoSearchOutline } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import styles from './styles.module.scss';

const MainSection = () => {
  const { cart } = useSelector((state) => ({ ...state }));

  return (
    <div className={styles.main}>
      <div className={styles.main__container}>
        <Link href={'/'} passHref>
          <a className={styles.logo}>
            <img
              src={'https://imgurl.ir/uploads/a1771_shop-logo.png'}
              alt="logo"
            />
          </a>
        </Link>
        <div className={styles.search}>
          <input type="text" placeholder="Search" />
          <div className={styles.search__icon}>
            <IoSearchOutline />
          </div>
        </div>
        <Link href={'/href'} passHref>
          <a className={styles.cart}>
            <IoCartOutline />
            {cart?.cartItems?.length > 0 && (
              <span>{cart?.cartItems?.length}</span>
            )}
          </a>
        </Link>
      </div>
    </div>
  );
};

export default MainSection;
