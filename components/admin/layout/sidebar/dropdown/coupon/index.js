import { IoGift } from 'react-icons/io5';
import { adminExactPath } from 'utils/adminExactPath';
import AdminLayoutSidebarLinkItem from '../../link-item';
import styles from '../../styles.module.scss';

const AdminLayoutSidebarCouponDropdown = ({ pathname }) => {
  return (
    <div className={styles.sidebar__dropdown}>
      <div className={styles.sidebar__dropdown_heading}>
        <div className={styles.show}>Coupons</div>
        <ul className={styles.sidebar__list}>
          <AdminLayoutSidebarLinkItem
            active={adminExactPath(pathname) === 'coupons' ? true : false}
            path={'/admin/coupons'}
          >
            <IoGift />
            <span className={styles.show}>Coupons</span>
          </AdminLayoutSidebarLinkItem>
          {/* <AdminLayoutSidebarLinkItem
            active={adminExactPath(pathname) === 'create-coupon' ? true : false}
            path={'/admin/create-coupon'}
          >
            <IoColorWand />
            <span className={styles.show}>Create coupon</span>
          </AdminLayoutSidebarLinkItem> */}
        </ul>
      </div>
    </div>
  );
};

export default AdminLayoutSidebarCouponDropdown;
