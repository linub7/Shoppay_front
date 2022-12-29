import { footerCopyrightData } from 'constants';
import Link from 'next/link';
import { IoLocationOutline } from 'react-icons/io5';
import styles from './styles.module.scss';

const Copyright = () => {
  return (
    <div className={styles.footer__copyright}>
      <section>
        &copy; {new Date().getFullYear()} ShopPay. All rights reserved.
      </section>
      <section>
        <ul>
          {footerCopyrightData.map((data, index) => (
            <li key={index}>
              <Link href={data?.path}>{data?.name}</Link>
            </li>
          ))}
          <li>
            <a className={styles.footer__flex_align}>
              <IoLocationOutline size={20} />
              <span>United States</span>
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Copyright;
