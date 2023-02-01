/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';

import AdminDashboardPageComponentHeaderDropdownContent from './content';
import styles from './styles.module.scss';

const AdminDashboardPageComponentHeaderDropdown = ({ userImage }) => {
  const [show, setShow] = useState(false);
  return (
    <div
      className={styles.dropdown}
      onMouseOver={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <div className={styles.dropdown__toggle}>
        <img src={userImage} alt="user image" />
      </div>
      <AdminDashboardPageComponentHeaderDropdownContent show={show} />
    </div>
  );
};

export default AdminDashboardPageComponentHeaderDropdown;
