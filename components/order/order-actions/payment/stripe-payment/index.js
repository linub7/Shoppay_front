import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import UserOrderPageComponentOrderActionsStripePaymentForm from './form';
import styles from './styles.module.scss';

const UserOrderPageComponentOrderActionsStripePayment = ({
  total,
  orderId,
  stripePublicKey,
}) => {
  const stripePromise = loadStripe(stripePublicKey);
  return (
    <Elements stripe={stripePromise}>
      <UserOrderPageComponentOrderActionsStripePaymentForm
        total={total}
        orderId={orderId}
      />
    </Elements>
  );
};

export default UserOrderPageComponentOrderActionsStripePayment;
