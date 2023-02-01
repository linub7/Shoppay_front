import {
  IoAddCircle,
  IoChatbubbleEllipses,
  IoGift,
  IoGrid,
  IoList,
  IoListCircle,
  IoPeople,
  IoShapes,
  IoShapesOutline,
  IoStatsChart,
} from 'react-icons/io5';
import AdminDashboardPageComponentHeaderDropdownLinkItem from './link-item';
import styles from '../../styles.module.scss';

const AdminDashboardPageComponentHeaderDropdownContentIcons = () => {
  return (
    <div className={styles.dropdown__content_icons}>
      <AdminDashboardPageComponentHeaderDropdownLinkItem
        path={'/admin/dashboard'}
      >
        <IoGrid />
      </AdminDashboardPageComponentHeaderDropdownLinkItem>
      <AdminDashboardPageComponentHeaderDropdownLinkItem path={'/admin/sales'}>
        <IoStatsChart />
      </AdminDashboardPageComponentHeaderDropdownLinkItem>
      <AdminDashboardPageComponentHeaderDropdownLinkItem path={'/admin/orders'}>
        <IoList />
      </AdminDashboardPageComponentHeaderDropdownLinkItem>
      <AdminDashboardPageComponentHeaderDropdownLinkItem path={'/admin/users'}>
        <IoPeople />
      </AdminDashboardPageComponentHeaderDropdownLinkItem>
      <AdminDashboardPageComponentHeaderDropdownLinkItem
        path={'/admin/messages'}
      >
        <IoChatbubbleEllipses />
      </AdminDashboardPageComponentHeaderDropdownLinkItem>
      <AdminDashboardPageComponentHeaderDropdownLinkItem
        path={'/admin/products'}
      >
        <IoListCircle />
      </AdminDashboardPageComponentHeaderDropdownLinkItem>
      <AdminDashboardPageComponentHeaderDropdownLinkItem
        path={'/admin/create-product'}
      >
        <IoAddCircle />
      </AdminDashboardPageComponentHeaderDropdownLinkItem>
      <AdminDashboardPageComponentHeaderDropdownLinkItem
        path={'/admin/categories'}
      >
        <IoShapes />
      </AdminDashboardPageComponentHeaderDropdownLinkItem>
      <AdminDashboardPageComponentHeaderDropdownLinkItem
        path={'/admin/sub-categories'}
      >
        <IoShapesOutline />
      </AdminDashboardPageComponentHeaderDropdownLinkItem>
      <AdminDashboardPageComponentHeaderDropdownLinkItem
        path={'/admin/coupons'}
      >
        <IoGift />
      </AdminDashboardPageComponentHeaderDropdownLinkItem>
    </div>
  );
};

export default AdminDashboardPageComponentHeaderDropdownContentIcons;
