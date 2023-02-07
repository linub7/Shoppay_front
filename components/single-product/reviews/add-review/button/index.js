import CustomBounceLoader from 'components/shared/loaders/custom-bounce-loader';
import styles from '../../styles.module.scss';

const SingleProductComponentReviewsAddReviewButton = ({
  handleSubmitReview,
  loading,
}) => {
  return (
    <button
      className={`${styles.login_btn} ${loading ? styles.disabled : ''}`}
      onClick={handleSubmitReview}
      disabled={loading}
    >
      {loading ? <CustomBounceLoader loading={loading} /> : 'Submit Review'}
    </button>
  );
};

export default SingleProductComponentReviewsAddReviewButton;
