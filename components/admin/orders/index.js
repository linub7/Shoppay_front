import AdminLayout from '../layout';
import styles from './styles.module.scss';
import AdminOrdersPageComponentCollapsibleTable from './table';

const AdminOrdersPageComponent = ({ orders }) => {
  console.log(orders);
  return (
    <AdminLayout>
      <AdminOrdersPageComponentCollapsibleTable rows={orders} />
    </AdminLayout>
  );
};

export default AdminOrdersPageComponent;
