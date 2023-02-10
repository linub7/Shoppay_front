import Link from 'next/link';
import {
  IoCheckmarkCircleOutline,
  IoCloseCircleOutline,
  IoEye,
} from 'react-icons/io5';
import styles from '../styles.module.scss';

const ProfileOrdersPageComponentTable = ({ orders }) => {
  return (
    <table>
      <thead>
        <tr>
          <td>Order Id</td>
          <td>Products</td>
          <td>Payment Method</td>
          <td>Total</td>
          <td>Paid</td>
          <td>Status</td>
          <td>View</td>
        </tr>
      </thead>
      <tbody>
        {orders?.map((order, j) => (
          <tr key={j}>
            <td>{order?._id}</td>
            <td className={styles.orders__names}>
              {order?.products?.map((prod, k) => (
                <span key={k}>{prod?.name}</span>
              ))}
            </td>
            <td>{order?.paymentMethod}</td>
            <td>{order?.total}$</td>
            <td>
              {order?.isPaid ? (
                <IoCheckmarkCircleOutline size={25} color="#6cc070" />
              ) : (
                <IoCloseCircleOutline size={25} color="#e74d3c" />
              )}
            </td>
            <td>{order?.status}</td>
            <td>
              <Link href={`/orders/${order?._id}`} passHref>
                <IoEye size={30} color="#222" style={{ cursor: 'pointer' }} />
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProfileOrdersPageComponentTable;
