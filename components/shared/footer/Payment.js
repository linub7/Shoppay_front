/* eslint-disable @next/next/no-img-element */
import styles from './styles.module.scss';

const Payment = () => {
  return (
    <div className={styles.footer__payment}>
      <h3>We Accept</h3>
      <div className={styles.footer__flexwrap}>
        <img
          src="https://imgurl.ir/uploads/c596260_visa-payment.png"
          alt="visa"
        />
        {/* <img src="/images/payment/visa-payment.png" alt="visa" /> */}
        <img
          src="https://imgurl.ir/uploads/q169536_mastercard-payment.png"
          alt="mastercard"
        />
        {/* <img src="/images/payment/mastercard-payment.png" alt="mastercard" /> */}
        <img
          src="https://imgurl.ir/uploads/441361_paypal-payment.png"
          alt="paypal"
        />
        {/* <img src="/images/payment/paypal-payment.png" alt="paypal" /> */}
      </div>
    </div>
  );
};

export default Payment;
