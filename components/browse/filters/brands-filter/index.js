import { useState } from 'react';

import styles from '../../styles.module.scss';
import FiltersHeading from 'components/browse/shared/filters-heading';
import BrowsePageComponentBrandCard from 'components/browse/cards/brand-card';

const BrowsePageComponentBrandsFilter = ({
  brands,
  handleSearchBrand = () => {},
  replaceQuery = () => {},
}) => {
  const [isShow, setIsShow] = useState(true);
  return (
    <div className={styles.filter}>
      <FiltersHeading
        heading={'Brands'}
        isShow={isShow}
        setIsShow={setIsShow}
      />
      {isShow && (
        <div className={styles.filter__sizes}>
          {brands?.map((brand, index) => (
            <BrowsePageComponentBrandCard
              key={index}
              brand={brand}
              handleSearchBrand={handleSearchBrand}
              replaceQuery={replaceQuery}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BrowsePageComponentBrandsFilter;
