import Link from 'next/link';
import styles from '../../../styles.module.scss';

const AdminDashboardPageComponentHeaderDropdownContentItem = ({
  children,
  path,
}) => {
  return (
    <div className={styles.dropdown__content_items_item}>
      <Link href={path} passHref>
        <a>{children}</a>
      </Link>
    </div>
  );
};

export default AdminDashboardPageComponentHeaderDropdownContentItem;
