import { useState } from 'react';

import styles from '../../styles.module.scss';
import FiltersHeading from 'components/browse/shared/filters-heading';
import BrowsePageComponentGenderCard from 'components/browse/cards/gender-card';

const BrowsePageComponentGenderFilter = ({
  genders,
  handleSearchGender = () => {},
  replaceQuery = () => {},
}) => {
  const [isShow, setIsShow] = useState(true);
  return (
    <div className={styles.filter}>
      <FiltersHeading
        heading={'Genders'}
        isShow={isShow}
        setIsShow={setIsShow}
      />
      {isShow && (
        <div className={styles.filter__sizes}>
          {genders?.map((gender, index) => (
            <BrowsePageComponentGenderCard
              key={index}
              gender={gender}
              handleSearchGender={handleSearchGender}
              replaceQuery={replaceQuery}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BrowsePageComponentGenderFilter;
