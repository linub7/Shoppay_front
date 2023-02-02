import { useSelector } from 'react-redux';
import AdminLayout from '../layout';
import AdminDashboardPageComponentCards from './cards';
import AdminDashboardPageComponentData from './data';
import AdminDashboardPageComponentHeader from './header';

import styles from './styles.module.scss';

const AdminDashboardPageComponent = ({ users, orders, products }) => {
  const { userData } = useSelector((state) => state.auth);
  return (
    <AdminLayout>
      <AdminDashboardPageComponentHeader userData={userData} />
      <AdminDashboardPageComponentCards
        users={users}
        orders={orders}
        products={products}
      />
      <AdminDashboardPageComponentData orders={orders} users={users} />
    </AdminLayout>
  );
};

export default AdminDashboardPageComponent;
