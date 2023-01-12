/* eslint-disable @next/next/no-img-element */
import styles from '../styles.module.scss';

const CheckoutPageComponentProductItem = ({ prod }) => {
  return (
    <div className={styles.product}>
      <div className={styles.product__img}>
        <img src={prod?.image} alt="image" />
        <div className={styles.product__infos}>
          <img src={prod?.color?.image} alt="image" />
          <span>{prod?.size}</span>
          <span>x{prod?.qty}</span>
        </div>
      </div>
      <div className={styles.product__name}>
        {prod?.name?.length > 18
          ? `${prod?.name?.substring(0, 18)}...`
          : prod?.name}
      </div>
      <div className={styles.product__price}>
        {(prod?.price * prod?.qty).toFixed(2)}$
      </div>
    </div>
  );
};

export default CheckoutPageComponentProductItem;
