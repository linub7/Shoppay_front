import Link from 'next/link';
import { IoArrowBackOutline } from 'react-icons/io5';
import styles from '../styles.module.scss';

const SignupHeader = () => {
  return (
    <div className={styles.login__header}>
      <div className={styles.back__svg}>
        <IoArrowBackOutline />
      </div>
      <span>
        {`We'd be happy to join us!`} <Link href={'/'}>Go Store</Link>
      </span>
    </div>
  );
};

export default SignupHeader;
