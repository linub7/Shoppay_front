/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import ProductCardSwiper from './swiper/ProductCardSwiper';

const ProductCard = ({ product }) => {
  const [active, setActive] = useState(0);
  const [images, setImages] = useState(product?.subProducts[active]?.images);
  const [prices, setPrices] = useState(
    product?.subProducts[active]?.sizes
      ?.map((size) => size.price)
      .sort((a, b) => a - b)
  );
  const [styless, setStyless] = useState(
    product?.subProducts?.map((product) => product.color)
  );

  useEffect(() => {
    setImages(product?.subProducts[active]?.images);
    setPrices(
      product?.subProducts[active]?.sizes
        ?.map((size) => size.price)
        .sort((a, b) => a - b)
    );

    return () => {};
  }, [active]);

  return (
    <div className={styles.product}>
      <div className={styles.product__container}>
        <Link href={`/product/${product?.slug}?style=${active}`}>
          <div>
            <ProductCardSwiper images={images} />
          </div>
        </Link>
        {product?.subProducts[active]?.discount ? (
          <div className={styles.product__discount}>
            -{product?.subProducts[active]?.discount}%
          </div>
        ) : (
          ''
        )}
        <div className={styles.product__infos}>
          <h1>
            {product?.name?.length >= 45
              ? `${product?.name.substring(0, 45)}...`
              : product?.name}
          </h1>
          <span>
            {prices?.length === 1
              ? `USD ${prices[0]}$`
              : `USD ${prices[0]} - ${prices[prices.length - 1]}$`}
          </span>
          <div className={styles.product__colors}>
            {styless &&
              styless.map((sty, j) =>
                sty?.image ? (
                  <img
                    className={j === active ? styles.active : ''}
                    src={sty.image?.url}
                    alt="image"
                    onMouseOver={() => {
                      setImages(product?.subProducts[j]?.images);
                      setActive(j);
                    }}
                    key={j}
                  />
                ) : (
                  <span
                    style={{ backgroundColor: `${sty.color}` }}
                    key={j}
                    onMouseOver={() => {
                      setImages(product?.subProducts[j]?.images);
                      setActive(j);
                    }}
                  ></span>
                )
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
