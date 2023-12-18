import { useState } from 'react';

import styles from '../../styles.module.scss';
import BrowsePageComponentCategoryCard from '../../cards/category-card';
import FiltersHeading from 'components/browse/shared/filters-heading';

const BrowsePageComponentCategoryFilter = ({ categories, subCategories }) => {
  const [isShow, setIsShow] = useState(true);
  return (
    <div className={styles.filter}>
      <FiltersHeading heading={'Category'} isShow={isShow} />
      {isShow &&
        categories?.map((category) => (
          <BrowsePageComponentCategoryCard
            key={category?._id}
            item={category}
          />
        ))}
    </div>
  );
};

export default BrowsePageComponentCategoryFilter;
