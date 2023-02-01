import styles from '../../styles.module.scss';

const AdminDashboardPageComponentHeaderDropdownContentLogout = ({
  handleLogout,
}) => {
  return (
    <div className={styles.dropdown__logout}>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default AdminDashboardPageComponentHeaderDropdownContentLogout;
