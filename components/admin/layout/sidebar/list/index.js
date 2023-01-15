import {
  IoChatbubbleEllipses,
  IoGrid,
  IoList,
  IoPeople,
  IoStatsChart,
} from 'react-icons/io5';
import { adminExactPath } from 'utils/adminExactPath';
import AdminLayoutSidebarLinkItem from '../link-item';
import styles from '../styles.module.scss';

const AdminLayoutSidebarList = ({ pathname }) => {
  return (
    <ul className={styles.sidebar__list}>
      <AdminLayoutSidebarLinkItem
        active={adminExactPath(pathname) === 'dashboard' ? true : false}
        path={'/admin/dashboard'}
      >
        <IoGrid />
        <span className={styles.show}>Dashboard</span>
      </AdminLayoutSidebarLinkItem>
      <AdminLayoutSidebarLinkItem
        active={adminExactPath(pathname) === 'sales' ? true : false}
        path={'/admin/sales'}
      >
        <IoStatsChart />
        <span className={styles.show}>Sales</span>
      </AdminLayoutSidebarLinkItem>
      <AdminLayoutSidebarLinkItem
        active={adminExactPath(pathname) === 'orders' ? true : false}
        path={'/admin/orders'}
      >
        <IoList />
        <span className={styles.show}>Orders</span>
      </AdminLayoutSidebarLinkItem>
      <AdminLayoutSidebarLinkItem
        active={adminExactPath(pathname) === 'users' ? true : false}
        path={'/admin/users'}
      >
        <IoPeople />
        <span className={styles.show}>Users</span>
      </AdminLayoutSidebarLinkItem>
      <AdminLayoutSidebarLinkItem
        active={adminExactPath(pathname) === 'messages' ? true : false}
        path={'/admin/messages'}
      >
        <IoChatbubbleEllipses />
        <span className={styles.show}>Messages</span>
      </AdminLayoutSidebarLinkItem>
    </ul>
  );
};

export default AdminLayoutSidebarList;
