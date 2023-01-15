import styles from '../styles.module.scss';
import UserOrderPageComponentOrderActionsShippingAddress from './shipping-address';

const UserOrderPageComponentOrderActions = ({ order }) => {
  return (
    <div className={styles.order__actions}>
      <UserOrderPageComponentOrderActionsShippingAddress order={order} />
    </div>
  );
};

export default UserOrderPageComponentOrderActions;
