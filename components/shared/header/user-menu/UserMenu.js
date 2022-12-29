/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IoLogOutOutline } from 'react-icons/io5';
import styles from './styles.module.scss';

const UserMenu = ({ loggedIn }) => {
  const router = useRouter();
  return (
    <div className={styles.menu}>
      <h4>Welcome to ShopPay</h4>
      {loggedIn ? (
        <div className={styles.flex}>
          <img
            src="/images/temp-user.png"
            alt="user"
            className={styles.menu__img}
          />
          <div className={styles.col}>
            <span>Welcome Back</span>
            <p>Linubb</p>
            <button className={styles.btn_tertiary}>
              <span>Sign out</span>
              <IoLogOutOutline />
            </button>
          </div>
        </div>
      ) : (
        <div className={styles.flex}>
          <button
            className={styles.btn_primary}
            onClick={() => router.push('/auth/signup')}
          >
            Register
          </button>
          <button
            className={styles.btn_outlined}
            onClick={() => router.push('/auth/signin')}
          >
            Log in
          </button>
        </div>
      )}
      <hr />
      <ul>
        <li>
          <Link href={'-profile'}>Account</Link>
        </li>
        <li>
          <Link href={'/profile/orders'}>My Orders</Link>
        </li>
        <li>
          <Link href={'/profile/messages'}>Message Center</Link>
        </li>
        <li>
          <Link href={'/profile/address'}>Address</Link>
        </li>
        <li>
          <Link href={'/profile/wishlist'}>Wishlist</Link>
        </li>
      </ul>
    </div>
  );
};

export default UserMenu;
