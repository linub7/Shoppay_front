import styles from '../../../styles.module.scss';

const UserOrderPageComponentOrderActionsShippingAddressShippingBillingTemplate =
  ({
    title,
    firstName,
    lastName,
    address1,
    address2,
    state,
    city,
    zipCode,
    country,
  }) => {
    return (
      <div className={styles.order__address_shipping}>
        <h2>{title}</h2>
        <span>
          {firstName}
          {lastName}
        </span>
        <span>{address1}</span>
        <span>{address2}</span>
        <span>
          {state}, {city}
        </span>
        <span>{zipCode}</span>
        <span>{country}</span>
      </div>
    );
  };

export default UserOrderPageComponentOrderActionsShippingAddressShippingBillingTemplate;
