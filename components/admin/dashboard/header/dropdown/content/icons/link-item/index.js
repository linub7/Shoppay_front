import Link from 'next/link';
import styles from '../../../styles.module.scss';

const AdminDashboardPageComponentHeaderDropdownLinkItem = ({
  children,
  path,
}) => {
  return (
    <div className={styles.dropdown__content_icons_icon}>
      <Link href={path} passHref>
        <a>{children}</a>
      </Link>
    </div>
  );
};

export default AdminDashboardPageComponentHeaderDropdownLinkItem;
