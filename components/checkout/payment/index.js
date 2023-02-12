import { paymentMethods } from 'constants';
import CheckoutPageComponentPaymentHeader from './header';
import CheckoutPageComponentPaymentItem from './payment-item';
import styles from './styles.module.scss';

const CheckoutPageComponentPayment = ({
  setPaymentMethod,
  paymentMethod,
  profile = false,
}) => {
  return (
    <div className={styles.payment}>
      {!profile && <CheckoutPageComponentPaymentHeader />}
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
