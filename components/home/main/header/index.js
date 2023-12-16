import Link from 'next/link';

import styles from '../styles.module.scss';

const HomeMainHeader = () => {
  return (
    <div className={styles.header}>
      <ul>
        <li>
          <Link href={'/'} passHref>
            <a>Store</a>
          </Link>
        </li>
        <li>
          <Link href={'/'} passHref>
            <a>Electronics</a>
          </Link>
        </li>
        <li>
          <Link href={'/'} passHref>
            <a>Watches</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default HomeMainHeader;
