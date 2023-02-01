import Link from 'next/link';
import styles from '../../styles.module.scss';

const AdminDashboardPageComponentHeaderNotificationsContentFooter = () => {
  return (
    <div className={styles.dropdown__content_footer}>
      <Link href={'/admin/notifications'} passHref>
        <a>See All Notifications</a>
      </Link>
    </div>
  );
};

export default AdminDashboardPageComponentHeaderNotificationsContentFooter;
