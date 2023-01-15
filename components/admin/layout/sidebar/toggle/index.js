import { IoChevronForwardOutline } from 'react-icons/io5';
import styles from '../styles.module.scss';

const AdminLayoutSidebarToggle = ({ handleExpand, expandSidebar }) => {
  return (
    <div className={styles.sidebar__toggle} onClick={handleExpand}>
      <div
        style={{
          transform: `${expandSidebar ? 'rotate(180deg)' : ''}`,
          transition: 'all .2s ease-out',
        }}
      >
        <IoChevronForwardOutline />
      </div>
    </div>
  );
};

export default AdminLayoutSidebarToggle;
