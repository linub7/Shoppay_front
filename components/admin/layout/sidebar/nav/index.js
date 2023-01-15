import {
  IoChatboxEllipses,
  IoCog,
  IoLogOut,
  IoNotifications,
} from 'react-icons/io5';
import AdminLayoutSidebarNavItem from '../nav-item';
import styles from '../styles.module.scss';

const AdminLayoutSidebarNav = ({ expandSidebar }) => {
  return (
    <nav>
      <ul
        className={`${styles.sidebar__list} ${
          expandSidebar ? styles.nav__flex : ''
        }`}
      >
        <AdminLayoutSidebarNavItem path={'/'}>
          <IoCog />
        </AdminLayoutSidebarNavItem>
        <AdminLayoutSidebarNavItem path={'/'}>
          <IoNotifications />
        </AdminLayoutSidebarNavItem>
        <AdminLayoutSidebarNavItem path={'/'}>
          <IoChatboxEllipses />
        </AdminLayoutSidebarNavItem>
        <AdminLayoutSidebarNavItem path={'/'}>
          <IoLogOut />
        </AdminLayoutSidebarNavItem>
      </ul>
    </nav>
  );
};

export default AdminLayoutSidebarNav;
