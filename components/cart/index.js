import CartPageComponentEmptyCart from './empty';
import CartPageComponentHeader from './header';
import styles from './styles.module.scss';

const CartPageComponent = () => {
  const cart = [];
  return (
    <>
      <CartPageComponentHeader />
      <div className={styles.cart}>
        {cart?.length > 1 ? (
          <div className={styles.cart__container}></div>
        ) : (
          <CartPageComponentEmptyCart />
        )}
      </div>
    </>
  );
};

export default CartPageComponent;
