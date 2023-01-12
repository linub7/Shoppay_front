/* eslint-disable @next/next/no-img-element */
import CheckoutPageComponentProductsCartTotal from './cart-total';
import CheckoutPageComponentProductsHeader from './header';
import CheckoutPageComponentProductItem from './product-item';
import styles from './styles.module.scss';

const CheckoutPageComponentProducts = ({ cart }) => {
  return (
    <div className={styles.products}>
      <CheckoutPageComponentProductsHeader cart={cart} />
      <div className={styles.products__wrap}>
        {cart?.products?.map((prod, index) => (
          <CheckoutPageComponentProductItem key={index} prod={prod} />
        ))}
      </div>
      <CheckoutPageComponentProductsCartTotal cart={cart} />
    </div>
  );
};

export default CheckoutPageComponentProducts;
