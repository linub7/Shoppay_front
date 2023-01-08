/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import styles from './styles.module.scss';

const CartPageComponentEmptyCart = () => {
  const { token } = useSelector((state) => state.auth);
  const router = useRouter();
  return (
    <div className={styles.empty}>
      <img src="/images/empty.png" alt="empty cart" />
      <h1>Cart is Empty.</h1>
      {!token && (
        <button
          onClick={() =>
            // TODO: go to signin page and fix routing Fn after signing in to exact page
            router.push('/auth/signin', { query: { path: router.pathname } })
          }
          className={styles.empty__btn}
        >
          Sign in / Register
        </button>
      )}
      <Link href={'/browse'} passHref>
        <a>
          <button className={`${styles.empty__btn} ${styles.empty__btn_v2}`}>
            Shop Now
          </button>
        </a>
      </Link>
    </div>
  );
};

export default CartPageComponentEmptyCart;
