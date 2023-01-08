/* eslint-disable @next/next/no-img-element */
import { Rating } from '@mui/material';
import { AiOutlineLike } from 'react-icons/ai';
import styles from '../../styles.module.scss';

const SingleProductComponentReviewsTableReview = ({ review }) => {
  return (
    <div className={styles.review}>
      <div className={styles.flex}>
        <div className={styles.review__user}>
          <h4>
            {review?.reviewBy?.name.slice(0, 1)}***
            {review?.reviewBy?.name.slice(
              review?.reviewBy?.name?.length - 1,
              review?.reviewBy?.name.length
            )}
          </h4>
          <img src={review?.reviewBy?.image} alt="image" />
        </div>
        <div className={styles.review__review}>
          <Rating
            name="half-rating-read"
            defaultValue={review?.rating}
            readOnly
            style={{ color: '#facf19' }}
          />
          <p>{review?.review}</p>
          <p>
            <span>Overall Fit:</span>
            {review?.fit}
            &nbsp;&nbsp;
            <span>Size:</span>
            {review?.size}
            &nbsp;&nbsp;
            <div className={styles.d_flex}>
              <img
                src={review?.style?.image}
                alt="image"
                className={styles.review__img}
              />
            </div>
          </p>
        </div>
      </div>
      <div className={styles.flex}>
        <div className={styles.review__images}>
          {review?.images?.length > 0 &&
            review?.images?.map((img, i) => (
              <img key={i} src={img?.url} alt="image" />
            ))}
        </div>
        <div className={styles.review__extra}>
          <div className={styles.review__extra_likes}>
            {review?.likes && review?.likes?.likes}
            <AiOutlineLike />
          </div>
          <div className={styles.review__extra_date}>
            {review?.updatedAt?.slice(0, 10)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductComponentReviewsTableReview;
