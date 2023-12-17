import ProductsSwiper from 'components/shared/products-swiper';
import { gamingSwiper } from 'constants';
import { womenSwiper } from 'constants';
import HomeCategoryComponent from './category';
import FlashDealsComponent from './flash-deals';
import HomeMainComponent from './main';
import HomeProducts from './products';
import styles from './styles.module.scss';

const HomeComponent = () => {
  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <HomeMainComponent />
        <FlashDealsComponent />
        <div className={styles.home__category}>
          <HomeCategoryComponent />
        </div>
        <ProductsSwiper
          header={'For Women'}
          products={womenSwiper}
          bg="#5a31f4"
        />
        <ProductsSwiper
          header={'Gaming'}
          products={gamingSwiper}
          bg="#fac80f"
        />
        <HomeProducts />
      </div>
    </div>
  );
};

export default HomeComponent;
