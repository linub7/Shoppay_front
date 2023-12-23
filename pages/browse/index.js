import { useEffect, useState } from 'react';
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

const BrowsePage = ({ products, categories, subCategories, allDetails }) => {
  const [filterCount, setFilterCount] = useState(0);
  const router = useRouter();
  // console.log(router?.query);
  // useEffect(() => {
  //   for (const el in router?.query) {
  //     setFilterCount((prev) => prev + 1);
  //   }

  //   return () => {};
  // }, [router?.query]);

  const filter = ({ search, category, brand, style, size, color }) => {
    const path = router?.pathname;
    const { query } = router;
    if (search) query.search = search;
    if (category) query.category = category;
    if (brand) query.brand = brand;
    if (style) query.style = style;
    if (size) query.size = size;
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

  const handleClearAllFilters = () => router.push('/browse');

  return (
    <>
      <PageHeader title={'ShopPay - Browse'} content={'ShopPay Browse page'} />
      <BrowsePageComponent
        categories={categories}
        products={products}
        subCategories={subCategories}
        allDetails={allDetails}
        filterCount={filterCount}
        handleSearch={handleSearch}
        handleSearchCategory={handleSearchCategory}
        handleSearchBrand={handleSearchBrand}
        handleSearchStyle={handleSearchStyle}
        handleSearchSize={handleSearchSize}
        handleClearAllFilters={handleClearAllFilters}
      />
    </>
  );
};

export async function getServerSideProps(context) {
  const {
    query: { search, category, brand, style, size },
  } = context;

  let searchedProducts = [];
  if ((search && search?.length > 1) || category || brand || style || size) {
    const { err: getSearchedProductsError, data: getSearchedProductsData } =
      await getSearchedProductsHandler(
        search ? search : '',
        category ? category : '',
        brand ? brand : '',
        style ? style : '',
        size ? size : ''
      );
    console.log({ getSearchedProductsData });
    if (getSearchedProductsData?.result > 0) {
      searchedProducts = getSearchedProductsData?.data;
    }
  }

  console.log({ searchedProducts });

  const { err: getAllProductsError, data: getAllProductsData } =
    await getAllProductsHandler();

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

  return {
    props: {
      products:
        (search && search?.length > 1) || category || brand || style || size
          ? randomize(searchedProducts)
          : randomize(getAllProductsData?.data?.data),
      categories: getAllCategoriesData?.data?.data,
      subCategories: getAllSubCategoriesData?.data?.data,
      allDetails: getAllProductsColorsData?.data?.data,
    },
  };
}

export default BrowsePage;
