import HeaderComponent from 'components/shared/header';
import ProfilePageComponentSidebar from '../sidebar';
import styles from './styles.module.scss';

const ProfilePageComponentLayout = ({ children, me, tab }) => {
  return (
    <div className={styles.layout}>
      <HeaderComponent />
      <div className={styles.layout__container}>
        <ProfilePageComponentSidebar
          image={me?.photo?.url}
          name={me?.name}
          tab={tab}
        />
        <div className={styles.layout__content}>{children}</div>
      </div>
    </div>
  );
};

export default ProfilePageComponentLayout;
