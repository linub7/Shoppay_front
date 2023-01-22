import DialogModal from 'components/shared/modals/dialog';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideDialog } from 'store/slices/dialogSlice';
import AdminLayoutSidebar from './sidebar';
import styles from './styles.module.scss';

const AdminLayout = ({ children }) => {
  const { expandSidebar } = useSelector((state) => state.expand);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(hideDialog());
  }, []);

  return (
    <div className={styles.layout}>
      <DialogModal />
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
