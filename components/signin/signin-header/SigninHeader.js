import Link from 'next/link';
import { IoArrowBackOutline } from 'react-icons/io5';
import styles from '../styles.module.scss';

const SigninHeader = ({ children }) => {
  return (
    <div className={styles.login__header}>
      <div className={styles.back__svg}>
        <IoArrowBackOutline />
      </div>
      <span>{children}</span>
    </div>
  );
};

export default SigninHeader;
