import { useState } from 'react';
import { useRouter } from 'next/router';

import BrowsePageComponent from 'components/browse';
import PageHeader from 'components/shared/page-header';
import {
  getAllProductsDetailsHandler,
  getAllProductsHandler,
  getSearchedProductsHandler,
} from 'actions/products';
import { getAllCategoriesHandler } from 'actions/category';
import { getAllSubCategoriesHandler } from 'actions/sub-category';
import { randomize } from 'utils/arraysUtils';

const BrowsePage = ({
  products,
  categories,
  subCategories,
  allDetails,
  paginationCount,
}) => {
  const router = useRouter();

  const filter = ({
    search,
    category,
    brand,
    style,
    size,
    color,
    pattern,
    material,
    gender,
    price,
    shipping,
    rating,
    sort,
    page,
  }) => {
    const path = router?.pathname;
    const { query } = router;
    if (search) query.search = search;
    if (category) query.category = category;
    if (brand) query.brand = brand;
    if (style) query.style = style;
    if (size) query.size = size;
    if (color) query.color = color;
    if (pattern) query.pattern = pattern;
    if (material) query.material = material;
    if (gender) query.gender = gender;
    if (price) query.price = price;
    if (shipping) query.shipping = shipping;
    if (rating) query.rating = rating;
    if (sort) query.sort = sort;
    if (page) query.page = page;
    router.push({
      pathname: path,
      query,
    });
  };

  const handleSearch = (search) => filter({ search });
  const handleSearchCategory = (category) => filter({ category });
  const handleSearchBrand = (brand) => filter({ brand });
  const handleSearchStyle = (style) => filter({ style });
  const handleSearchSize = (size) => filter({ size });
  const handleSearchColor = (color) => filter({ color });
  const handleSearchPattern = (pattern) => filter({ pattern });
  const handleSearchMaterial = (material) => filter({ material });
  const handleSearchGender = (gender) => {
    if (gender === 'Unisex') {
      filter({ gender: {} });
    } else {
      filter({ gender });
    }
  };
  const handleSearchPrice = (price) => filter({ price });
  const handleSearchRating = (rating) => filter({ rating });
  const handleSearchSort = (sort) => filter({ sort });
  const handleSearchFreeShipping = (shipping) => filter({ shipping });
  const handleSearchPage = (e, page) => filter({ page });

  const replaceQuery = (queryName, value) => {
    const existedQuery = router?.query[queryName];

    const valueCheck = existedQuery?.search(value);
    const _check = existedQuery?.search(`_${value}`);
    let result = '';
    if (existedQuery) {
      if (existedQuery === value) {
        result = {};
      } else {
        if (valueCheck !== -1) {
          if (_check !== -1) {
            result = existedQuery?.replace(`_${value}`, '');
          } else if (valueCheck === 0) {
            result = existedQuery?.replace(`${value}_`, '');
          } else {
            result = existedQuery?.replace(value, '');
          }
        } else {
          result = `${existedQuery}_${value}`;
        }
      }
    } else {
      result = value;
    }
    return { result, check: existedQuery && valueCheck !== -1 ? true : false };
  };

  return (
    <>
      <PageHeader title={'ShopPay - Browse'} content={'ShopPay Browse page'} />
      <BrowsePageComponent
        categories={categories}
        products={products}
        subCategories={subCategories}
        allDetails={allDetails}
        paginationCount={paginationCount}
        handleSearch={handleSearch}
        handleSearchCategory={handleSearchCategory}
        handleSearchBrand={handleSearchBrand}
        handleSearchStyle={handleSearchStyle}
        handleSearchSize={handleSearchSize}
        handleSearchColor={handleSearchColor}
        handleSearchPattern={handleSearchPattern}
        handleSearchMaterial={handleSearchMaterial}
        handleSearchGender={handleSearchGender}
        handleSearchPrice={handleSearchPrice}
        handleSearchRating={handleSearchRating}
        handleSearchSort={handleSearchSort}
        handleSearchPage={handleSearchPage}
        handleSearchFreeShipping={handleSearchFreeShipping}
        replaceQuery={replaceQuery}
      />
    </>
  );
};

export async function getServerSideProps(context) {
  const {
    query: {
      search,
      category,
      brand,
      style,
      size,
      color,
      pattern,
      material,
      gender,
      price,
      shipping,
      rating,
      sort,
      page,
    },
  } = context;

  let searchedProducts = [];
  let searchedProductsLength = 0;
  if (
    (search && search?.length > 1) ||
    category ||
    brand ||
    style ||
    size ||
    color ||
    pattern ||
    material ||
    gender ||
    price ||
    shipping !== false ||
    rating ||
    sort ||
    page
  ) {
    const { err: getSearchedProductsError, data: getSearchedProductsData } =
      await getSearchedProductsHandler(
        search ? search : '',
        category ? category : '',
        brand ? brand : '',
        style ? style : '',
        size ? size : '',
        color ? color?.replaceAll('#', '') : '',
        pattern ? pattern : '',
        material ? material : '',
        gender ? gender : '',
        price ? price : '',
        shipping ? shipping : 0,
        rating ? rating : 0,
        sort ? sort : '',
        page ? page : 1
      );
    searchedProductsLength = getSearchedProductsData?.result;
    if (getSearchedProductsData?.result > 0) {
      searchedProducts = getSearchedProductsData?.data;
    }
  }

  const { err: getAllProductsError, data: getAllProductsData } =
    await getAllProductsHandler(page ? page : 1);

  if (getAllProductsError) {
    console.log({ getAllProductsError });
    return {
      redirect: {
        destination: '/',
      },
    };
  }

  const { err: getAllCategoriesError, data: getAllCategoriesData } =
    await getAllCategoriesHandler();

  if (getAllCategoriesError) {
    console.log({ getAllCategoriesError });
    return {
      redirect: {
        destination: '/',
      },
    };
  }

  const { err: getAllSubCategoriesError, data: getAllSubCategoriesData } =
    await getAllSubCategoriesHandler();

  if (getAllSubCategoriesError) {
    console.log({ getAllSubCategoriesError });
    return {
      redirect: {
        destination: '/',
      },
    };
  }

  const { err: getAllProductsColorsError, data: getAllProductsColorsData } =
    await getAllProductsDetailsHandler(category ? category : '');

  if (getAllProductsColorsError) {
    console.log({ getAllProductsColorsError });
    return {
      redirect: {
        destination: '/',
      },
    };
  }

  const paginationCount =
    searchedProducts?.length > 0
      ? Math.ceil(Number(searchedProductsLength) / 10)
      : Math.ceil(Number(getAllProductsData?.result) / 10);

  console.log({
    allProductsLength: getAllProductsData?.result,
    searchedProductsLength,
    paginationCount,
  });

  return {
    props: {
      products:
        (search && search?.length > 1) ||
        category ||
        brand ||
        style ||
        size ||
        color ||
        pattern ||
        material ||
        gender ||
        price ||
        shipping !== false ||
        rating ||
        sort
          ? sort && sort !== ''
            ? searchedProducts
            : randomize(searchedProducts)
          : randomize(getAllProductsData?.data?.data),
      categories: getAllCategoriesData?.data?.data,
      subCategories: getAllSubCategoriesData?.data?.data,
      allDetails: getAllProductsColorsData?.data?.data,
      paginationCount,
    },
  };
}

export default BrowsePage;
