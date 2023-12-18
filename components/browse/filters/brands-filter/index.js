import { useState } from 'react';

import styles from '../../styles.module.scss';
import FiltersHeading from 'components/browse/shared/filters-heading';
import BrowsePageComponentBrandCard from 'components/browse/cards/brand-card';

const BrowsePageComponentBrandsFilter = ({ brands }) => {
  const [isShow, setIsShow] = useState(true);
  return (
    <div className={styles.filter}>
      <FiltersHeading heading={'Brands'} isShow={isShow} />
      {isShow && (
        <div className={styles.filter__sizes}>
          {brands?.map((brand, index) => (
            <BrowsePageComponentBrandCard key={index} brand={brand} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BrowsePageComponentBrandsFilter;
