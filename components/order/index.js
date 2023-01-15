import HeaderComponent from 'components/shared/header';
import UserOrderPageComponentOrderActions from './order-actions';
import UserOrderPageComponentOrderInfos from './order-infos';
import styles from './styles.module.scss';

const UserOrderPageComponent = ({
  orderData,
  paypalClientId,
  stripePublicKey,
}) => {
  return (
    <>
      <HeaderComponent />
      <div className={styles.order}>
        <div className={styles.container}>
          <UserOrderPageComponentOrderInfos order={orderData} />
          <UserOrderPageComponentOrderActions
            orderData={orderData}
            paypalClientId={paypalClientId}
            stripePublicKey={stripePublicKey}
          />
        </div>
      </div>
    </>
  );
};

export default UserOrderPageComponent;
