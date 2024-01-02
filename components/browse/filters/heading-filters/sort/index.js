import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { IoCheckboxOutline, IoChevronDownSharp } from 'react-icons/io5';

import styles from '../styles.module.scss';

const BrowsePageComponentHeadingFiltersSort = ({
  isShow,
  setIsShow = () => {},
  handleSearchSort = () => {},
}) => {
  const [sortBy, setSortBy] = useState('');
  const { query } = useRouter();

  useEffect(() => {
    setSortBy(
      query?.sort === 'popular'
        ? 'Most Popular'
        : query?.sort === 'newest'
        ? 'New Arrivals'
        : query?.sort === 'top-reviewed'
        ? 'Top Reviewed'
        : query?.sort === 'top-selling'
        ? 'Top Selling'
        : query?.sort === 'price-high-to-low'
        ? 'Price (high to low)'
        : query?.sort === 'price-low-to-high'
        ? 'Price (low to high)'
        : query?.sort === 'recommended'
        ? 'Recommended'
        : 'Recommended'
    );

    return () => {};
  }, [query?.sort]);

  return (
    <div className={styles.filters__sort}>
      <span>Sort By: </span>
      <div
        className={styles.filters__sort_list}
        onMouseOver={() => setIsShow(true)}
        onMouseLeave={() => setIsShow(false)}
      >
        <button>
          {sortBy}
          <div
            style={{
              transform: `${isShow ? 'rotate(180deg)' : 'rotate(0)'}`,
            }}
          >
            <IoChevronDownSharp />
          </div>
        </button>
        <ul
          className={styles.scrollbar}
          style={{
            transform: `${isShow ? 'scale3d(1,1,1)' : 'scale3d(1,0,1)'}`,
          }}
        >
          <li
            className={sortBy === 'Recommended' ? styles.activeListItem : ''}
            onClick={() => handleSearchSort('recommended')}
          >
            <a>
              Recommended {sortBy === 'Recommended' && <IoCheckboxOutline />}
            </a>
          </li>
          <li
            className={sortBy === 'Most Popular' ? styles.activeListItem : ''}
            onClick={() => handleSearchSort('popular')}
          >
            <a>
              Most Popular
              {sortBy === 'Most Popular' && <IoCheckboxOutline />}
            </a>
          </li>
          <li
            className={sortBy === 'New Arrivals' ? styles.activeListItem : ''}
            onClick={() => handleSearchSort('newest')}
          >
            <a>
              New Arrivals
              {sortBy === 'New Arrivals' && <IoCheckboxOutline />}
            </a>
          </li>
          <li
            className={sortBy === 'Top Reviewed' ? styles.activeListItem : ''}
            onClick={() => handleSearchSort('top-reviewed')}
          >
            <a>
              Top Reviewed
              {sortBy === 'Top Reviewed' && <IoCheckboxOutline />}
            </a>
          </li>
          <li
            className={sortBy === 'Top Selling' ? styles.activeListItem : ''}
            onClick={() => handleSearchSort('top-selling')}
          >
            <a>
              Top Selling
              {sortBy === 'Top Selling' && <IoCheckboxOutline />}
            </a>
          </li>
          <li
            className={
              sortBy === 'Price (low to high)' ? styles.activeListItem : ''
            }
            onClick={() => handleSearchSort('price-low-to-high')}
          >
            <a>
              Price (low to high)
              {sortBy === 'Price (low to high)' && <IoCheckboxOutline />}
            </a>
          </li>
          <li
            className={
              sortBy === 'Price (high to low)' ? styles.activeListItem : ''
            }
            onClick={() => handleSearchSort('price-high-to-low')}
          >
            <a>
              Price (high to low)
              {sortBy === 'Price (high to low)' && <IoCheckboxOutline />}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BrowsePageComponentHeadingFiltersSort;
