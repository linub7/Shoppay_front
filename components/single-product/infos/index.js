import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, updateCart } from 'store/slices/cartSlice';
import SingleProductComponentInfosAccordion from './accordion';
import SingleProductComponentInfosActions from './actions';
import SingleProductComponentInfosColors from './colors';
import SingleProductComponentInfosPrice from './price';
import SingleProductComponentInfosQty from './qty';
import SingleProductComponentInfosRating from './rating';
import SingleProductComponentInfosShare from './share';
import SingleProductComponentInfosShipping from './shipping';
import SingleProductComponentInfosSimilarProducts from './similar-products';
import SingleProductComponentInfosSizes from './sizes';
import styles from './styles.module.scss';

const SingleProductComponentInfos = ({ product, setActiveImg }) => {
  const { query } = useRouter();
  const [size, setSize] = useState(query?.size);
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    return () => {
      setSize('');
      setQty(1);
    };
  }, [query?.style]);

  useEffect(() => {
    qty > product?.quantity && setQty(product?.quantity);
  }, [query.size]);

  const handleAddToCart = async () => {
    if (!query.size) {
      toast.error('Please select a size');
      return;
    }
    const { err: receivedProductError, data: receivedProductData } =
      await getSingleProductHandler(product?.slug, product?.style, query?.size);
    if (receivedProductError) {
      console.log(err);
      return;
    }

    if (qty > receivedProductData?.data?.data?.quantity) {
      toast.error(
        'The Quantity you have selected is more than in stock. Try lower the Qty'
      );
      return;
    }
    if (receivedProductData?.data?.data?.quantity < 1) {
      toast.error('This product is out of stock.');
      return;
    }

    let _uid = `${receivedProductData?.data?.data?._id}_${product.style}_${query?.size}`;
    let exist = cartItems.find((item) => item._uid === _uid);
    if (exist) {
      // update
      let newCart = cartItems?.map((item) => {
        if (item?._uid === exist?._uid) {
          return { ...item, qty };
        }
        return item;
      });
      dispatch(updateCart(newCart));
    } else {
      // add to cart
      dispatch(
        addToCart({
          ...receivedProductData?.data?.data,
          qty,
          size: receivedProductData?.data?.data?.size,
          _uid,
        })
      );
    }
  };

  return (
    <div className={styles.infos}>
      <div className={styles.infos__container}>
        <h1 className={styles.infos__name}>{product?.name}</h1>
        <h2 className={styles.infos__sku}>{product?.sku}</h2>
        <SingleProductComponentInfosRating product={product} />
        <SingleProductComponentInfosPrice size={size} product={product} />
        <SingleProductComponentInfosShipping product={product} size={size} />
        <SingleProductComponentInfosSizes
          query={query}
          product={product}
          setSize={setSize}
        />
        <SingleProductComponentInfosColors
          product={product}
          query={query}
          setActiveImg={setActiveImg}
        />
        <SingleProductComponentInfosQty
          product={product}
          qty={qty}
          setQty={setQty}
        />
        <SingleProductComponentInfosActions handleAddToCart={handleAddToCart} />
        <SingleProductComponentInfosShare />
        <SingleProductComponentInfosAccordion
          details={[product?.description, ...product.details]}
        />
        <SingleProductComponentInfosSimilarProducts />
      </div>
    </div>
  );
};

export default SingleProductComponentInfos;
