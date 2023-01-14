import styles from '../../styles.module.scss';
import UserOrderPageComponentOrderInfosProductItem from './product-item';

const UserOrderPageComponentOrderInfosProducts = ({ order }) => {
  return (
    <div className={styles.order__products}>
      {order?.products.map((product, index) => (
        <UserOrderPageComponentOrderInfosProductItem
          key={index}
          product={product}
        />
      ))}
    </div>
  );
};

export default UserOrderPageComponentOrderInfosProducts;
