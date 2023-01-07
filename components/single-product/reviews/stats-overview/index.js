import { Rating } from '@mui/material';
import styles from '../styles.module.scss';

const SingleProductComponentReviewsStatsOverview = ({ product }) => {
  return (
    <div className={styles.reviews__stats_overview}>
      <span>Average Rating</span>
      <div className={styles.reviews__stats_overview_rating}>
        <Rating
          name="half-rating-read"
          defaultValue={product?.rating}
          precision={0.5}
          readOnly
          style={{ color: '#FACF19' }}
        />
        {product?.rating === 0 ? 'No reviews yet.' : product?.rating}
      </div>
    </div>
  );
};

export default SingleProductComponentReviewsStatsOverview;
