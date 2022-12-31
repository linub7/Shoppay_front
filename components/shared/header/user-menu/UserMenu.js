/* eslint-disable @next/next/no-img-element */
import { signoutHandler } from 'actions/auth';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IoLogOutOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import Cookie from 'js-cookie';

import styles from './styles.module.scss';
import { authenticate } from 'store/slices/authSlice';

const UserMenu = () => {
  const router = useRouter();
  const { userData, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleSignout = async () => {
    const { data, err } = await signoutHandler(token);
    if (err) {
      console.log(err);
      return;
    }
    Cookie.remove('userData');
    dispatch(authenticate({ token: null, userData: null }));
    window.location.href = '/auth/signin';
  };
  return (
    <div className={styles.menu}>
      <h4>Welcome to ShopPay</h4>
      {token ? (
        <div className={styles.flex}>
          <img
            src="/images/temp-user.png"
            alt="user"
            className={styles.menu__img}
          />
          <div className={styles.col}>
            <span>Welcome Back</span>
            <p>{userData?.name}</p>
            <button className={styles.btn_tertiary} onClick={handleSignout}>
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
