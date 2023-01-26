import CreateProductColorsImagesHeader from 'components/admin/shared/header/create-product-colors-images';
import { useField } from 'formik';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { showDialog } from 'store/slices/dialogSlice';
import AdminCreateProductPageComponentFormImagesAddButton from '../images/add-button';
import styles from '../images/styles.module.scss';

const AdminCreateProductPageComponentFormStyle = ({
  text,
  header,
  product,
  setProduct,
  colorImage,
  ...props
}) => {
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);
  const [field, meta] = useField(props);

  console.log({ product });

  const handleChange = (e) => {
    const {
      target: { files },
    } = e;

    let img = files[0];

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
      return;
    } else {
      const reader = new FileReader();
      reader.readAsDataURL(img);
      reader.onload = (e) => {
        const obj = {
          color: product?.color?.color,
          image: e.target.result,
        };
        setProduct({ ...product, color: obj });
      };
    }
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
        accept="image/jpeg,image/png,image/webp,image/jpg"
        onChange={handleChange}
      />

      <AdminCreateProductPageComponentFormImagesAddButton
        style={true}
        fileInputRef={fileInputRef}
        text={text}
      />
    </div>
  );
};

export default AdminCreateProductPageComponentFormStyle;
