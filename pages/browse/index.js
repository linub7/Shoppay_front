import BrowsePageComponent from 'components/browse';
import PageHeader from 'components/shared/page-header';
import {
  getAllProductsDetailsHandler,
  getAllProductsHandler,
} from 'actions/products';
import { getAllCategoriesHandler } from 'actions/category';
import { getAllSubCategoriesHandler } from 'actions/sub-category';
import { randomize } from 'utils/arraysUtils';

const BrowsePage = ({ products, categories, subCategories, allDetails }) => {
  return (
    <>
      <PageHeader title={'ShopPay - Browse'} content={'ShopPay Browse page'} />
      <BrowsePageComponent
        categories={categories}
        products={products}
        subCategories={subCategories}
        allDetails={allDetails}
      />
    </>
  );
};

export async function getServerSideProps(context) {
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
    await getAllProductsDetailsHandler();

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
      products: randomize(getAllProductsData?.data?.data),
      categories: getAllCategoriesData?.data?.data,
      subCategories: getAllSubCategoriesData?.data?.data,
      allDetails: getAllProductsColorsData?.data?.data,
    },
  };
}

export default BrowsePage;
