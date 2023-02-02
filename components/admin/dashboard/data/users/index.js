import styles from '../../styles.module.scss';
import AdminDashboardPageComponentDataHeading from '../heading';
import AdminDashboardPageComponentDataUsersTable from './table';

const AdminDashboardPageComponentDataUsers = ({ users }) => {
  return (
    <div className={styles.users}>
      <AdminDashboardPageComponentDataHeading
        title={'Recent Users'}
        path={'/admin/users'}
        pathTitle={'View All'}
      />
      <AdminDashboardPageComponentDataUsersTable users={users} />
    </div>
  );
};

export default AdminDashboardPageComponentDataUsers;
