import { useState } from 'react';

import styles from '../../styles.module.scss';
import BrowsePageComponentColorCard from 'components/browse/cards/color-card';
import FiltersHeading from 'components/browse/shared/filters-heading';

const BrowsePageComponentColorsFilter = ({
  colors,
  handleSearchColor = () => {},
  replaceQuery = () => {},
}) => {
  const [isShow, setIsShow] = useState(true);

  return (
    <div className={styles.filter}>
      <FiltersHeading
        heading={'Colors'}
        isShow={isShow}
        setIsShow={setIsShow}
      />
      {isShow && (
        <div className={styles.filter__colors}>
          {colors?.map((color, index) => {
            const result = replaceQuery('color', color);
            return (
              <BrowsePageComponentColorCard
                key={index}
                color={color}
                check={result?.check}
                onClick={(item) => handleSearchColor(result?.result)}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default BrowsePageComponentColorsFilter;
