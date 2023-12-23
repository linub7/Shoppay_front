import { useState } from 'react';

import styles from '../../styles.module.scss';
import BrowsePageComponentSizeCard from 'components/browse/cards/size-card';
import FiltersHeading from 'components/browse/shared/filters-heading';

const BrowsePageComponentSizeFilter = ({
  sizes,
  handleSearchSize = () => {},
}) => {
  const [isShow, setIsShow] = useState(true);
  return (
    <div className={styles.filter}>
      <FiltersHeading heading={'Sizes'} isShow={isShow} />
      {isShow && (
        <div className={styles.filter__sizes}>
          {sizes?.map((size, index) => (
            <BrowsePageComponentSizeCard
              key={index}
              size={size}
              handleSearchSize={handleSearchSize}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BrowsePageComponentSizeFilter;
