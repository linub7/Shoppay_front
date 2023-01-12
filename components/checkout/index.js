import CartPageComponentHeader from 'components/cart/header';
import { useState } from 'react';
import CheckoutPageComponentProducts from './products';
import CheckoutPageComponentShipping from './shipping';
import styles from './styles.module.scss';

const CheckoutPageComponent = ({ cart, user }) => {
  const [addresses, setAddresses] = useState(user?.addresses || []);

  return (
    <>
      <CartPageComponentHeader />
      <div className={`${styles.container} ${styles.checkout}`}>
        <div className={styles.checkout__side}>
          <CheckoutPageComponentShipping
            addresses={addresses}
            setAddresses={setAddresses}
            user={user}
          />
          <CheckoutPageComponentProducts cart={cart} />
        </div>
        <div className={styles.checkout__side}></div>
      </div>
    </>
  );
};

export default CheckoutPageComponent;
