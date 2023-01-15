import Link from 'next/link';
import styles from '../styles.module.scss';

const AdminLayoutSidebarNavItem = ({ path, children }) => {
  return (
    <li>
      <Link href={path} passHref>
        <a>{children}</a>
      </Link>
    </li>
  );
};

export default AdminLayoutSidebarNavItem;
