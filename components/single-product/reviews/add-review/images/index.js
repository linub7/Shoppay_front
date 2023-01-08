/* eslint-disable @next/next/no-img-element */
import { useRef } from 'react';
import { toast } from 'react-hot-toast';
import { IoRemoveCircleOutline } from 'react-icons/io5';
import styles from '../../styles.module.scss';

const SingleProductComponentReviewsAddReviewImages = ({
  images,
  setImages,
}) => {
  const inputRef = useRef(null);

  const handleChangeImages = (e) => {
    let files = Array.from(e.target.files);
    files.forEach((img, i) => {
      if (images.length === 3 || i === 2) {
        toast.error('Maximum 3 images are allowed.');
        return;
      }
      if (
        img.type !== 'image/jpeg' &&
        img.type !== 'image/png' &&
        img.type !== 'image/webp'
      ) {
        toast.error(
          `${img.name} format is unsupported! Only JPEG, PNG and WEBP are allowed.`
        );
        files = files.filter((file) => file.name !== img.name);
        return;
        // 5Mb : 1024 * 1024 * 5
      } else if (img.size > 1024 * 1024 * 5) {
        toast.error(`${img.name} size is too large, max 5Mb allowed.`);
        files = files.filter((file) => file.name !== img.name);
        return;
      } else {
        const reader = new FileReader();
        reader.readAsDataURL(img);
        reader.onload = (e) => {
          setImages((images) => [...images, e.target.result]);
        };
      }
    });
  };

  const handleRemoveImage = (img) =>
    setImages((images) => images.filter((image) => image !== img));

  return (
    <div>
      <input
        type="file"
        ref={inputRef}
        hidden
        onChange={handleChangeImages}
        multiple
        accept="image/png,image/jpeg,image/webp"
      />
      <button
        className={styles.login_btn}
        style={{ width: '150px' }}
        onClick={() => inputRef.current.click()}
      >
        Add Images
      </button>
      <div className={styles.imgs_wrap}>
        {images?.length > 0 &&
          images?.map((img, i) => (
            <span key={i}>
              <IoRemoveCircleOutline onClick={() => handleRemoveImage(img)} />
              <img src={img} alt="image" />
            </span>
          ))}
      </div>
    </div>
  );
};

export default SingleProductComponentReviewsAddReviewImages;
