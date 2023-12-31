import { useState } from 'react';

import styles from './styles.module.scss';
import BrowsePageComponentHeadingFiltersPrice from './price';
import BrowsePageComponentHeadingFiltersShipping from './shipping';
import BrowsePageComponentHeadingFiltersRating from './rating';
import BrowsePageComponentHeadingFiltersSort from './sort';

const BrowsePageComponentHeadingFilters = ({
  replaceQuery = () => {},
  handleSearchPrice = () => {},
  handleSearchFreeShipping = () => {},
  handleSearchRating = () => {},
  handleSearchSort = () => {},
}) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className={styles.filters}>
      <BrowsePageComponentHeadingFiltersPrice
        handleSearchPrice={handleSearchPrice}
      />
      {/* <BrowsePageComponentHeadingFiltersShipping
        handleSearchFreeShipping={handleSearchFreeShipping}
        replaceQuery={replaceQuery}
      /> */}
      <BrowsePageComponentHeadingFiltersRating
        handleSearchRating={handleSearchRating}
        replaceQuery={replaceQuery}
      />
      <BrowsePageComponentHeadingFiltersSort
        isShow={isShow}
        setIsShow={setIsShow}
        handleSearchSort={handleSearchSort}
      />
    </div>
  );
};

export default BrowsePageComponentHeadingFilters;
