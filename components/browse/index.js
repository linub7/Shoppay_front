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
import BrowsePageComponentHeadingFilters from './filters/heading-filters';
import { GENDERS } from 'constants';

const BrowsePageComponent = ({
  categories,
  products,
  subCategories,
  allDetails,
  filterCount,
  handleSearch = () => {},
  handleSearchCategory = () => {},
  handleSearchBrand = () => {},
  handleSearchStyle = () => {},
  handleSearchSize = () => {},
  handleSearchColor = () => {},
  handleSearchPattern = () => {},
  handleSearchMaterial = () => {},
  handleSearchGender = () => {},
  handleSearchPrice = () => {},
  handleClearAllFilters = () => {},
  checkQueryExisted = () => {},
  replaceQuery = () => {},
}) => {
  return (
    <div className={styles.browse}>
      <HeaderComponent handleSearch={handleSearch} />
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
            {filterCount > 0 && (
              <button
                className={styles.browse__clearBtn}
                onClick={handleClearAllFilters}
              >
                Clear All ({filterCount})
              </button>
            )}
            <BrowsePageComponentCategoryFilter
              categories={categories}
              subCategories={subCategories}
              handleSearchCategory={handleSearchCategory}
            />
            <BrowsePageComponentSizeFilter
              sizes={allDetails?.sizes}
              handleSearchSize={handleSearchSize}
            />
            <BrowsePageComponentColorsFilter
              colors={allDetails?.colors}
              handleSearchColor={handleSearchColor}
            />
            <BrowsePageComponentBrandsFilter
              brands={allDetails?.brands}
              handleSearchBrand={handleSearchBrand}
              replaceQuery={replaceQuery}
            />
            <BrowsePageComponentStylesFilter
              stylesArray={allDetails?.styles}
              handleSearchStyle={handleSearchStyle}
            />
            <BrowsePageComponentPatternsFilter
              patterns={allDetails?.patternType}
              handleSearchPattern={handleSearchPattern}
            />
            <BrowsePageComponentMaterialFilter
              materials={allDetails?.material}
              handleSearchMaterial={handleSearchMaterial}
            />
            <BrowsePageComponentGenderFilter
              genders={GENDERS}
              handleSearchGender={handleSearchGender}
            />
          </div>
          <div className={styles.browse__store_products_wrap}>
            <BrowsePageComponentHeadingFilters
              handleSearchPrice={handleSearchPrice}
            />
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
