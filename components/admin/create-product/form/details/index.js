import { IoAddCircle, IoRemoveCircle } from 'react-icons/io5';
import AdminCreateProductPageComponentFormDetailsInput from './input';
import styles from '../sizes/styles.module.scss';
const AdminCreateProductPageComponentFormDetails = ({
  details,
  product,
  setProduct,
}) => {
  const handleChange = (i, e) => {
    const {
      target: { name, value },
    } = e;
    const values = [...details];
    values[i][name] = value;
    setProduct({ ...product, details: values });
  };

  const handleRemove = (i) => {
    if (details?.length > 0) {
      const values = [...details];
      values.splice(i, 1);
      setProduct({ ...product, details: values });
    }
  };

  const handleAdd = () => {
    setProduct({
      ...product,
      details: [
        ...details,
        {
          name: '',
          value: '',
        },
      ],
    });
  };

  return (
    <div>
      <div className={styles.header}>Details</div>
      {details?.length === 0 && (
        <IoAddCircle onClick={handleAdd} className={styles.svgIcon} />
      )}
      {details &&
        details?.map((el, i) => (
          <div key={i} className={styles.wrp}>
            <AdminCreateProductPageComponentFormDetailsInput
              handleChange={handleChange}
              i={i}
              name="name"
              placeholder={'Name'}
              value={el?.name}
            />
            <AdminCreateProductPageComponentFormDetailsInput
              handleChange={handleChange}
              i={i}
              name="value"
              placeholder={'Value'}
              value={el?.value}
            />
            <IoRemoveCircle onClick={() => handleRemove(i)} />
            <IoAddCircle onClick={handleAdd} />
          </div>
        ))}
    </div>
  );
};

export default AdminCreateProductPageComponentFormDetails;
