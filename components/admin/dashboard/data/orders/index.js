import Link from 'next/link';
import styles from '../../styles.module.scss';
import AdminDashboardPageComponentDataHeading from '../heading';
import AdminDashboardPageComponentDataOrdersTable from './table';

const AdminDashboardPageComponentDataOrders = ({ orders }) => {
  return (
    <div className={styles.orders}>
      <AdminDashboardPageComponentDataHeading
        path={'/admin/orders'}
        title={'Recent 5 Orders'}
        pathTitle={'View All'}
      />
      <AdminDashboardPageComponentDataOrdersTable orders={orders} />
    </div>
  );
};

export default AdminDashboardPageComponentDataOrders;
