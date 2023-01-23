import styles from '../styles.module.scss';

const AdminCreateProductPageComponentFormImagesAddButton = ({
  images,
  fileInputRef,
  text,
}) => {
  return (
    <button
      type="button"
      disabled={images.length === 6}
      style={{ opacity: `${images.length === 6 ? '0.5' : ''}` }}
      onClick={() => fileInputRef.current.click()}
      className={styles.images__main_btn}
    >
      {text}
    </button>
  );
};

export default AdminCreateProductPageComponentFormImagesAddButton;
