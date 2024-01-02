import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Pagination } from '@mui/material';
import { useRouter } from 'next/router';

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
  paginationCount,
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
  handleSearchFreeShipping = () => {},
  handleSearchRating = () => {},
  handleSearchSort = () => {},
  handleSearchPage = () => {},
  replaceQuery = () => {},
}) => {
  const [scrollY, setScrollY] = useState(0);
  const [height, setHeight] = useState(0);

  const headerRef = useRef(null);
  const el = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrollY(window?.scrollY);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    setHeight(headerRef?.current?.offsetHeight + el?.current?.offsetHeight);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const queriesLength = Object.keys(router?.query)?.length;

  const handleClearAllFilters = () => router.push('/browse');

  return (
    <div className={styles.browse}>
      <div ref={headerRef}>
        <HeaderComponent handleSearch={handleSearch} />
      </div>
      <div className={styles.browse__container}>
        <div ref={el}>
          <div className={styles.browse__path}>Home / Browse</div>
          <div className={styles.browse__tags}>
            {categories?.map((category) => (
              <Link
                key={category?._id}
                href={`/browse?category=${category?._id}`}
                passHref
              >
                <a
                  className={
                    router?.query?.category?.toString() ===
                    category?._id?.toString()
                      ? styles.activeCategory
                      : ''
                  }
                >
                  {category?.name}
                </a>
              </Link>
            ))}
          </div>
        </div>
        <div
          className={`${styles.browse__store} ${
            scrollY >= height ? styles.fixed : ''
          }`}
        >
          <div
            className={`${styles.browse__store_filters} ${styles.scrollbar}`}
          >
            {queriesLength > 0 && (
              <button
                className={styles.browse__clearBtn}
                onClick={handleClearAllFilters}
              >
                Clear All ({queriesLength})
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
              replaceQuery={replaceQuery}
            />
            <BrowsePageComponentColorsFilter
              colors={allDetails?.colors}
              handleSearchColor={handleSearchColor}
              replaceQuery={replaceQuery}
            />
            <BrowsePageComponentBrandsFilter
              brands={allDetails?.brands}
              handleSearchBrand={handleSearchBrand}
              replaceQuery={replaceQuery}
            />
            <BrowsePageComponentStylesFilter
              stylesArray={allDetails?.styles}
              handleSearchStyle={handleSearchStyle}
              replaceQuery={replaceQuery}
            />
            <BrowsePageComponentPatternsFilter
              patterns={allDetails?.patternType}
              handleSearchPattern={handleSearchPattern}
              replaceQuery={replaceQuery}
            />
            <BrowsePageComponentMaterialFilter
              materials={allDetails?.material}
              handleSearchMaterial={handleSearchMaterial}
              replaceQuery={replaceQuery}
            />
            <BrowsePageComponentGenderFilter
              genders={GENDERS}
              handleSearchGender={handleSearchGender}
              replaceQuery={replaceQuery}
            />
          </div>
          <div className={styles.browse__store_products_wrap}>
            <BrowsePageComponentHeadingFilters
              replaceQuery={replaceQuery}
              handleSearchPrice={handleSearchPrice}
              handleSearchFreeShipping={handleSearchFreeShipping}
              handleSearchRating={handleSearchRating}
              handleSearchSort={handleSearchSort}
            />
            <div className={styles.browse__store_products}>
              {products?.map((product) => (
                <ProductCard key={product?._id} product={product} />
              ))}
            </div>
            {paginationCount > 1 && (
              <div className={styles.pagination}>
                <Pagination
                  count={paginationCount}
                  defaultPage={Number(router?.query?.page) || 1}
                  onChange={handleSearchPage}
                  variant="outlined"
                  color="primary"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowsePageComponent;
