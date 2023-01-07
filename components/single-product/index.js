import { useState } from 'react';
import SingleProductComponentImagesSwiper from './images-swiper';
import SingleProductComponentInfos from './infos';
import SingleProductComponentPath from './path';
import SingleProductComponentReviews from './reviews';
import styles from './styles.module.scss';

const SingleProductPageComponent = ({ product }) => {
  const [activeImg, setActiveImg] = useState('');
  return (
    <div className={styles.product}>
      <div className={styles.product__container}>
        <SingleProductComponentPath product={product} />
        <div className={styles.product__main}>
          <SingleProductComponentImagesSwiper
            images={product?.images}
            activeImg={activeImg}
          />
          <SingleProductComponentInfos
            product={product}
            setActiveImg={setActiveImg}
          />
        </div>
        <SingleProductComponentReviews product={product} />
      </div>
    </div>
  );
};

export default SingleProductPageComponent;
