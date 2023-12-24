import { useState } from 'react';
import { useRouter } from 'next/router';

import styles from '../styles.module.scss';
import CustomTooltip from 'components/browse/shared/custom-tooltip';

const BrowsePageComponentHeadingFiltersPrice = ({
  handleSearchPrice = () => {},
}) => {
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');

  const router = useRouter();
  const priceQuery = router?.query?.price;

  const handlePressEnter = (e) => {
    if (e.key === 'Enter') {
      if (min !== '' && max === '') handleSearchPrice(`${min}`);
      if (max !== '' && min === '') handleSearchPrice(`_${max}`);
      if (max !== '' && min !== '') handleSearchPrice(`${min}_${max}`);
    }
  };

  const handleSearchPriceLessThanTen = () => handleSearchPrice('_10');
  const handleSearchPriceBetweenTenAndFifty = () => handleSearchPrice('10_50');
  const handleSearchPriceBetweenFiftyAndOneHundred = () =>
    handleSearchPrice('50_100');
  const handleSearchPriceBetweenOneHundredAndFiveHundred = () =>
    handleSearchPrice('100_500');
  const handleSearchPriceMoreThanFiveHundred = () => handleSearchPrice('500');

  return (
    <>
      <div className={styles.filters__price}>
        <span>Price :</span>
        <input
          type="number"
          placeholder="Min"
          min={0}
          onChange={(e) => setMin(e.target.value)}
          onKeyDown={handlePressEnter}
        />
        <input
          type="number"
          placeholder="Max"
          min={0}
          onChange={(e) => setMax(e.target.value)}
          onKeyDown={handlePressEnter}
        />
      </div>
      <div className={styles.filters__priceBtns}>
        <CustomTooltip
          title={'Check out products under 10$'}
          placement={'top'}
          style={{ height: '10%' }}
          onClick={handleSearchPriceLessThanTen}
          isActive={priceQuery !== undefined && priceQuery === '_10'}
        />
        <CustomTooltip
          title={'Check out products between 10$ and 50$'}
          placement={'top'}
          style={{ height: '25%' }}
          onClick={handleSearchPriceBetweenTenAndFifty}
          isActive={priceQuery !== undefined && priceQuery === '10_50'}
        />
        <CustomTooltip
          title={'Check out products between 50$ and 100$'}
          placement={'top'}
          style={{ height: '50%' }}
          onClick={handleSearchPriceBetweenFiftyAndOneHundred}
          isActive={priceQuery !== undefined && priceQuery === '50_100'}
        />
        <CustomTooltip
          title={'Check out products between 100$ and 500$'}
          placement={'top'}
          style={{ height: '75%' }}
          onClick={handleSearchPriceBetweenOneHundredAndFiveHundred}
          isActive={priceQuery !== undefined && priceQuery === '100_500'}
        />
        <CustomTooltip
          title={'Check out products for more than 500$'}
          placement={'top'}
          style={{ height: '100%' }}
          onClick={handleSearchPriceMoreThanFiveHundred}
          isActive={priceQuery !== undefined && priceQuery === '500'}
        />
      </div>
    </>
  );
};

export default BrowsePageComponentHeadingFiltersPrice;
