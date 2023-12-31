import { useRouter } from 'next/router';

import styles from '../styles.module.scss';

const BrowsePageComponentHeadingFiltersShipping = ({
  replaceQuery = () => {},
  handleSearchFreeShipping = () => {},
}) => {
  const router = useRouter();
  const result = replaceQuery(
    'shipping',
    router?.query?.shipping === '0' ? false : '0'
  );
  return (
    <div
      className={styles.filters__shipping}
      onClick={() => handleSearchFreeShipping(result?.result)}
    >
      <input
        type="checkbox"
        name="shipping"
        id="shipping"
        checked={router?.query?.shipping == '0'}
      />
      <label htmlFor="shipping">Free shipping</label>
    </div>
  );
};

export default BrowsePageComponentHeadingFiltersShipping;
