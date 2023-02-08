/* eslint-disable @next/next/no-img-element */
import { profileSidebarData } from 'constants';
import ProfilePageComponentSidebarListItem from './list-item';
import styles from './styles.module.scss';

const ProfilePageComponentSidebar = ({ image, name, tab }) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__container}>
        <img src={image ? image : '/images/temp-user.png'} alt="user" />
        <span className={styles.sidebar__name}>{name}</span>
        <ul>
          {profileSidebarData?.map((el, i) => (
            <ProfilePageComponentSidebarListItem
              key={i}
              el={el}
              visible={tab.toString() === i.toString()}
              index={i.toString()}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfilePageComponentSidebar;
