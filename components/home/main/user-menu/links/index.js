import Link from 'next/link';
import {
  IoClipboardOutline,
  IoHeartOutline,
  IoSettingsOutline,
} from 'react-icons/io5';

import styles from '../../styles.module.scss';

const UserMenuLinks = () => {
  return (
    <ul className={styles.user__links}>
      <li>
        <Link href={'/'} passHref>
          <a>
            <IoSettingsOutline />
          </a>
        </Link>
      </li>
      <li>
        <Link href={'/'} passHref>
          <a>
            <IoClipboardOutline />
          </a>
        </Link>
      </li>

      <li>
        <Link href={'/'} passHref>
          <a>
            <IoHeartOutline />
          </a>
        </Link>
      </li>
    </ul>
  );
};

export default UserMenuLinks;
