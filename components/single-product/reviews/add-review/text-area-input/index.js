import styles from '../../styles.module.scss';

const SingleProductComponentReviewsAddReviewTextArea = ({
  review,
  setReview,
}) => {
  return (
    <textarea
      name="review"
      value={review}
      onChange={(e) => setReview(e.target.value)}
      placeholder={'Write your review here.'}
    />
  );
};

export default SingleProductComponentReviewsAddReviewTextArea;
