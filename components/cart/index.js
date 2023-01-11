import { saveCartHandler } from 'actions/cart';
import ProductsSwiper from 'components/shared/products-swiper';
import { womenSwiper } from 'constants';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CartPageComponentCartHeader from './cart-header';
import CartPageComponentCartItemProduct from './cart-item-product';
import CartPageComponentCheckout from './checkout';
import CartPageComponentEmptyCart from './empty';
import CartPageComponentHeader from './header';
import CartPageComponentPaymentMethods from './payment-methods';
import styles from './styles.module.scss';

const CartPageComponent = () => {
  const [selected, setSelected] = useState([]);
  const [shippingFee, setShippingFee] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);

  const { cartItems } = useSelector((state) => state.cart);
  const { token } = useSelector((state) => state.auth);

  const router = useRouter();

  useEffect(() => {
    setShippingFee(
      selected.reduce((a, c) => a + Number(c.shipping), 0).toFixed(2)
    );
    setSubTotal(selected.reduce((a, c) => a + c.price * c.qty, 0).toFixed(2));
    setTotal(
      (
        selected.reduce((a, c) => a + c.price * c.qty, 0) + Number(shippingFee)
      ).toFixed(2)
    );
  }, [selected]);

  const handleSaveCartToDb = async () => {
    if (!token) return;
    const { err, data } = await saveCartHandler(selected, token);
    if (err) {
      console.log(err);
      return;
    }
    console.log(data);
    router.push('/checkout');
  };

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
              subTotal={subTotal}
              shippingFee={shippingFee}
              total={total}
              selected={selected}
              handleSaveCartToDb={handleSaveCartToDb}
            />
            <CartPageComponentPaymentMethods />
          </div>
        ) : (
          <CartPageComponentEmptyCart />
        )}
        <ProductsSwiper header={''} products={womenSwiper} bg="#fff" />
      </div>
    </>
  );
};

export default CartPageComponent;
