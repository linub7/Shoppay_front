import AdminDashboardPageComponentHeaderDropdown from './dropdown';
import styles from '../styles.module.scss';
import AdminDashboardPageComponentHeaderNotifications from './notifications';

const AdminDashboardPageComponentHeader = ({ userData }) => {
  return (
    <div className={styles.header}>
      <div className={styles.header__search}>
        <label htmlFor="">
          <input type="text" placeholder="Search here..." />
        </label>
      </div>
      <div></div>
      <div className={styles.header__right}>
        <AdminDashboardPageComponentHeaderDropdown
          userImage={
            userData?.photo?.url
              ? userData?.photo?.url
              : '/images/temp-user.png'
          }
        />
        <AdminDashboardPageComponentHeaderNotifications />
      </div>
    </div>
  );
};

export default AdminDashboardPageComponentHeader;
