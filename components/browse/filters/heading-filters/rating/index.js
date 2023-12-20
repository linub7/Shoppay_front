import { IoStar } from 'react-icons/io5';

import styles from '../styles.module.scss';

const BrowsePageComponentHeadingFiltersRating = () => {
  return (
    <div className={styles.filters__rating}>
      <input type="checkbox" name="rating" id="rating" />
      <label htmlFor="rating">
        <IoStar color="#fe4d4d" />
        <IoStar color="#fe4d4d" />
        <IoStar color="#fe4d4d" />
        <IoStar color="#fe4d4d" /> & up
      </label>
    </div>
  );
};

export default BrowsePageComponentHeadingFiltersRating;
