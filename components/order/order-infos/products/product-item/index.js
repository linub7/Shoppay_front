/* eslint-disable @next/next/no-img-element */
import styles from '../../../styles.module.scss';

const UserOrderPageComponentOrderInfosProductItem = ({ product }) => {
  return (
    <div className={styles.product}>
      <div className={styles.product__img}>
        <img src={product?.image} alt={product.name} />
      </div>
      <div className={styles.product__infos}>
        <h1 className={styles.product__infos_name}>
          {product?.name?.length > 30
            ? `${product?.name?.substring(0, 30)}...`
            : product?.name}
        </h1>
        <div className={styles.product__infos_style}>
          <img src={product?.color?.image} alt="product color image" /> /{' '}
          {product?.size}
        </div>
        <div className={styles.product__infos_priceQty}>
          {product?.price}$ x {product?.qty}
        </div>
        <div className={styles.product__infos_total}>
          {product?.price * product?.qty} $
        </div>
      </div>
    </div>
  );
};

export default UserOrderPageComponentOrderInfosProductItem;
