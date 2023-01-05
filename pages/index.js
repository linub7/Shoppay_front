import { getAllCategoriesHandler } from 'actions/category';
import { getAllProductsHandler } from 'actions/products';
import HomeComponent from 'components/home/HomeComponent';
import CommonLayout from 'components/shared/layout/CommonLayout';

export default function Home() {
  return (
    <CommonLayout>
      <HomeComponent />
    </CommonLayout>
  );
}

// export async function getServerSideProps() {
//   const { err, data } = await getAllProductsHandler();
//   const { err, data } = await getAllCategoriesHandler();

//   if (err) {
//     console.log(err);
//     return {
//       props: {},
//     };
//   }

//   return {
//     props: {
//       products: data?.data?.data,
//       categories: data?.data?.data,
//     },
//   };
// }
