/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { IoFlashOutline } from 'react-icons/io5';
import styles from '../../styles.module.scss';

const FlashDealsSwiperOffersCard = ({ product }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__img}>
        <Link href={product?.link}>
          <img src={product?.image} alt="" />
        </Link>
        <div className={styles.flash}>
          <IoFlashOutline />
          <span>-{product?.discount}%</span>
        </div>
      </div>
      <div className={styles.card__price}>
        <span>
          USD{(product?.price - product?.price / product?.discount).toFixed(2)}$
        </span>
        <span>
          -USD{' '}
          {(
            product?.price -
            (product?.price - product?.price / product?.discount)
          ).toFixed(2)}
          $
        </span>
      </div>
      <div className={styles.card__bar}>
        <div className={styles.card__bar_inner} style={{ width: '75%' }}></div>
      </div>
      <div className={styles.card__percentage}>{product?.sold} %</div>
    </div>
  );
};

export default FlashDealsSwiperOffersCard;
