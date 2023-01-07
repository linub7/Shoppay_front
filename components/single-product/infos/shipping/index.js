import styles from '../styles.module.scss';

const SingleProductComponentInfosShipping = ({ product, size }) => {
  return (
    <>
      <span className={styles.infos__shipping}>
        {product?.shipping
          ? `+${product?.shipping}$ Shipping fee`
          : 'Free Shipping'}
      </span>
      <span>
        {size
          ? product?.quantity
          : product?.sizes.reduce((start, next) => start + next.qty, 0)}{' '}
        pieces available.
      </span>
    </>
  );
};

export default SingleProductComponentInfosShipping;
