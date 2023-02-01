import AdminDashboardPageComponentHeaderDropdown from './dropdown';
import styles from '../styles.module.scss';

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
      </div>
    </div>
  );
};

export default AdminDashboardPageComponentHeader;
