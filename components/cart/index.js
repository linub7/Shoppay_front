import { useState } from 'react';
import { useSelector } from 'react-redux';
import CartPageComponentCartHeader from './cart-header';
import CartPageComponentCartItemProduct from './cart-item-product';
import CartPageComponentCheckout from './checkout';
import CartPageComponentEmptyCart from './empty';
import CartPageComponentHeader from './header';
import styles from './styles.module.scss';

const CartPageComponent = () => {
  const [selected, setSelected] = useState([]);
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <>
      <CartPageComponentHeader />
      <div className={styles.cart}>
        {cartItems?.length > 0 ? (
          <div className={styles.cart__container}>
            <CartPageComponentCartHeader
              cartItems={cartItems}
              selected={selected}
              setSelected={setSelected}
            />
            <div className={styles.cart__products}>
              {cartItems?.map((item, index) => (
                <CartPageComponentCartItemProduct
                  key={index}
                  product={item}
                  selected={selected}
                  setSelected={setSelected}
                />
              ))}
            </div>
            <CartPageComponentCheckout
              subTotal={''}
              shippingFee={''}
              total={''}
              selected={[]}
            />
          </div>
        ) : (
          <CartPageComponentEmptyCart />
        )}
      </div>
    </>
  );
};

export default CartPageComponent;
