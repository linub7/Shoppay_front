/* eslint-disable @next/next/no-img-element */
import { GiExtractionOrb } from 'react-icons/gi';
import { IoScanOutline, IoTrashBinOutline } from 'react-icons/io5';
import AdminCreateProductPageComponentFormImagesItemActionButton from '../action-button';
import styles from '../styles.module.scss';

const AdminCreateProductPageComponentFormImagesItem = ({
  el,
  images,
  setImages,
}) => {
  const handleDeleteImageFromImagesArray = (el) => {
    const filteredArray = images.filter((img) => img !== el);
    setImages(filteredArray);
  };
  return (
    <div className={styles.images__main_grid_wrap}>
      <div className={styles.blur}></div>
      <img src={el} alt="image" />
      <div className={styles.images__main_grid_actions}>
        <AdminCreateProductPageComponentFormImagesItemActionButton
          onClick={() => handleDeleteImageFromImagesArray(el)}
        >
          <IoTrashBinOutline />
        </AdminCreateProductPageComponentFormImagesItemActionButton>
        <AdminCreateProductPageComponentFormImagesItemActionButton>
          <GiExtractionOrb />
        </AdminCreateProductPageComponentFormImagesItemActionButton>
        <AdminCreateProductPageComponentFormImagesItemActionButton>
          <IoScanOutline />
        </AdminCreateProductPageComponentFormImagesItemActionButton>
      </div>
    </div>
  );
};

export default AdminCreateProductPageComponentFormImagesItem;
