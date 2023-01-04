import CountDownComponent from 'components/shared/countdown';
import { IoFlashOutline } from 'react-icons/io5';

import styles from '../styles.module.scss';

const FlashDealsHeader = () => {
  return (
    <div className={styles.flashDeals__header}>
      <h1>
        Flash Sale
        <IoFlashOutline />
      </h1>
      {/* month starts with 0 */}
      <CountDownComponent date={new Date(2023, 0, 7)} />
    </div>
  );
};

export default FlashDealsHeader;
