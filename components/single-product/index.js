import { useState } from 'react';
import SingleProductComponentImagesSwiper from './images-swiper';
import SingleProductComponentPath from './path';
import styles from './styles.module.scss';

const SingleProductPageComponent = ({ product }) => {
  const [activeImg, setActiveImg] = useState('');
  return (
    <div className={styles.product}>
      <div className={styles.container}>
        <SingleProductComponentPath product={product} />
        <div className={styles.product__main}>
          <SingleProductComponentImagesSwiper
            images={product?.images}
            activeImg={activeImg}
            setActiveImg={setActiveImg}
          />
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPageComponent;
