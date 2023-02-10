import ProfilePageComponentLayout from '../layout';
import ProfileOrdersPageComponentNav from './nav';
import styles from './styles.module.scss';
import ProfileOrdersPageComponentTable from './table';

const ProfileOrdersPageComponent = ({ orders, me, tab }) => {
  return (
    <ProfilePageComponentLayout me={me} tab={tab}>
      <div className={styles.header}>
        <h1>My Orders: </h1>
      </div>
      <div className={styles.orders}>
        <ProfileOrdersPageComponentNav />
        <ProfileOrdersPageComponentTable orders={orders} />
      </div>
    </ProfilePageComponentLayout>
  );
};

export default ProfileOrdersPageComponent;
