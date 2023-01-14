import CartPageComponentHeader from 'components/cart/header';
import { useEffect, useState } from 'react';
import CheckoutPageComponentPayment from './payment';
import CheckoutPageComponentProducts from './products';
import CheckoutPageComponentShipping from './shipping';
import styles from './styles.module.scss';
import CheckoutPageComponentSummary from './summary';

const CheckoutPageComponent = ({ cart, user }) => {
  const [addresses, setAddresses] = useState(user?.addresses || []);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [totalAfterDiscount, setTotalAfterDiscount] = useState('');
  const [selectedAddress, setSelectedAddress] = useState('');

  useEffect(() => {
    let activeAddress = addresses?.find((addr) => addr.active === true);
    if (activeAddress) {
      setSelectedAddress(activeAddress);
    } else {
      setSelectedAddress('');
    }
  }, [addresses]);

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
        <div className={styles.checkout__side}>
          <CheckoutPageComponentPayment
            paymentMethod={paymentMethod}
            setPaymentMethod={setPaymentMethod}
          />
          <CheckoutPageComponentSummary
            totalAfterDiscount={totalAfterDiscount}
            setTotalAfterDiscount={setTotalAfterDiscount}
            user={user}
            cart={cart}
            paymentMethod={paymentMethod}
            selectedAddress={selectedAddress}
          />
        </div>
      </div>
    </>
  );
};

export default CheckoutPageComponent;
