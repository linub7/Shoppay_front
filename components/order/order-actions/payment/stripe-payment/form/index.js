import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { payWithStripeHandler } from 'actions/payment';
import { toast } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import styles from '../styles.module.scss';

const CARD_OPTIONS = {
  iconsStyle: 'solid',
  style: {
    base: {
      //   iconColor: '#000',
      //   color: '#000',
      //   fontSize: '16px',
      fontSmoothing: 'antialiased',
      //   ':-webkit-autofill': {
      //     color: '#000',
      //   },
      //   '::placeholder': {
      //     color: '#000',
      //   },
    },
    invalid: {
      iconColor: '#fd010169',
      color: '#fd010169',
    },
  },
};

const UserOrderPageComponentOrderActionsStripePaymentForm = ({
  total,
  orderId,
}) => {
  const { token } = useSelector((state) => state.auth);
  const stripe = useStripe();
  const elements = useElements();
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });
    if (!error) {
      const { id } = paymentMethod;
      const { err, data } = await payWithStripeHandler(
        orderId,
        total,
        id,
        token
      );
      if (err) {
        console.log(err);
        toast.error('OOPS, an error occurred');
        return;
      }
      if (data?.status === 'success') {
        window.location.reload(false);
      }
    } else {
      toast.error(error?.message);
    }
  };
  return (
    <div className={styles.stripe}>
      <form onSubmit={handleSubmitForm}>
        <CardElement options={CARD_OPTIONS} />
        <button type="submit">Pay</button>
      </form>
    </div>
  );
};

export default UserOrderPageComponentOrderActionsStripePaymentForm;
