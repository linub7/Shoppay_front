import styles from '../styles.module.scss';

const SingleProductComponentInfosPrice = ({ size, product }) => {
  return (
    <div className={styles.infos__price}>
      {!size ? <h2>{product?.priceRange}</h2> : <h1>{product?.price}</h1>}
      {product?.discount > 0 ? (
        <h3>
          {size && <span>{product?.priceBefore}$</span>}{' '}
          <span>(-{product?.discount}%)</span>
        </h3>
      ) : (
        ''
      )}
    </div>
  );
};

export default SingleProductComponentInfosPrice;
