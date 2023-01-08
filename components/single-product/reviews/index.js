import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import SingleProductComponentReviewsAddReview from './add-review';
import SingleProductComponentReviewsStatsOverview from './stats-overview';
import SingleProductComponentReviewsStatsReviews from './stats-reviews';
import styles from './styles.module.scss';

const SingleProductComponentReviews = ({ product }) => {
  const { token } = useSelector((state) => state?.auth);
  const router = useRouter();
  return (
    <div className={styles.reviews}>
      <div className={styles.reviews__container}>
        <h1>Customer Reviews ({product?.reviews?.length})</h1>
        <div className={styles.reviews__stats}>
          <SingleProductComponentReviewsStatsOverview product={product} />
          <SingleProductComponentReviewsStatsReviews product={product} />
        </div>
        {token ? (
          <SingleProductComponentReviewsAddReview product={product} />
        ) : (
          <button
            onClick={() =>
              // TODO: go to signin page and fix routing Fn after signing in to exact page
              router.push('/auth/signin', { query: { path: router.pathname } })
            }
            className={styles.login_btn}
          >
            Login to add a review
          </button>
        )}
      </div>
    </div>
  );
};

export default SingleProductComponentReviews;
