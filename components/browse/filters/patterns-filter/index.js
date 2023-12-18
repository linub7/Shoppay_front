import { useState } from 'react';

import styles from '../../styles.module.scss';
import BrowsePageComponentPatternCard from 'components/browse/cards/pattern-card';
import FiltersHeading from 'components/browse/shared/filters-heading';

const BrowsePageComponentPatternsFilter = ({ patterns }) => {
  const [isShow, setIsShow] = useState(true);
  return (
    <div className={styles.filter}>
      <FiltersHeading heading={'Patterns'} isShow={isShow} />
      {isShow && (
        <div className={styles.filter__sizes}>
          {patterns?.map((pattern, index) => (
            <BrowsePageComponentPatternCard key={index} pattern={pattern} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BrowsePageComponentPatternsFilter;
