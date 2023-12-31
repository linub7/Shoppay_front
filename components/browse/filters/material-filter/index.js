import { useState } from 'react';

import styles from '../../styles.module.scss';
import FiltersHeading from 'components/browse/shared/filters-heading';
import BrowsePageComponentMaterialCard from 'components/browse/cards/material-card';

const BrowsePageComponentMaterialFilter = ({
  materials,
  handleSearchMaterial = () => {},
  replaceQuery = () => {},
}) => {
  const [isShow, setIsShow] = useState(true);
  return (
    <div className={styles.filter}>
      <FiltersHeading
        heading={'Materials'}
        isShow={isShow}
        setIsShow={setIsShow}
      />
      {isShow && (
        <div className={styles.filter__sizes}>
          {materials?.map((material, index) => (
            <BrowsePageComponentMaterialCard
              key={index}
              material={material}
              handleSearchMaterial={handleSearchMaterial}
              replaceQuery={replaceQuery}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BrowsePageComponentMaterialFilter;
