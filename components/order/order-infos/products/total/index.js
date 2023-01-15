import styles from '../../../styles.module.scss';
import UserOrderPageComponentOrderInfosProductsTotalSubItem from '../total-sub-item';

const UserOrderPageComponentOrderInfosProductsTotal = ({ order }) => {
  return (
    <div className={styles.order__products_total}>
      {order?.couponApplied ? (
        <>
          <UserOrderPageComponentOrderInfosProductsTotalSubItem>
            <span>Subtotal: </span>
            <span>{order?.totalBeforeDiscount}</span>
          </UserOrderPageComponentOrderInfosProductsTotalSubItem>
          <UserOrderPageComponentOrderInfosProductsTotalSubItem>
            <span>
              Coupon Applied: <em>({order?.couponApplied})</em>
            </span>
            <span>
              -{(order?.totalBeforeDiscount - order?.total).toFixed(2)}$
            </span>
          </UserOrderPageComponentOrderInfosProductsTotalSubItem>
          <UserOrderPageComponentOrderInfosProductsTotalSubItem>
            <span>Tax Price: </span>
            <span>+{order?.taxPrice}$</span>
          </UserOrderPageComponentOrderInfosProductsTotalSubItem>
          <UserOrderPageComponentOrderInfosProductsTotalSubItem
            lastChild={true}
          >
            <span>Total To Pay: </span>
            <b>+{order?.total}$</b>
          </UserOrderPageComponentOrderInfosProductsTotalSubItem>
        </>
      ) : (
        <>
          <UserOrderPageComponentOrderInfosProductsTotalSubItem>
            <span>Tax Price: </span>
            <span>+{order?.taxPrice}$</span>
          </UserOrderPageComponentOrderInfosProductsTotalSubItem>
          <UserOrderPageComponentOrderInfosProductsTotalSubItem
            lastChild={true}
          >
            <span>Total To Pay: </span>
            <b>+{order?.total}$</b>
          </UserOrderPageComponentOrderInfosProductsTotalSubItem>
        </>
      )}
    </div>
  );
};

export default UserOrderPageComponentOrderInfosProductsTotal;
