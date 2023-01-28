/* eslint-disable @next/next/no-img-element */
import CreateProductColorsImagesHeader from 'components/admin/shared/header/create-product-colors-images';
import { ErrorMessage, useField } from 'formik';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { showDialog } from 'store/slices/dialogSlice';
import AdminCreateProductPageComponentFormImagesAddButton from './add-button';
import AdminCreateProductPageComponentFormImagesItem from './item';
import styles from './styles.module.scss';

const AdminCreateProductPageComponentFormImages = ({
  header,
  text,
  images,
  setImages,
  setColorImage,
  ...props
}) => {
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);
  const [field, meta] = useField(props);

  const handleChange = (e) => {
    const {
      target: { files },
    } = e;

    let filesArray = Array.from(files);
    filesArray.forEach((img, i) => {
      if (images.length === 6) {
        dispatch(
          showDialog({
            header: 'Maximum 6 images are allowed.',
            msgs: [
              {
                msg: `Maximum of total 6 images are allowed.`,
                type: 'error',
              },
            ],
          })
        );
        return;
      }

      if (
        img.type !== 'image/jpeg' &&
        img.type !== 'image/jpg' &&
        img.type !== 'image/png' &&
        img.type !== 'image/webp'
      ) {
        dispatch(
          showDialog({
            header: 'Unsupported format',
            msgs: [
              {
                msg: `${img.name} format is unsupported! Only jpg, jpeg, webp and png are allowed.`,
                type: 'error',
              },
            ],
          })
        );
        filesArray = filesArray.filter((el) => el.name !== img.name);
        return;
      } else if (img.size > 1024 * 1024 * 2) {
        dispatch(
          showDialog({
            header: 'Maximum image size is 2Mb.',
            msgs: [
              {
                msg: `${img.name} is larger than 2Mb.`,
                type: 'error',
              },
            ],
          })
        );
        filesArray = filesArray.filter((el) => el.name !== img.name);
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
  return (
    <div className={styles.images}>
      <CreateProductColorsImagesHeader
        field={field}
        meta={meta}
        header={header}
      />
      <input
        type="file"
        name={field.name}
        ref={fileInputRef}
        hidden
        multiple
        accept="image/jpeg,image/png,image/webp,image/jpg"
        onChange={handleChange}
      />
      <div className={styles.images__main}>
        <div
          className={`${styles.images__main_grid} ${
            images.length === 2
              ? styles.grid__two
              : images.length === 3
              ? styles.grid__three
              : images.length === 4
              ? styles.grid__four
              : images.length === 5
              ? styles.grid__five
              : images.length === 6
              ? styles.grid__six
              : ''
          }`}
        >
          {!images.length ? (
            <img src="/images/no-image.png" alt="no image" />
          ) : (
            images?.map((el, i) => (
              <AdminCreateProductPageComponentFormImagesItem
                key={i}
                el={el}
                images={images}
                setImages={setImages}
                setColorImage={setColorImage}
              />
            ))
          )}
        </div>
      </div>
      <AdminCreateProductPageComponentFormImagesAddButton
        fileInputRef={fileInputRef}
        images={images}
        text={text}
      />
    </div>
  );
};

export default AdminCreateProductPageComponentFormImages;
