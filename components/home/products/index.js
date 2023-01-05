import ProductCard from 'components/shared/product-card';
import styles from '../styles.module.scss';
const HomeProducts = ({ products }) => {
  return (
    <div className={styles.products}>
      {products?.map((product, i) => (
        <ProductCard key={i} product={product} />
      ))}
    </div>
  );
};

export default HomeProducts;
