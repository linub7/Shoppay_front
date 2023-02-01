import { signoutHandler } from 'actions/auth';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../styles.module.scss';
import AdminDashboardPageComponentHeaderDropdownContentIcons from './icons';
import AdminDashboardPageComponentHeaderDropdownContentItems from './items';
import AdminDashboardPageComponentHeaderDropdownContentLogout from './logout';
import Cookie from 'js-cookie';
import { authenticate } from 'store/slices/authSlice';

const AdminDashboardPageComponentHeaderDropdownContent = ({ show }) => {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const handleLogout = async () => {
    const { data, err } = await signoutHandler(token);
    if (err) {
      console.log(err);
      return;
    }
    Cookie.remove('userData');
    dispatch(authenticate({ token: null, userData: null }));
    window.location.href = '/auth/signin';
  };
  return (
    <div className={`${styles.dropdown__content} ${show ? styles.active : ''}`}>
      <AdminDashboardPageComponentHeaderDropdownContentIcons />
      <AdminDashboardPageComponentHeaderDropdownContentItems />
      <AdminDashboardPageComponentHeaderDropdownContentLogout
        handleLogout={handleLogout}
      />
    </div>
  );
};

export default AdminDashboardPageComponentHeaderDropdownContent;
