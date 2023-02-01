import {
  IoHomeOutline,
  IoNotificationsOutline,
  IoPersonCircleOutline,
  IoSettingsOutline,
} from 'react-icons/io5';
import styles from '../../styles.module.scss';
import AdminDashboardPageComponentHeaderDropdownContentItem from './item';

const AdminDashboardPageComponentHeaderDropdownContentItems = () => {
  return (
    <div className={styles.dropdown__content_items}>
      <AdminDashboardPageComponentHeaderDropdownContentItem path={'/'}>
        <IoHomeOutline />
      </AdminDashboardPageComponentHeaderDropdownContentItem>
      <AdminDashboardPageComponentHeaderDropdownContentItem path={'/'}>
        <IoPersonCircleOutline />
      </AdminDashboardPageComponentHeaderDropdownContentItem>
      <AdminDashboardPageComponentHeaderDropdownContentItem path={'/'}>
        <IoNotificationsOutline />
      </AdminDashboardPageComponentHeaderDropdownContentItem>
      <AdminDashboardPageComponentHeaderDropdownContentItem path={'/'}>
        <IoSettingsOutline />
      </AdminDashboardPageComponentHeaderDropdownContentItem>
    </div>
  );
};

export default AdminDashboardPageComponentHeaderDropdownContentItems;
