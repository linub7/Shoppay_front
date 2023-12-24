import { useState } from 'react';

import styles from '../../styles.module.scss';
import FiltersHeading from 'components/browse/shared/filters-heading';
import BrowsePageComponentGenderCard from 'components/browse/cards/gender-card';

const BrowsePageComponentGenderFilter = ({
  genders,
  handleSearchGender = () => {},
}) => {
  const [isShow, setIsShow] = useState(true);
  return (
    <div className={styles.filter}>
      <FiltersHeading heading={'Genders'} isShow={isShow} />
      {isShow && (
        <div className={styles.filter__sizes}>
          {genders?.map((gender, index) => (
            <BrowsePageComponentGenderCard
              key={index}
              gender={gender}
              handleSearchGender={handleSearchGender}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BrowsePageComponentGenderFilter;
