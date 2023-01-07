import Link from 'next/link';
import styles from '../styles.module.scss';

const SingleProductComponentInfosSizes = ({ product, query, setSize }) => {
  return (
    <div className={styles.infos__sizes}>
      <h4>Select a Size: </h4>
      <div className={styles.infos__sizes_wrap}>
        {product?.sizes?.map((pSize, i) => (
          <Link
            key={i}
            href={`/product/${product?.slug}?style=${query?.style}&size=${i}`}
          >
            <div
              className={`${styles.infos__sizes_size} ${
                i === query?.size ? styles.active_size : ''
              }`}
              onClick={() => setSize(pSize?.size)}
            >
              {pSize?.size}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SingleProductComponentInfosSizes;
