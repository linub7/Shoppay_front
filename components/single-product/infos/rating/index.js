import { Rating } from '@mui/material';

import styles from '../styles.module.scss';

const SingleProductComponentInfosRating = ({ product }) => {
  return (
    <div className={styles.infos__rating}>
      <Rating
        name="half-rating-read"
        defaultValue={product?.rating}
        precision={0.5}
        readOnly
        style={{ color: '#FACF19' }}
      />
      {product?.numReviews} {product?.numReviews === 1 ? ' review' : ' reviews'}
    </div>
  );
};

export default SingleProductComponentInfosRating;
