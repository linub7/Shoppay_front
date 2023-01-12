import styles from '../styles.module.scss';

const CheckoutPageComponentProductsHeader = ({ cart }) => {
  return (
    <div className={styles.products__header}>
      <h1>Cart</h1>
      <span>
        {cart?.products?.length === 1
          ? '1 item'
          : `${cart?.products?.length} items`}
      </span>
    </div>
  );
};

export default CheckoutPageComponentProductsHeader;
