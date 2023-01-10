import { useSelector } from 'react-redux';
import CartPageComponentCartHeader from './cart-header';
import CartPageComponentCartItemProduct from './cart-item-product';
import CartPageComponentEmptyCart from './empty';
import CartPageComponentHeader from './header';
import styles from './styles.module.scss';

const CartPageComponent = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <>
      <CartPageComponentHeader />
      <div className={styles.cart}>
        {cartItems?.length > 0 ? (
          <div className={styles.cart__container}>
            <CartPageComponentCartHeader cartItems={cartItems} />
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
