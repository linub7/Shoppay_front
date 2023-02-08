import { signoutHandler } from 'actions/auth';
import Cookies from 'js-cookie';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { IoAdd, IoRemove } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import slugify from 'slugify';
import { authenticate } from 'store/slices/authSlice';
import styles from './styles.module.scss';

const ProfilePageComponentSidebarListItem = ({ el, visible, index }) => {
  const [show, setShow] = useState(visible);
  const dispatch = useDispatch();
  const { query } = useRouter();
  const handleLogout = async () => {
    const { data, err } = await signoutHandler(token);
    if (err) {
      console.log(err);
      return;
    }
    Cookies.remove('userData');
    dispatch(authenticate({ token: null, userData: null }));
    window.location.href = '/auth/signin';
  };

  return (
    <li>
      {el?.heading === 'Sign out' ? (
        <b onClick={handleLogout}>Sign out</b>
      ) : (
        <b onClick={() => setShow((prev) => !prev)}>
          {el?.heading}{' '}
          {show ? (
            <IoRemove size={20} color="#000" />
          ) : (
            <IoAdd size={20} color="#000" />
          )}
        </b>
      )}
      {show && (
        <div className={styles.links}>
          {el?.links?.map((link, i) => (
            <div key={i} className={`${styles.links__item}`}>
              <Link
                href={`${link?.link}?tab=${index}&q=${slugify(link?.name, {
                  lower: true,
                })}`}
                passHref
              >
                <a
                  className={`${
                    query?.q === slugify(link?.name, { lower: true })
                      ? styles.active
                      : ''
                  }`}
                >
                  {link?.name}
                </a>
              </Link>
            </div>
          ))}
        </div>
      )}
    </li>
  );
};

export default ProfilePageComponentSidebarListItem;
