import { useState } from 'react';

import styles from '../../styles.module.scss';
import BrowsePageComponentPatternCard from 'components/browse/cards/pattern-card';
import FiltersHeading from 'components/browse/shared/filters-heading';

const BrowsePageComponentPatternsFilter = ({
  patterns,
  handleSearchPattern = () => {},
  replaceQuery = () => {},
}) => {
  const [isShow, setIsShow] = useState(true);
  return (
    <div className={styles.filter}>
      <FiltersHeading
        heading={'Patterns'}
        isShow={isShow}
        setIsShow={setIsShow}
      />
      {isShow && (
        <div className={styles.filter__sizes}>
          {patterns?.map((pattern, index) => (
            <BrowsePageComponentPatternCard
              key={index}
              pattern={pattern}
              handleSearchPattern={handleSearchPattern}
              replaceQuery={replaceQuery}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BrowsePageComponentPatternsFilter;
