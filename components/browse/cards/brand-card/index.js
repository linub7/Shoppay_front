/* eslint-disable @next/next/no-img-element */

import { brandsArray } from 'constants';
import styles from '../../styles.module.scss';

const BrowsePageComponentBrandCard = ({
  brand,
  handleSearchBrand = () => {},
  replaceQuery = () => {},
}) => {
  const result = replaceQuery('brand', brand);
  return (
    <button
      className={`${styles.filter__brand} ${
        result.check ? styles.activeFilter : ''
      }`}
    >
      {brandsArray?.map((el, index) =>
        el?.name?.toLowerCase() === brand?.toLowerCase() ? (
          <img
            src={el?.src}
            alt={brand}
            key={index}
            onClick={() => handleSearchBrand(result.result)}
          />
        ) : (
          <div
            key={index}
            onClick={() => handleSearchBrand(result.result)}
          ></div>
        )
      )}
    </button>
  );
};

export default BrowsePageComponentBrandCard;
