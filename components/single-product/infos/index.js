/* eslint-disable @next/next/no-img-element */
import { Rating } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import {
  IoAddOutline,
  IoBag,
  IoHeartOutline,
  IoRemoveOutline,
} from 'react-icons/io5';
import SingleProductComponentInfosShare from './share';
import styles from './styles.module.scss';

const SingleProductComponentInfos = ({ product, setActiveImg }) => {
  const { query } = useRouter();
  const [size, setSize] = useState(query?.size);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    return () => {
      setSize('');
      setQty(1);
    };
  }, [query?.style]);

  useEffect(() => {
    qty > product?.quantity && setQty(product?.quantity);
  }, [query.size]);

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
          {product?.numReviews === 1 ? ' review' : ' reviews'}
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
          {size
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
        <div className={styles.infos__colors}>
          {product?.colors &&
            product?.colors.map((pColor, j) => (
              <span
                key={j}
                className={j === query?.style ? styles.active_color : ''}
                onMouseOver={() =>
                  setActiveImg(product?.subProducts[j]?.images[0]?.url)
                }
                onMouseLeave={() => setActiveImg('')}
              >
                <Link href={`/product/${product?.slug}?style=${j}`}>
                  <img src={pColor?.image} alt="image" />
                </Link>
              </span>
            ))}
        </div>
        <div className={styles.qty}>
          <button onClick={() => qty > 1 && setQty((prev) => prev - 1)}>
            <IoRemoveOutline />
          </button>
          <span>{qty}</span>
          <button
            onClick={() =>
              qty < product?.quantity && setQty((prev) => prev + 1)
            }
          >
            <IoAddOutline />
          </button>
        </div>
        <div className={styles.infos__actions}>
          <button
            disabled={product?.quantity < 1}
            style={{
              cursor: `${product?.quantity < 1 ? 'not-allowed' : ''}`,
            }}
          >
            <IoBag />
            <b>Add to Cart</b>
          </button>
          <button>
            <IoHeartOutline />
            Wishlist
          </button>
        </div>
        <SingleProductComponentInfosShare />
      </div>
    </div>
  );
};

export default SingleProductComponentInfos;
