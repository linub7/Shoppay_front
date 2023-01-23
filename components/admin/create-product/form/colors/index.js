/* eslint-disable @next/next/no-img-element */
import CreateProductColorsImagesHeader from 'components/admin/shared/header/create-product-colors-images';
import { useField } from 'formik';
import { useState } from 'react';
import { ColorExtractor } from 'react-color-extractor';
import { IoArrowUpCircleOutline } from 'react-icons/io5';
import styles from './styles.module.scss';

const AdminCreateProductPageComponentFormColors = ({
  product,
  setProduct,
  colorImage,
  ...props
}) => {
  const [field, meta] = useField(props);
  const [toggle, setToggle] = useState(false);
  const [colors, setColors] = useState([]);

  const renderSwatches = () => {
    return colors.map((color, i) => (
      <div
        key={i}
        className={styles.square__color}
        style={{ backgroundColor: `${color}`, cursor: 'pointer' }}
        onClick={() =>
          setProduct({
            ...product,
            color: { color, image: product?.color?.image },
          })
        }
      >
        {color}
      </div>
    ));
  };

  return (
    <div className={styles.colors}>
      <CreateProductColorsImagesHeader
        field={field}
        meta={meta}
        header={'Pick a Product Color'}
      />
      <input
        type="text"
        name={field.name}
        value={product?.color?.color}
        hidden
        {...field}
        {...props}
      />
      <div className={styles.colors__infos}></div>
      {colors?.length > 0 && (
        <IoArrowUpCircleOutline
          className={styles.toggle_btn}
          onClick={() => setToggle(!toggle)}
          style={{
            transform: `${toggle ? 'rotate(180deg)' : ''}`,
            cursor: 'pointer',
          }}
        />
      )}
      <div className={toggle ? styles.toggle : ''}>
        <ColorExtractor getColors={(colors) => setColors(colors)}>
          <img src={colorImage} style={{ display: 'none' }} alt="color" />
        </ColorExtractor>
        <div className={styles.wheel}>{renderSwatches()}</div>
      </div>
    </div>
  );
};

export default AdminCreateProductPageComponentFormColors;
