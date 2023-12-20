import Link from 'next/link';
import { IoCheckboxOutline, IoChevronDownSharp } from 'react-icons/io5';

import styles from '../styles.module.scss';

const BrowsePageComponentHeadingFiltersSort = ({
  isShow,
  setIsShow = () => {},
}) => {
  return (
    <div className={styles.filters__sort}>
      <span>Sort By: </span>
      <div
        className={styles.filters__sort_list}
        onMouseOver={() => setIsShow(true)}
        onMouseLeave={() => setIsShow(false)}
      >
        <button>
          Recommend
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
          <li>
            <Link href={''} passHref>
              <a>
                <b>
                  Recommend <IoCheckboxOutline />
                </b>
              </a>
            </Link>
          </li>
          <li>
            <Link href={''} passHref>
              <a>Most Popular</a>
            </Link>
          </li>
          <li>
            <Link href={''} passHref>
              <a>New Arrivals</a>
            </Link>
          </li>
          <li>
            <Link href={''} passHref>
              <a>Top Reviewed</a>
            </Link>
          </li>
          <li>
            <Link href={''} passHref>
              <a>Price (low to high)</a>
            </Link>
          </li>
          <li>
            <Link href={''} passHref>
              <a>Price (high to low)</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BrowsePageComponentHeadingFiltersSort;
