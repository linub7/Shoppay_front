/* eslint-disable @next/next/no-img-element */
import { brandsArray } from 'constants';
import styles from '../../styles.module.scss';

const BrowsePageComponentBrandCard = ({
  brand,
  handleSearchBrand = () => {},
}) => {
  return (
    <button className={styles.filter__brand}>
      {brandsArray?.map((el, index) =>
        el?.name?.toLowerCase() === brand?.toLowerCase() ? (
          <img
            src={el?.src}
            alt={brand}
            key={index}
            onClick={() => handleSearchBrand(brand)}
          />
        ) : (
          <div key={index} onClick={() => handleSearchBrand(brand)}></div>
        )
      )}
    </button>
  );
};

export default BrowsePageComponentBrandCard;
