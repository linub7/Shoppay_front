import styles from './styles.module.scss';

const ProfilePageComponentButton = ({ onClick, btnTitle, disabled }) => {
  return (
    <button
      className={`${styles.button} ${disabled ? styles.disabled : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {btnTitle}
    </button>
  );
};

export default ProfilePageComponentButton;
