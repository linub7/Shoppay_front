import styles from './styles.module.scss';

const CartPageComponentCheckout = ({
  subTotal,
  shippingFee,
  total,
  selected,
}) => {
  return (
    <div className={`${styles.cart__checkout} ${styles.card}`}>
      <h2>Order Summary</h2>
      <div className={styles.cart__checkout_line}>
        <span>Subtotal</span>
        <span>US${subTotal}</span>
      </div>
      <div className={styles.cart__checkout_line}>
        <span>Shipping</span>
        <span>+{shippingFee}$</span>
      </div>
      <div className={styles.cart__checkout_total}>
        <span>Total</span>
        <span>US {total}$</span>
      </div>
      <div className={styles.submit}>
        <button>Continue</button>
      </div>
    </div>
  );
};

export default CartPageComponentCheckout;
