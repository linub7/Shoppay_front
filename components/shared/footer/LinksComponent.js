/* eslint-disable @next/next/no-img-element */
import { footerLinks } from 'constants';
import Link from 'next/link';
import styles from './styles.module.scss';

const LinksComponent = () => {
  return (
    <div className={styles.footer__links}>
      {footerLinks?.map((link, index) => (
        <ul key={index}>
          {index === 0 ? (
            <img
              src={'https://imgurl.ir/uploads/a1771_shop-logo.png'}
              alt="logo"
            />
          ) : (
            // <img src="/images/shop-logo.png" alt="logo" />
            <b>{link?.heading}</b>
          )}
          {link?.links?.map((singleLink, i) => (
            <li key={i}>
              <Link href={singleLink.path}>{singleLink?.name}</Link>
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};

export default LinksComponent;
