import { IoChevronForwardOutline } from 'react-icons/io5';
import styles from '../styles.module.scss';
import UserOrderPageComponentOrderInfosHeader from './header';
import UserOrderPageComponentOrderInfosProducts from './products';

const UserOrderPageComponentOrderInfos = ({ order }) => {
  return (
    <div className={styles.order__infos}>
      <UserOrderPageComponentOrderInfosHeader order={order} />
      <UserOrderPageComponentOrderInfosProducts order={order} />
    </div>
  );
};

export default UserOrderPageComponentOrderInfos;
