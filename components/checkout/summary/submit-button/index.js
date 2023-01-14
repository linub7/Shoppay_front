import styles from '../styles.module.scss';

const CheckoutPageComponentSummarySubmitButton = ({ handlePlaceOrder }) => {
  return (
    <div className={styles.submit_btn} onClick={handlePlaceOrder}>
      Place Order
    </div>
  );
};

export default CheckoutPageComponentSummarySubmitButton;
