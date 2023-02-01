import { notificationsData } from 'constants';
import Link from 'next/link';
import { useState } from 'react';
import { IoNotifications, IoNotificationsOutline } from 'react-icons/io5';
import styles from './styles.module.scss';
import AdminDashboardPageComponentHeaderNotificationsContent from './content';

const AdminDashboardPageComponentHeaderNotifications = () => {
  const [show, setShow] = useState(false);

  return (
    <div
      className={styles.dropdown}
      onMouseOver={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <div className={styles.dropdown__svg}>
        <IoNotifications />
      </div>
      <AdminDashboardPageComponentHeaderNotificationsContent show={show} />
    </div>
  );
};

export default AdminDashboardPageComponentHeaderNotifications;
