import Link from 'next/link';
import styles from '../styles.module.scss';

const AdminLayoutSidebarLinkItem = ({ children, active = false, path }) => {
  return (
    <li className={active ? styles.active : ''}>
      <Link href={path} passHref>
        <a>{children}</a>
      </Link>
    </li>
  );
};

export default AdminLayoutSidebarLinkItem;
