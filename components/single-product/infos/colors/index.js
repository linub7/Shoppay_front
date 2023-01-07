/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import styles from '../styles.module.scss';

const SingleProductComponentInfosColors = ({
  product,
  query,
  setActiveImg,
}) => {
  return (
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
  );
};

export default SingleProductComponentInfosColors;
