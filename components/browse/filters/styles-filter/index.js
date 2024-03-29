import { useState } from 'react';

import styles from '../../styles.module.scss';
import BrowsePageComponentStyleCard from 'components/browse/cards/style-card';
import FiltersHeading from 'components/browse/shared/filters-heading';

const BrowsePageComponentStylesFilter = ({
  stylesArray,
  handleSearchStyle = () => {},
  replaceQuery = () => {},
}) => {
  const [isShow, setIsShow] = useState(true);
  return (
    <div className={styles.filter}>
      <FiltersHeading
        heading={'Styles'}
        isShow={isShow}
        setIsShow={setIsShow}
      />
      {isShow && (
        <div className={styles.filter__sizes}>
          {stylesArray?.map((style, index) => (
            <BrowsePageComponentStyleCard
              key={index}
              style={style}
              handleSearchStyle={handleSearchStyle}
              replaceQuery={replaceQuery}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BrowsePageComponentStylesFilter;
