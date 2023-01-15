/* eslint-disable @next/next/no-img-element */
import styles from '../styles.module.scss';

const AdminLayoutSidebarUser = ({ userData }) => {
  return (
    <div className={styles.sidebar__user}>
      {userData?.photo?.url ? (
        <img src={userData?.photo?.url} alt={userData?.name} />
      ) : (
        <img src="/images/temp-user.png" alt={userData?.name} />
      )}
      <div className={styles.show}>
        <span>Welcome back 👋</span>
        <span>{userData?.name}</span>
      </div>
    </div>
  );
};

export default AdminLayoutSidebarUser;
