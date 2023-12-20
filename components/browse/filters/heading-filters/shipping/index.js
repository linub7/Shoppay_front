import styles from '../styles.module.scss';

const BrowsePageComponentHeadingFiltersShipping = () => {
  return (
    <div className={styles.filters__shipping}>
      <input type="checkbox" name="shipping" id="shipping" />
      <label htmlFor="shipping">Free shipping</label>
    </div>
  );
};

export default BrowsePageComponentHeadingFiltersShipping;
