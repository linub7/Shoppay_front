/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import {
  IoAddCircle,
  IoChatbubbleEllipses,
  IoGift,
  IoGrid,
  IoList,
  IoListCircle,
  IoPeople,
  IoShapes,
  IoShapesOutline,
  IoStatsChart,
} from 'react-icons/io5';
import AdminDashboardPageComponentHeaderDropdownContent from './content';
import AdminDashboardPageComponentHeaderDropdownLinkItem from './content/icons/link-item';
import styles from './styles.module.scss';

const AdminDashboardPageComponentHeaderDropdown = ({ userImage }) => {
  const [show, setShow] = useState(true);
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
