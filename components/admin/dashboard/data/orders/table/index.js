import Link from 'next/link';
import {
  IoCheckmarkCircleOutline,
  IoCloseCircle,
  IoEye,
} from 'react-icons/io5';
import styles from '../../../styles.module.scss';

const AdminDashboardPageComponentDataOrdersTable = ({ orders }) => {
  return (
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Total</td>
          <td>Payment</td>
          <td>Status</td>
          <td>View</td>
        </tr>
      </thead>
      <tbody>
        {orders?.map((order, i) => (
          <tr key={i}>
            <td>{order?.user?.name}</td>
            <td>{order?.total}</td>
            <td>
              {order?.isPaid ? (
                <IoCheckmarkCircleOutline size={25} color="#6cc070" />
              ) : (
                <IoCloseCircle size={25} color="#e74d3c" />
              )}
            </td>
            <td>
              <div
                className={`${styles.status} ${
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
                }`}
              >
                {order?.status}
              </div>
            </td>
            <td>
              <Link href={`/orders/${order?._id}`} passHref>
                <IoEye />
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AdminDashboardPageComponentDataOrdersTable;
