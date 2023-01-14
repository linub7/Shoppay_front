import HeaderComponent from 'components/shared/header';
import UserOrderPageComponentOrderActions from './order-actions';
import UserOrderPageComponentOrderInfos from './order-infos';
import styles from './styles.module.scss';

const UserOrderPageComponent = ({ order }) => {
  return (
    <>
      <HeaderComponent />
      <div className={styles.order}>
        <div className={styles.container}>
          <UserOrderPageComponentOrderInfos />
          <UserOrderPageComponentOrderActions />
        </div>
      </div>
    </>
  );
};

export default UserOrderPageComponent;
