import DotLoader from 'react-spinners/DotLoader';
import styles from './styles.module.scss';

const CustomDotLoader = ({ loading }) => {
  return (
    <div className={styles.loader}>
      <DotLoader color="#2f82ff" loading={loading} />
    </div>
  );
};

export default CustomDotLoader;
