import { Rating } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from './styles.module.scss';

const SingleProductComponentInfos = ({ product }) => {
  const { query } = useRouter();
  const [size, setSize] = useState(query?.size);

  return (
    <div className={styles.infos}>
      <div className={styles.infos__container}>
        <h1 className={styles.infos__name}>{product?.name}</h1>
        <h2 className={styles.infos__sku}>{product?.sku}</h2>
        <div className={styles.infos__rating}>
          <Rating
            name="half-rating-read"
            defaultValue={product?.rating}
            precision={0.5}
            readOnly
            style={{ color: '#FACF19' }}
          />
          {product?.numReviews}{' '}
          {product?.numReviews === 1 ? 'review' : 'reviews'}
        </div>
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
        <span className={styles.infos__shipping}>
          {product?.shipping
            ? `+${product?.shipping}$ Shipping fee`
            : 'Free Shipping'}
        </span>
        <span>
          {!size
            ? product?.quantity
            : product?.sizes.reduce((start, next) => start + next.qty, 0)}{' '}
          pieces available.
        </span>
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
      </div>
    </div>
  );
};

export default SingleProductComponentInfos;
