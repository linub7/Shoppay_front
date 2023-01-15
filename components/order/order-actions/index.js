import { usePayPalScriptReducer } from '@paypal/react-paypal-js';
import { useEffect, useReducer } from 'react';
import styles from '../styles.module.scss';
import UserOrderPageComponentOrderActionsPayment from './payment';
import UserOrderPageComponentOrderActionsShippingAddress from './shipping-address';

function reducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case 'PAY_REQUEST':
      return { ...state, loading: true };
    case 'PAY_SUCCESS':
      return { ...state, loading: false, success: true };
    case 'PAY_FAIL':
      return { ...state, loading: false, error: payload };
    case 'PAY_RESET':
      return { ...state, loading: false, success: false, error: false };

    default:
      return state;
  }
}

const UserOrderPageComponentOrderActions = ({
  orderData,
  paypalClientId,
  stripePublicKey,
}) => {
  const [{ isPending }, paypalDispatch] = usePayPalScriptReducer();
  const [{ loading, error, success }, dispatch] = useReducer(reducer, {
    loading: true,
    order: {},
    error: '',
  });

  useEffect(() => {
    if (!orderData?._id || success) {
      if (success) {
        dispatch({ type: 'PAY_RESET' });
      }
    } else {
      paypalDispatch({
        type: 'resetOptions',
        value: {
          'client-id': paypalClientId,
          currency: 'USD',
        },
      });
      paypalDispatch({
        type: 'setLoadingStatus',
        value: 'pending',
      });
    }
  }, [orderData, success]);

  const handleCreateOrder = () => {};

  const handleOnApprove = () => {};

  const handleOnError = () => {};
  return (
    <div className={styles.order__actions}>
      <UserOrderPageComponentOrderActionsShippingAddress order={orderData} />
      {!orderData?.isPaid && (
        <UserOrderPageComponentOrderActionsPayment
          handleCreateOrder={handleCreateOrder}
          handleOnApprove={handleOnApprove}
          handleOnError={handleOnError}
          orderData={orderData}
          stripePublicKey={stripePublicKey}
        />
      )}
    </div>
  );
};

export default UserOrderPageComponentOrderActions;
