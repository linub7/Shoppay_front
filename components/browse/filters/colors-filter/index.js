import { useRouter } from 'next/router';
import { useState } from 'react';

import styles from '../../styles.module.scss';
import BrowsePageComponentColorCard from 'components/browse/cards/color-card';
import FiltersHeading from 'components/browse/shared/filters-heading';

const BrowsePageComponentColorsFilter = ({
  colors,
  handleSearchColor = () => {},
}) => {
  const [isShow, setIsShow] = useState(true);
  const router = useRouter();
  const existedColor = router?.query?.color || '';

  return (
    <div className={styles.filter}>
      <FiltersHeading heading={'Colors'} isShow={isShow} />
      {isShow && (
        <div className={styles.filter__colors}>
          {colors?.map((color, index) => (
            <BrowsePageComponentColorCard
              key={index}
              color={color}
              onClick={(item) =>
                handleSearchColor(
                  existedColor ? `${existedColor}_${item}` : item
                )
              }
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BrowsePageComponentColorsFilter;
