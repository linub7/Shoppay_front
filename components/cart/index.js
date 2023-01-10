import { useSelector } from 'react-redux';
import CartPageComponentCartItemProduct from './cart-item-product';
import CartPageComponentEmptyCart from './empty';
import CartPageComponentHeader from './header';
import styles from './styles.module.scss';

const CartPageComponent = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <>
      <div className={styles.cart}>
        <div className={styles.cart__header}>
          <CartPageComponentHeader />
        </div>
        {cartItems?.length >= 1 ? (
          <div className={styles.cart__container}>
            <div className={styles.cart__products}>
              {cartItems?.map((item, index) => (
                <CartPageComponentCartItemProduct key={index} product={item} />
              ))}
            </div>
          </div>
        ) : (
          <CartPageComponentEmptyCart />
        )}
      </div>
    </>
  );
};

export default CartPageComponent;
