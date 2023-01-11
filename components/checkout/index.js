import CartPageComponentHeader from 'components/cart/header';
import { useState } from 'react';
import CheckoutPageComponentShipping from './shipping';
import styles from './styles.module.scss';

const CheckoutPageComponent = ({ cart, user }) => {
  const [selectedAddress, setSelectedAddress] = useState();
  return (
    <>
      <CartPageComponentHeader />
      <div className={styles.checkout}>
        <div className={styles.checkout__side}>
          <CheckoutPageComponentShipping
            selectedAddress={selectedAddress}
            setSelectedAddress={setSelectedAddress}
            user={user}
          />
        </div>
        <div className={styles.checkout__side}></div>
      </div>
    </>
  );
};

export default CheckoutPageComponent;
