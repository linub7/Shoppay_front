import styles from '../../styles.module.scss';
import UserOrderPageComponentOrderInfosProductItem from './product-item';
import UserOrderPageComponentOrderInfosProductsTotal from './total';
import UserOrderPageComponentOrderInfosProductsTotalSubItem from './total-sub-item';

const UserOrderPageComponentOrderInfosProducts = ({ order }) => {
  return (
    <div className={styles.order__products}>
      {order?.products.map((product, index) => (
        <UserOrderPageComponentOrderInfosProductItem
          key={index}
          product={product}
        />
      ))}
      <UserOrderPageComponentOrderInfosProductsTotal order={order} />
    </div>
  );
};

export default UserOrderPageComponentOrderInfosProducts;
