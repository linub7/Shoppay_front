/* eslint-disable @next/next/no-img-element */
import { useMediaQuery } from 'react-responsive';
import { IoArrowForwardCircleOutline } from 'react-icons/io5';
import styles from '../styles.module.scss';

const HomeCategoryCard = ({ header, products, background }) => {
  const isMedium = useMediaQuery({
    query: '(max-width: 1300px)',
  });
  const isMobile = useMediaQuery({ query: '(max-width: 550px)' });
  return (
    <div className={styles.category} style={{ background: `${background}` }}>
      <div className={styles.category__header}>
        <h1>{header}</h1>
        <IoArrowForwardCircleOutline />
      </div>
      <div className={styles.category__products}>
        {products
          ?.slice(0, isMobile ? 6 : isMedium ? 4 : 6)
          .map((product, index) => (
            <div className={styles.product} key={index}>
              <img src={product?.image} alt="product" />
            </div>
          ))}
      </div>
    </div>
  );
};

export default HomeCategoryCard;
