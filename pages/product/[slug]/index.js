import { getSingleProductHandler } from 'actions/products';
import CommonLayout from 'components/shared/layout/CommonLayout';
import SingleProductPageComponent from 'components/single-product';

const SingleProductPage = ({ product }) => {
  return (
    <CommonLayout
      pageHeaderTitle={product?.name}
      pageHeaderContent={product?.description}
    >
      <SingleProductPageComponent product={product} />
    </CommonLayout>
  );
};

export async function getServerSideProps(context) {
  const {
    query: { slug, style, size },
  } = context;

  const { err: getSingleProductError, data: getSingleProductData } =
    await getSingleProductHandler(slug, '', '');
  if (getSingleProductError) {
    console.log(getSingleProductError);
    return {
      props: {},
    };
  }

  const product = getSingleProductData?.data?.data;
  const subProduct = product?.subProducts[style];
  const prices = subProduct?.sizes?.map((s) => s.price).sort((a, b) => a - b);

  let newProduct = {
    ...product,
    style,
    images: subProduct?.images,
    sizes: subProduct?.sizes,
    discount: subProduct?.discount,
    sku: subProduct?.sku,
    colors: product?.subProducts?.map((prod) => prod.color),
    priceRange: subProduct?.discount
      ? `From ${(prices[0] - prices[0] / subProduct?.discount).toFixed(
          2
        )}$ to ${(
          prices[prices.length - 1] -
          prices[prices.length - 1] / subProduct?.discount
        ).toFixed(2)}$`
      : `From ${prices[0]}$ to ${prices[prices.length - 1]}$`,
    price:
      subProduct?.discount > 0
        ? (
            subProduct?.sizes[size]?.price -
            subProduct?.sizes[size]?.price / subProduct?.discount
          ).toFixed(2)
        : subProduct?.sizes[size]?.price,
    priceBefore: subProduct?.sizes[size]?.price,
    quantity: subProduct?.sizes[size]?.qty,
    ratings: [
      { percentage: 76 },
      { percentage: 14 },
      { percentage: 6 },
      { percentage: 4 },
    ],
    reviews: product?.reviews.reverse(),
    allSizes: product?.subProducts
      ?.map((prod) => prod.sizes)
      .flat()
      .sort((a, b) => a.size - b.size)
      .filter(
        (element, index, array) =>
          array.findIndex((element2) => element2.size === element.size) ===
          index
      ),
  };

  return {
    props: {
      product: newProduct,
    },
  };
}

export default SingleProductPage;
