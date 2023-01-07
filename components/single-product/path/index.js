import styles from '../styles.module.scss';

const SingleProductComponentPath = ({ product }) => {
  return (
    <div className={styles.path}>
      Home / {product?.category?.name} /{' '}
      {product?.subCategories.map((subCat, i) => (
        <span key={i}>{subCat?.name}</span>
      ))}
    </div>
  );
};

export default SingleProductComponentPath;
