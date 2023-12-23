/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { IoCartOutline, IoSearchOutline } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import styles from './styles.module.scss';

const MainSection = ({ handleSearch = () => {} }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const router = useRouter();
  const { cart } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    setSearchTerm(router?.query?.search || '');

    return () => {
      setSearchTerm('');
    };
  }, [router?.query?.search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm?.length > 1) {
      if (router?.pathname !== '/browse') {
        router.push(`/browse?search=${searchTerm}`);
      } else {
        handleSearch(searchTerm);
      }
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.main__container}>
        <Link href={'/'} passHref>
          <a className={styles.logo}>
            <img
              src={'https://imgurl.ir/uploads/a1771_shop-logo.png'}
              alt="logo"
            />
          </a>
        </Link>
        <form onSubmit={handleSubmit} className={styles.search}>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className={styles.search__icon}>
            <IoSearchOutline />
          </button>
        </form>
        <Link href={'/href'} passHref>
          <a className={styles.cart}>
            <IoCartOutline />
            {cart?.cartItems?.length > 0 && (
              <span>{cart?.cartItems?.length}</span>
            )}
          </a>
        </Link>
      </div>
    </div>
  );
};

export default MainSection;
