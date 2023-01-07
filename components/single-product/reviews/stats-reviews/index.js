import { Rating } from '@mui/material';
import styles from '../styles.module.scss';

const SingleProductComponentReviewsStatsReviews = ({ product }) => {
  return (
    <div className={styles.reviews__stats_reviews}>
      {product?.ratings.map((rating, i) => (
        <div key={i} className={styles.reviews__stats_reviews_review}>
          <Rating
            name="half-rating-read"
            defaultValue={5 - i}
            precision={0.5}
            readOnly
            style={{ color: '#FACF19' }}
          />
          <div className={styles.bar}>
            <div
              className={styles.bar__inner}
              style={{ width: `${rating?.percentage}%` }}
            ></div>
          </div>
          <span>{rating?.percentage}%</span>
        </div>
      ))}
    </div>
  );
};

export default SingleProductComponentReviewsStatsReviews;
