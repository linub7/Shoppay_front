import { useSelector } from 'react-redux';
import AdminLayout from '../layout';
import AdminDashboardPageComponentHeader from './header';

import styles from './styles.module.scss';

const AdminDashboardPageComponent = ({ users, orders, products }) => {
  const { userData } = useSelector((state) => state.auth);
  return (
    <AdminLayout>
      <AdminDashboardPageComponentHeader userData={userData} />
    </AdminLayout>
  );
};

export default AdminDashboardPageComponent;
