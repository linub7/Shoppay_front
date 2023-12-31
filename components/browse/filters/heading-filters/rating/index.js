import { useRouter } from 'next/router';
import { IoStar } from 'react-icons/io5';

import styles from '../styles.module.scss';

const BrowsePageComponentHeadingFiltersRating = ({
  replaceQuery = () => {},
  handleSearchRating = () => {},
}) => {
  const router = useRouter();
  const result = replaceQuery('rating', '4');
  return (
    <div
      className={styles.filters__rating}
      onClick={() => handleSearchRating(result?.result)}
    >
      <input
        type="checkbox"
        name="rating"
        id="rating"
        checked={router?.query?.rating === '4'}
      />
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
