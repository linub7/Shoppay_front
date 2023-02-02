import Link from 'next/link';
import styles from '../../styles.module.scss';

const AdminDashboardPageComponentDataHeading = ({ title, path, pathTitle }) => {
  return (
    <div className={styles.heading}>
      <h2>{title}</h2>
      <Link href={path} passHref>
        <a>{pathTitle}</a>
      </Link>
    </div>
  );
};

export default AdminDashboardPageComponentDataHeading;
