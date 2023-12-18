import Link from 'next/link';

import styles from './styles.module.scss';
import HeaderComponent from 'components/shared/header';
import ProductCard from 'components/shared/product-card';
import BrowsePageComponentCategoryFilter from './filters/category-filter';
import BrowsePageComponentSizeFilter from './filters/size-filter';
import BrowsePageComponentColorsFilter from './filters/colors-filter';
import BrowsePageComponentBrandsFilter from './filters/brands-filter';
import BrowsePageComponentStylesFilter from './filters/styles-filter';
import BrowsePageComponentPatternsFilter from './filters/patterns-filter';
import BrowsePageComponentMaterialFilter from './filters/material-filter';
import BrowsePageComponentGenderFilter from './filters/gender-filter';

const BrowsePageComponent = ({
  categories,
  products,
  subCategories,
  allDetails,
}) => {
  const genders = ['Men', 'Women', 'Unisex'];
  return (
    <div className={styles.browse}>
      <HeaderComponent />
      <div className={styles.browse__container}>
        <div className={styles.browse__path}>Home / Browse</div>
        <div className={styles.browse__tags}>
          {categories?.map((category) => (
            <Link key={category?._id} href={''} passHref>
              <a>{category?.name}</a>
            </Link>
          ))}
        </div>
        <div className={styles.browse__store}>
          <div
            className={`${styles.browse__store_filters} ${styles.scrollbar}`}
          >
            <button className={styles.browse__clearBtn}>Clear All (3)</button>
            <BrowsePageComponentCategoryFilter
              categories={categories}
              subCategories={subCategories}
            />
            <BrowsePageComponentSizeFilter sizes={allDetails?.sizes} />
            <BrowsePageComponentColorsFilter colors={allDetails?.colors} />
            <BrowsePageComponentBrandsFilter brands={allDetails?.brands} />
            <BrowsePageComponentStylesFilter stylesArray={allDetails?.styles} />
            <BrowsePageComponentPatternsFilter
              patterns={allDetails?.patternType}
            />
            <BrowsePageComponentMaterialFilter
              materials={allDetails?.material}
            />
            <BrowsePageComponentGenderFilter genders={genders} />
          </div>
          <div className={styles.browse__store_products_wrap}>
            <div className={styles.browse__store_products}>
              {products?.map((product) => (
                <ProductCard key={product?._id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowsePageComponent;
