/* eslint-disable @next/next/no-img-element */
import styles from './styles.module.scss';

const CartPageComponentPaymentMethods = () => {
  return (
    <div className={`${styles.card} ${styles.cart__method}`}>
      <h2 className={styles.header}>Payment Methods</h2>
      <div className={styles.images}>
        <img src="/images/payment/visa-payment.png" alt="visa" />
        <img src="/images/payment/mastercard-payment.png" alt="mastercard" />
        <img src="/images/payment/paypal-payment.png" alt="paypal" />
      </div>
      <h2 className={styles.header}>Buyer Protection</h2>
      <div className={styles.protection}>
        <img
          src="/images/payment/buyer-protection.png"
          alt="buyer protection"
        />
        {
          "Get full refund if the item is not as described or if it's not delivered"
        }
      </div>
    </div>
  );
};

export default CartPageComponentPaymentMethods;
