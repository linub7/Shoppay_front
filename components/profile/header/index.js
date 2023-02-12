import styles from './styles.module.scss';

const ProfilePageComponentHeader = ({ header }) => {
  return (
    <div className={styles.header}>
      <h1>{header}</h1>
    </div>
  );
};

export default ProfilePageComponentHeader;
