import styles from '../../styles.module.scss';

const SingleProductComponentReviewsAddReviewButton = ({
  handleSubmitReview,
}) => {
  return (
    <button className={styles.login_btn} onClick={handleSubmitReview}>
      Submit Review
    </button>
  );
};

export default SingleProductComponentReviewsAddReviewButton;
