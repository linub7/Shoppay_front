import { PayPalButtons } from '@paypal/react-paypal-js';
import styles from '../../styles.module.scss';
import UserOrderPageComponentOrderActionsStripePayment from './stripe-payment';

const UserOrderPageComponentOrderActionsPayment = ({
  isPending,
  handleCreateOrder,
  handleOnApprove,
  handleOnError,
  orderData,
  stripePublicKey,
}) => {
  return (
    <div className={styles.order__payment}>
      {orderData?.paymentMethod === 'paypal' && (
        <div>
          {isPending ? (
            <span>Loading...</span>
          ) : (
            <PayPalButtons
              createOrder={handleCreateOrder}
              onApprove={handleOnApprove}
              onError={handleOnError}
            ></PayPalButtons>
          )}
        </div>
      )}
      {orderData?.paymentMethod === 'credit_card' && (
        <UserOrderPageComponentOrderActionsStripePayment
          total={orderData?.total}
          orderId={orderData?._id}
          stripePublicKey={stripePublicKey}
        />
      )}
    </div>
  );
};

export default UserOrderPageComponentOrderActionsPayment;
