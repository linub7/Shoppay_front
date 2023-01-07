import { IoAddOutline, IoRemoveOutline } from 'react-icons/io5';
import styles from '../styles.module.scss';

const SingleProductComponentInfosQty = ({ setQty, qty, product }) => {
  return (
    <div className={styles.qty}>
      <button onClick={() => qty > 1 && setQty((prev) => prev - 1)}>
        <IoRemoveOutline />
      </button>
      <span>{qty}</span>
      <button
        onClick={() => qty < product?.quantity && setQty((prev) => prev + 1)}
      >
        <IoAddOutline />
      </button>
    </div>
  );
};

export default SingleProductComponentInfosQty;
