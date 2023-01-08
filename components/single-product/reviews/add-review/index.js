import { Rating } from '@mui/material';
import { useState } from 'react';
import SingleProductComponentReviewsSelect from '../select';
import styles from '../styles.module.scss';
import SingleProductComponentReviewsAddReviewButton from './button';
import SingleProductComponentReviewsAddReviewImages from './images';
import SingleProductComponentReviewsAddReviewTextArea from './text-area-input';

const SingleProductComponentReviewsAddReview = ({ product }) => {
  const [size, setSize] = useState('');
  const [style, setStyle] = useState('');
  const [fit, setFit] = useState();
  const [review, setReview] = useState('');
  const [rating, setRating] = useState();
  const [images, setImages] = useState([]);

  let fits = ['Small', 'True to size', 'Large'];
  return (
    <div className={styles.reviews__add}>
      <div className={styles.reviews__add_wrap}>
        <div className={styles.d_flex} style={{ gap: '10px' }}>
          <SingleProductComponentReviewsSelect
            property={size}
            text={'Size'}
            options={product?.allSizes?.filter((prod) => prod.size !== size)}
            handleChange={setSize}
          />

          <SingleProductComponentReviewsSelect
            property={style}
            text={'Style'}
            options={product?.colors?.filter((clr) => clr !== style)}
            handleChange={setStyle}
          />

          <SingleProductComponentReviewsSelect
            property={fit}
            text={'How does it fit'}
            options={fits.filter((ft) => ft !== fit)}
            handleChange={setFit}
          />
        </div>
        <SingleProductComponentReviewsAddReviewImages
          images={images}
          setImages={setImages}
        />
        <SingleProductComponentReviewsAddReviewTextArea
          review={review}
          setReview={setReview}
        />
        <Rating
          name="half-rating-read"
          defaultValue={0}
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          precision={0.5}
          style={{ color: `#facf19`, fontSize: '3rem' }}
        />
        <SingleProductComponentReviewsAddReviewButton />
      </div>
    </div>
  );
};

export default SingleProductComponentReviewsAddReview;
