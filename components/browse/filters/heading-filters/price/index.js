import styles from '../styles.module.scss';
import CustomTooltip from 'components/browse/shared/custom-tooltip';

const BrowsePageComponentHeadingFiltersPrice = () => {
  return (
    <>
      <div className={styles.filters__price}>
        <span>Price :</span>
        <input type="number" placeholder="Min" min={0} />
        <input type="number" placeholder="Max" min={0} />
      </div>
      <div className={styles.filters__priceBtns}>
        <CustomTooltip
          title={'Check out products under 10$'}
          placement={'top'}
          style={{ height: '10%' }}
        />
        <CustomTooltip
          title={'Check out products between 10$ and 50$'}
          placement={'top'}
          style={{ height: '25%' }}
        />
        <CustomTooltip
          title={'Check out products between 50$ and 100$'}
          placement={'top'}
          style={{ height: '50%' }}
        />
        <CustomTooltip
          title={'Check out products between 100$ and 500$'}
          placement={'top'}
          style={{ height: '75%' }}
        />
        <CustomTooltip
          title={'Check out products for more than 500$'}
          placement={'top'}
          style={{ height: '100%' }}
        />
      </div>
    </>
  );
};

export default BrowsePageComponentHeadingFiltersPrice;
