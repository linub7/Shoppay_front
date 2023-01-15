import { useSelector } from 'react-redux';
import AdminLayoutSidebar from './sidebar';
import styles from './styles.module.scss';

const AdminLayout = ({ children }) => {
  const { expandSidebar } = useSelector((state) => state.expand);

  return (
    <div className={styles.layout}>
      <AdminLayoutSidebar />
      <div
        style={{ marginLeft: `${expandSidebar ? '280px' : '80px'}` }}
        className={styles.layout__main}
      >
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
