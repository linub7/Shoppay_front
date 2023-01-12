/* eslint-disable @next/next/no-img-element */
import {
  IoCallOutline,
  IoIdCardOutline,
  IoLocationOutline,
} from 'react-icons/io5';
import styles from '../styles.module.scss';

const CheckoutPageComponentShippingAddresses = ({
  addresses,
  user,
  handleStateActiveAddress,
}) => {
  return (
    <div className={styles.addresses}>
      {addresses.map((addr, index) => (
        <div
          className={`${styles.address} ${addr.active ? styles.active : ''}`}
          key={index}
          onClick={() => handleStateActiveAddress(addr._id)}
        >
          <div className={styles.address__side}>
            <img src={user?.image} alt="user" />
          </div>
          <div className={styles.address__col}>
            <span>
              <IoIdCardOutline />
              {addr?.firstName?.toUpperCase()} {addr?.lastName?.toUpperCase()}
            </span>
            <span>
              <IoCallOutline />
              {addr?.phoneNumber}
            </span>
          </div>
          <div className={styles.address__col}>
            <span>
              <IoLocationOutline />
              {addr?.address1}
            </span>
            <span>{addr?.address2}</span>
            <span>
              {addr?.city}, {addr?.state}, {addr?.country}
            </span>
            <span>{addr?.zipCode}</span>
          </div>
          <span
            className={styles.active__text}
            style={{
              display: `${!addr.active ? 'none' : ''}`,
            }}
          >
            Active
          </span>
        </div>
      ))}
    </div>
  );
};

export default CheckoutPageComponentShippingAddresses;
