import { Rating } from '@mui/material';
import DialogModal from 'components/shared/modals/dialog';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideDialog, showDialog } from 'store/slices/dialogSlice';
import SingleProductComponentReviewsSelect from '../select';
import styles from '../styles.module.scss';
import SingleProductComponentReviewsAddReviewButton from './button';
import SingleProductComponentReviewsAddReviewImages from './images';
import SingleProductComponentReviewsAddReviewTextArea from './text-area-input';
import { v4 as uuidv4 } from 'uuid';
import { uploadProductReviewsMultiImagesHandler } from 'actions/upload-images';
import { toast } from 'react-hot-toast';
import { addReviewHandler } from 'actions/review';

const SingleProductComponentReviewsAddReview = ({ product, setReviews }) => {
  const [size, setSize] = useState('');
  const [style, setStyle] = useState('');
  const [fit, setFit] = useState();
  const [review, setReview] = useState('');
  const [rating, setRating] = useState();
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  let fits = ['Small', 'True to size', 'Large'];

  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  let uploadedImages = [];

  useEffect(() => {
    dispatch(hideDialog());
  }, []);

  const handleSubmitReview = async () => {
    setLoading(true);
    let msgs = [];
    if (!size) {
      msgs.push({ msg: 'Please select a size!', type: 'error' });
    }
    if (!style) {
      msgs.push({ msg: 'Please select a style!', type: 'error' });
    }
    if (!fit) {
      msgs.push({ msg: 'Please select a fit!', type: 'error' });
    }
    if (!rating) {
      msgs.push({ msg: 'Please select a rating!', type: 'error' });
    }
    if (!review) {
      msgs.push({ msg: 'Please write a review!', type: 'error' });
    }
    if (msgs?.length > 0) {
      dispatch(
        showDialog({ msgs, header: 'Please follow these instructions.' })
      );
    } else {
      if (images?.length > 0) {
        let tmp = images.map((el) => {
          return dataURLtoFile(el, uuidv4());
        });
        const path = 'review images';
        let formData = new FormData();
        formData.append('path', path);
        Object.values(tmp).forEach((item) => {
          formData.append('file', item);
        });
        const { err, data } = await uploadProductReviewsMultiImagesHandler(
          formData,
          token
        );
        if (err) {
          console.log(err);
          toast.error(err);
          setLoading(false);
          return;
        }
        uploadedImages = data?.data?.data;
      }

      const payload = {
        rating,
        review,
        size,
        style,
        fit,
        images: uploadedImages,
      };
      const { err, data } = await addReviewHandler(
        product?._id,
        payload,
        token
      );
      if (err) {
        console.log(err);
        toast.error(err);
        setLoading(false);
        return;
      }
      setReviews(data?.data?.data);
      setStyle('');
      setSize('');
      setFit('');
      setImages([]);
      setRating(0);
      setReview('');
      setLoading(false);
    }
  };
  return (
    <div className={styles.reviews__add}>
      <DialogModal />
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
          name="file"
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
        <SingleProductComponentReviewsAddReviewButton
          handleSubmitReview={handleSubmitReview}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default SingleProductComponentReviewsAddReview;
