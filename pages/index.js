import { getAllCategoriesHandler } from 'actions/category';
import { getAllProductsHandler } from 'actions/products';
import HomeComponent from 'components/home/HomeComponent';
import CommonLayout from 'components/shared/layout/CommonLayout';
import { useSelector } from 'react-redux';

export default function Home() {
  // const obj = useSelector((state) => state.dialog);
  // console.log(obj);
  return (
    <CommonLayout
      pageHeaderTitle={'ShopPay'}
      pageHeaderContent={
        'ShopPay - online shopping service for all of your needs'
      }
    >
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
