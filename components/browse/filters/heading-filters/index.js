import { useState } from 'react';

import styles from './styles.module.scss';
import BrowsePageComponentHeadingFiltersPrice from './price';
import BrowsePageComponentHeadingFiltersShipping from './shipping';
import BrowsePageComponentHeadingFiltersRating from './rating';
import BrowsePageComponentHeadingFiltersSort from './sort';

const BrowsePageComponentHeadingFilters = ({
  handleSearchPrice = () => {},
}) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className={styles.filters}>
      <BrowsePageComponentHeadingFiltersPrice
        handleSearchPrice={handleSearchPrice}
      />
      <BrowsePageComponentHeadingFiltersShipping />
      <BrowsePageComponentHeadingFiltersRating />
      <BrowsePageComponentHeadingFiltersSort
        isShow={isShow}
        setIsShow={setIsShow}
      />
    </div>
  );
};

export default BrowsePageComponentHeadingFilters;
