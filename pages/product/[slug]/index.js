import { getSingleProductHandler } from 'actions/products';
import CommonLayout from 'components/shared/layout/CommonLayout';
import SingleProductPageComponent from 'components/single-product';

const SingleProductPage = ({ product }) => {
  return (
    <CommonLayout>
      <SingleProductPageComponent />
    </CommonLayout>
  );
};

export async function getServerSideProps(context) {
  const {
    query: { slug, style, size },
  } = context;

  const { err: getSingleProductError, data: getSingleProductData } =
    await getSingleProductHandler(slug);
  if (getSingleProductError) {
    console.log(getSingleProductError);
    return {
      props: {},
    };
  }

  const product = getSingleProductData?.data?.data;
  const subProduct = product.subProducts[style];
  const prices = subProduct.sizes.map((s) => s.price).sort((a, b) => a - b);

  let newProduct = {
    ...product,
    images: subProduct?.images,
    sizes: subProduct?.sizes,
    discount: subProduct?.discount,
    sku: subProduct?.sku,
    colors: product?.subProducts?.map((prod) => prod.color),
    priceRange:
      prices?.length > 1
        ? `From ${prices[0]}$ to ${prices[prices.length - 1]}$`
        : '',
    price:
      subProduct?.discount > 0
        ? (
            subProduct?.sizes[size].price -
            subProduct?.sizes[size].price / subProduct?.discount
          ).toFixed(2)
        : subProduct.sizes[size].price,
    priceBefore: subProduct?.sizes[size].price,
    quantity: subProduct?.sizes[size].qty,
  };

  return {
    props: {
      product: newProduct,
    },
  };
}

export default SingleProductPage;
