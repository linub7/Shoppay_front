import ProfilePageComponentHeader from '../header';
import ProfilePageComponentLayout from '../layout';
import ProfileOrdersPageComponentNav from './nav';
import styles from './styles.module.scss';
import ProfileOrdersPageComponentTable from './table';

const ProfileOrdersPageComponent = ({ orders, me, tab }) => {
  return (
    <ProfilePageComponentLayout me={me} tab={tab}>
      <ProfilePageComponentHeader header={'My Orders: '} />
      <div className={styles.orders}>
        <ProfileOrdersPageComponentNav />
        <ProfileOrdersPageComponentTable orders={orders} />
      </div>
    </ProfilePageComponentLayout>
  );
};

export default ProfileOrdersPageComponent;
