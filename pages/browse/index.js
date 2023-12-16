import BrowsePageComponent from 'components/browse';
import PageHeader from 'components/shared/page-header';
import {
  getAllProductsColorsHandler,
  getAllProductsHandler,
} from 'actions/products';
import { getAllCategoriesHandler } from 'actions/category';
import { getAllSubCategoriesHandler } from 'actions/sub-category';

const BrowsePage = ({ products, categories, subCategories }) => {
  return (
    <>
      <PageHeader title={'ShopPay - Browse'} content={'ShopPay Browse page'} />
      <BrowsePageComponent />
    </>
  );
};

export async function getServerSideProps(context) {
  const { err: getAllProductsError, data: getAllProductsData } =
    await getAllProductsHandler();

  if (getAllProductsError) {
    console.log(getAllProductsError);
    return {
      redirect: {
        destination: '/',
      },
    };
  }

  const { err: getAllCategoriesError, data: getAllCategoriesData } =
    await getAllCategoriesHandler();

  if (getAllCategoriesError) {
    console.log(getAllCategoriesError);
    return {
      redirect: {
        destination: '/',
      },
    };
  }

  const { err: getAllSubCategoriesError, data: getAllSubCategoriesData } =
    await getAllSubCategoriesHandler();

  if (getAllSubCategoriesError) {
    console.log(getAllSubCategoriesError);
    return {
      redirect: {
        destination: '/',
      },
    };
  }

  const { err: getAllProductsColorsError, data: getAllProductsColorsData } =
    await getAllProductsColorsHandler();

  if (getAllProductsColorsError) {
    console.log(getAllProductsColorsError);
    return {
      redirect: {
        destination: '/',
      },
    };
  }

  return {
    props: {
      products: getAllProductsData?.data?.data,
      categories: getAllCategoriesData?.data?.data,
      subCategories: getAllSubCategoriesData?.data?.data,
      colors: getAllProductsColorsData?.data?.data,
    },
  };
}

export default BrowsePage;
