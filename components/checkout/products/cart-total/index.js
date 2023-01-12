import styles from '../styles.module.scss';

const CheckoutPageComponentProductsCartTotal = ({ cart }) => {
  return (
    <div className={styles.total}>
      Subtotal: <b>{cart?.cartTotal}$</b>
    </div>
  );
};

export default CheckoutPageComponentProductsCartTotal;
