import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from 'store/slices/expandSlice';
import AdminLayoutSidebarCategoryDropdown from './dropdown/category';
import AdminLayoutSidebarCouponDropdown from './dropdown/coupon';
import AdminLayoutSidebarProductDropdown from './dropdown/product';
import AdminLayoutSidebarHeader from './header';
import AdminLayoutSidebarList from './list';
import AdminLayoutSidebarNav from './nav';
import styles from './styles.module.scss';
import AdminLayoutSidebarToggle from './toggle';
import AdminLayoutSidebarUser from './user';

const AdminLayoutSidebar = () => {
  const dispatch = useDispatch();
  const { expandSidebar } = useSelector((state) => state.expand);
  const { userData } = useSelector((state) => state.auth);

  const { pathname } = useRouter();

  const handleExpand = () => dispatch(toggleSidebar());
  return (
    <div className={`${styles.sidebar} ${expandSidebar ? styles.opened : ''}`}>
      <AdminLayoutSidebarToggle
        expandSidebar={expandSidebar}
        handleExpand={handleExpand}
      />
      <div className={styles.sidebar__container}>
        <AdminLayoutSidebarHeader />
        <AdminLayoutSidebarUser userData={userData} />
        <AdminLayoutSidebarList pathname={pathname} />
        <AdminLayoutSidebarProductDropdown pathname={pathname} />
        <AdminLayoutSidebarCategoryDropdown pathname={pathname} />
        <AdminLayoutSidebarCouponDropdown pathname={pathname} />
        <AdminLayoutSidebarNav expandSidebar={expandSidebar} />
      </div>
    </div>
  );
};

export default AdminLayoutSidebar;
