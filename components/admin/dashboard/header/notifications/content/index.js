/* eslint-disable @next/next/no-img-element */
import { notificationsData } from 'constants';
import styles from '../styles.module.scss';
import AdminDashboardPageComponentHeaderNotificationsContentFooter from './footer';

const AdminDashboardPageComponentHeaderNotificationsContent = ({ show }) => {
  return (
    <div
      className={`${styles.dropdown__content} ${show ? styles.active : ''} ${
        styles.scrollbar
      }`}
    >
      <div className={styles.dropdown__content_notifications}>
        {notificationsData?.map((notification, i) => (
          <div key={i}>
            {notification?.type === 'order' ? (
              <div
                className={styles.dropdown__content_notifications_notification}
              >
                <img src={notification?.image} alt="user" />
                <p>
                  <span>{notification?.user}</span> has created new order, total
                  of {notification?.total}$
                </p>
              </div>
            ) : (
              <div
                className={styles.dropdown__content_notifications_notification}
              >
                <img src={notification?.image} alt="user" />
                <span>{notification?.user}</span> new account created.
              </div>
            )}
          </div>
        ))}
      </div>
      <AdminDashboardPageComponentHeaderNotificationsContentFooter />
    </div>
  );
};

export default AdminDashboardPageComponentHeaderNotificationsContent;
