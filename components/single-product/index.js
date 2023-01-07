import SingleProductComponentPath from './path';
import styles from './styles.module.scss';

const SingleProductPageComponent = ({ product }) => {
  return (
    <div className={styles.product}>
      <div className={styles.container}>
        <SingleProductComponentPath product={product} />
      </div>
    </div>
  );
};

export default SingleProductPageComponent;
