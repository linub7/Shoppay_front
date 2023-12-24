/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';

import { brandsArray } from 'constants';
import styles from '../../styles.module.scss';

const BrowsePageComponentBrandCard = ({
  brand,
  handleSearchBrand = () => {},
}) => {
  const router = useRouter();
  const existedBrand = router?.query?.brand || '';
  return (
    <button className={styles.filter__brand}>
      {brandsArray?.map((el, index) =>
        el?.name?.toLowerCase() === brand?.toLowerCase() ? (
          <img
            src={el?.src}
            alt={brand}
            key={index}
            onClick={() =>
              handleSearchBrand(
                existedBrand ? `${existedBrand}_${brand}` : brand
              )
            }
          />
        ) : (
          <div
            key={index}
            onClick={() =>
              handleSearchBrand(
                existedBrand ? `${existedBrand}_${brand}` : brand
              )
            }
          ></div>
        )
      )}
    </button>
  );
};

export default BrowsePageComponentBrandCard;
