/* eslint-disable @next/next/no-img-element */
import { IoChevronForwardOutline } from 'react-icons/io5';
import styles from '../../styles.module.scss';

const UserOrderPageComponentOrderInfosHeader = ({ order }) => {
  return (
    <div className={styles.order__header}>
      <div className={styles.order__header_head}>
        Home <IoChevronForwardOutline /> Orders <IoChevronForwardOutline /> ID{' '}
        {order?._id}
      </div>
      <div className={styles.order__header_status}>
        Payment Status:{' '}
        {order?.isPaid ? (
          <img
            src="https://imgurl.ir/uploads/r407857_verified.png"
            alt="paid"
          />
        ) : (
          // <img src="/images/verified.png" alt="paid" />
          <img
            src="https://imgurl.ir/uploads/w070695_unverified.png"
            alt="unpaid"
          />
          // <img src="/images/unverified.png" alt="unpaid" />
        )}
      </div>
      <div className={styles.order__header_status}>
        Order Status:
        <span
          className={
            order?.status === 'Not Processed'
              ? styles.notProcessed
              : order?.status === 'Processing'
              ? styles.processing
              : order?.status === 'Dispatched'
              ? styles.dispatched
              : order?.status === 'Cancelled'
              ? styles.cancelled
              : order?.status === 'Completed'
              ? styles.completed
              : ''
          }
        >
          {order?.status}
        </span>
      </div>
    </div>
  );
};

export default UserOrderPageComponentOrderInfosHeader;
