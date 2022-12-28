import Link from 'next/link';
import styles from './styles.module.scss';

const Newsletter = () => {
  return (
    <div className={styles.footer__newsletter}>
      <h3>Sign up for our Newsletter</h3>
      <div className={styles.footer__flex}>
        <input type="text" placeholder="Your Email Address" />
        <button className={styles.btn_primary}>Subscribe</button>
      </div>
      <p>
        By clicking the Subscribe button, you are agreeing to{' '}
        <Link href={''}>our Privacy & Cookie Policy</Link>
      </p>
    </div>
  );
};

export default Newsletter;
