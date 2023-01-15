import { IoAddCircle, IoListCircle } from 'react-icons/io5';
import { adminExactPath } from 'utils/adminExactPath';
import AdminLayoutSidebarLinkItem from '../../link-item';
import styles from '../../styles.module.scss';

const AdminLayoutSidebarProductDropdown = ({ pathname }) => {
  return (
    <div className={styles.sidebar__dropdown}>
      <div className={styles.sidebar__dropdown_heading}>
        <div className={styles.show}>Product</div>
        <ul className={styles.sidebar__list}>
          <AdminLayoutSidebarLinkItem
            active={adminExactPath(pathname) === 'products' ? true : false}
            path={'/admin/products'}
          >
            <IoListCircle />
            <span className={styles.show}>All Products</span>
          </AdminLayoutSidebarLinkItem>
          <AdminLayoutSidebarLinkItem
            active={
              adminExactPath(pathname) === 'create-product' ? true : false
            }
            path={'/admin/create-product'}
          >
            <IoAddCircle />
            <span className={styles.show}>Create Product</span>
          </AdminLayoutSidebarLinkItem>
        </ul>
      </div>
    </div>
  );
};

export default AdminLayoutSidebarProductDropdown;
