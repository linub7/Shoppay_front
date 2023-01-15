import {
  IoAddCircle,
  IoAddCircleOutline,
  IoShapes,
  IoShapesOutline,
} from 'react-icons/io5';
import { adminExactPath } from 'utils/adminExactPath';
import AdminLayoutSidebarLinkItem from '../../link-item';
import styles from '../../styles.module.scss';

const AdminLayoutSidebarCategoryDropdown = ({ pathname }) => {
  return (
    <div className={styles.sidebar__dropdown}>
      <div className={styles.sidebar__dropdown_heading}>
        <div className={styles.show}>Categories / Subs</div>
        <ul className={styles.sidebar__list}>
          <AdminLayoutSidebarLinkItem
            active={adminExactPath(pathname) === 'categories' ? true : false}
            path={'/admin/categories'}
          >
            <IoShapes />
            <span className={styles.show}>Categories</span>
          </AdminLayoutSidebarLinkItem>
          <AdminLayoutSidebarLinkItem
            active={
              adminExactPath(pathname) === 'sub-categories' ? true : false
            }
            path={'/admin/sub-categories'}
          >
            <IoShapesOutline />
            <span className={styles.show}>All Sub Categories</span>
          </AdminLayoutSidebarLinkItem>
          {/* <AdminLayoutSidebarLinkItem
            active={
              adminExactPath(pathname) === 'create-category' ? true : false
            }
            path={'/admin/create-category'}
          >
            <IoAddCircle />
            <span className={styles.show}>Create Category</span>
          </AdminLayoutSidebarLinkItem> */}
          {/* <AdminLayoutSidebarLinkItem
            active={
              adminExactPath(pathname) === 'create-sub-category' ? true : false
            }
            path={'/admin/create-sub-category'}
          >
            <IoAddCircleOutline />
            <span className={styles.show}>Create Sub Category</span>
          </AdminLayoutSidebarLinkItem> */}
        </ul>
      </div>
    </div>
  );
};

export default AdminLayoutSidebarCategoryDropdown;
