import { paymentMethods } from 'constants';
import CheckoutPageComponentPaymentHeader from './header';
import CheckoutPageComponentPaymentItem from './payment-item';
import styles from './styles.module.scss';

const CheckoutPageComponentPayment = ({ setPaymentMethod, paymentMethod }) => {
  return (
    <div className={styles.payment}>
      <CheckoutPageComponentPaymentHeader />
      {paymentMethods.map((pm, index) => (
        <CheckoutPageComponentPaymentItem
          pm={pm}
          key={index}
          paymentMethod={paymentMethod}
          setPaymentMethod={setPaymentMethod}
        />
      ))}
    </div>
  );
};

export default CheckoutPageComponentPayment;
