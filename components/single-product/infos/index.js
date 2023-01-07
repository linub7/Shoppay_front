import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
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

  useEffect(() => {
    return () => {
      setSize('');
      setQty(1);
    };
  }, [query?.style]);

  useEffect(() => {
    qty > product?.quantity && setQty(product?.quantity);
  }, [query.size]);

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
        <SingleProductComponentInfosActions product={product} />
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
