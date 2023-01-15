/* eslint-disable @next/next/no-img-element */
import styles from '../../styles.module.scss';
import UserOrderPageComponentOrderActionsShippingAddressShippingBillingTemplate from './shipping-billing-template';

const UserOrderPageComponentOrderActionsShippingAddress = ({ order }) => {
  return (
    <div className={styles.order__address}>
      <h1>{"Customer's Order"}</h1>
      <div className={styles.order_address_user}>
        <div className={styles.order_address_user_infos}>
          <img src={order?.user?.image} alt={order?.user?.name} />
          <div>
            <span>{order?.user?.name}</span>
            <span>{order?.user?.email}</span>
          </div>
        </div>
      </div>
      <UserOrderPageComponentOrderActionsShippingAddressShippingBillingTemplate
        title={'Shipping Address'}
        firstName={order?.shippingAddress?.firstName}
        lastName={order?.shippingAddress?.lastName}
        address1={order?.shippingAddress?.address1}
        address2={order?.shippingAddress?.address2}
        state={order?.shippingAddress?.state}
        city={order?.shippingAddress?.city}
        zipCode={order?.shippingAddress?.zipCode}
        country={order?.shippingAddress?.country}
      />
      <UserOrderPageComponentOrderActionsShippingAddressShippingBillingTemplate
        title={'Billing Address'}
        firstName={order?.shippingAddress?.firstName}
        lastName={order?.shippingAddress?.lastName}
        address1={order?.shippingAddress?.address1}
        address2={order?.shippingAddress?.address2}
        state={order?.shippingAddress?.state}
        city={order?.shippingAddress?.city}
        zipCode={order?.shippingAddress?.zipCode}
        country={order?.shippingAddress?.country}
      />
    </div>
  );
};

export default UserOrderPageComponentOrderActionsShippingAddress;
