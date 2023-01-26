import { sizesList } from 'constants';
import { useState } from 'react';
import { IoAddCircle, IoRemoveCircle } from 'react-icons/io5';
import AdminCreateProductPageComponentFormSizesInput from './input';
import styles from './styles.module.scss';
const AdminCreateProductPageComponentFormSizes = ({
  product,
  setProduct,
  sizes,
}) => {
  const [noSize, setNoSize] = useState(false);

  const handleChange = (i, e) => {
    const {
      target: { name, value },
    } = e;
    const values = [...sizes];
    values[i][name] = value;
    setProduct({ ...product, sizes: values });
  };

  const handleRemove = (i) => {
    if (sizes?.length > 1) {
      const values = [...sizes];
      values.splice(i, 1);
      setProduct({ ...product, sizes: values });
    }
  };

  const handleAdd = () => {
    setProduct({
      ...product,
      sizes: [
        ...sizes,
        {
          size: '',
          qty: '',
          price: '',
        },
      ],
    });
  };

  const handleToggleButton = () => {
    if (!noSize) {
      const data = sizes?.map((item) => {
        return { qty: item.qty, price: item.price };
      });
      setProduct({ ...product, sizes: data });
    } else {
      const data = sizes?.map((item) => {
        return {
          qty: item?.qty,
          price: item?.price,
          size: item?.size || '',
        };
      });
      setProduct({ ...product, sizes: data });
    }
    setNoSize(!noSize);
  };

  return (
    <div>
      <div className={styles.header}>Sizes / Quantity / Price</div>
      <button
        type="button"
        className={styles.click_btn}
        onClick={handleToggleButton}
      >
        {noSize
          ? 'Click if product has size.'
          : 'Click if product has no size.'}
      </button>
      {sizes &&
        sizes?.map((el, i) => (
          <div key={i} className={styles.wrp}>
            <select
              name="size"
              value={noSize ? '' : el.size}
              disabled={noSize}
              style={{ display: `${noSize ? 'none' : ''}` }}
              onChange={(e) => handleChange(i, e)}
            >
              <option value="">Select a size</option>
              {sizesList?.map((sl, j) => (
                <option key={j} value={sl}>
                  {sl}
                </option>
              ))}
            </select>
            <AdminCreateProductPageComponentFormSizesInput
              name="qty"
              placeholder={noSize ? 'Product Quantity' : 'Size Quantity'}
              min={1}
              value={el?.qty}
              handleChange={handleChange}
              i={i}
            />
            {/* <input
              type="number"
              name="qty"
              placeholder={noSize ? 'Product Quantity' : 'Size Quantity'}
              min={1}
              value={el?.qty}
              onChange={(e) => handleChange(i, e)}
            /> */}
            {/* <input
              type="number"
              name="price"
              placeholder={noSize ? 'Product Price' : 'Size Price'}
              min={1}
              value={el?.price}
              onChange={(e) => handleChange(i, e)}
            /> */}
            <AdminCreateProductPageComponentFormSizesInput
              name="price"
              placeholder={noSize ? 'Product Price' : 'Size Price'}
              min={1}
              value={el?.price}
              handleChange={handleChange}
              i={i}
            />
            {!noSize && (
              <>
                <IoRemoveCircle onClick={() => handleRemove(i)} />
                <IoAddCircle onClick={handleAdd} />
              </>
            )}
          </div>
        ))}
    </div>
  );
};

export default AdminCreateProductPageComponentFormSizes;
