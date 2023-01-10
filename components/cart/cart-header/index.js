import styles from './styles.module.scss';

const CartPageComponentCartHeader = ({ cartItems }) => {
  return (
    <div className={`${styles.cart__header} ${styles.card}`}>
      <h1>Item Summary({cartItems?.length})</h1>
      <div className={styles.flex}>
        <div className={styles.checkbox}>
          <span>Select All Items</span>
        </div>
      </div>
    </div>
  );
};

export default CartPageComponentCartHeader;
