import styles from '../../styles.module.scss';

const AdminDashboardPageComponentHeaderDropdownContentLogout = ({
  handleLogout,
}) => {
  return (
    <div className={styles.dropdown__content_logout}>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default AdminDashboardPageComponentHeaderDropdownContentLogout;
