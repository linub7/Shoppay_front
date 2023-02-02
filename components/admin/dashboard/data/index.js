import Link from 'next/link';
import styles from '../styles.module.scss';
import AdminDashboardPageComponentDataOrders from './orders';
import AdminDashboardPageComponentDataUsers from './users';

const AdminDashboardPageComponentData = ({ orders, users }) => {
  return (
    <div className={styles.data}>
      <AdminDashboardPageComponentDataOrders orders={orders} />
      <AdminDashboardPageComponentDataUsers users={users} />
    </div>
  );
};

export default AdminDashboardPageComponentData;
