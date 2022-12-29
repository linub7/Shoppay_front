import { IoArrowForwardOutline } from 'react-icons/io5';
import styles from './styles.module.scss';

const AuthButton = ({ btnTitle, type, icon }) => {
  return (
    <button type={type} className={styles.button}>
      {btnTitle}
      <div className={styles.svg__wrap}>
        <IoArrowForwardOutline />
      </div>
    </button>
  );
};

export default AuthButton;
