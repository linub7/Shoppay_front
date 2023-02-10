import { ordersLinks } from 'constants';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles.module.scss';

const ProfileOrdersPageComponentNav = () => {
  const {
    query: { filter },
  } = useRouter();
  return (
    <nav>
      <ul>
        {ordersLinks?.map((orderLink, i) => (
          <li key={i}>
            <Link
              href={`/profile/orders?filter=${orderLink?.filter}&tab=1&q=${orderLink?.filter}`}
              passHref
            >
              <a className={filter === orderLink?.filter ? styles.active : ''}>
                {orderLink?.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ProfileOrdersPageComponentNav;
