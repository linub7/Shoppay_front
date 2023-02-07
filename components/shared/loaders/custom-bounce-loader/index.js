import BounceLoader from 'react-spinners/BounceLoader';
import styles from './styles.module.scss';

const CustomBounceLoader = ({ loading }) => {
  return (
    <div className={styles.loader}>
      <BounceLoader color="#fff" loading={loading} />
    </div>
  );
};

export default CustomBounceLoader;
