import SingleProductComponentReviewsStatsOverview from './stats-overview';
import SingleProductComponentReviewsStatsReviews from './stats-reviews';
import styles from './styles.module.scss';

const SingleProductComponentReviews = ({ product }) => {
  return (
    <div className={styles.reviews}>
      <div className={styles.reviews__container}>
        <h1>Customer Reviews ({product?.reviews?.length})</h1>
        <div className={styles.reviews__stats}>
          <SingleProductComponentReviewsStatsOverview product={product} />
          <SingleProductComponentReviewsStatsReviews product={product} />
        </div>
      </div>
    </div>
  );
};

export default SingleProductComponentReviews;
