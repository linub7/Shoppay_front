import { IoBag, IoHeartOutline } from 'react-icons/io5';
import styles from '../styles.module.scss';

const SingleProductComponentInfosActions = ({ product }) => {
  return (
    <div className={styles.infos__actions}>
      <button
        disabled={product?.quantity < 1}
        style={{
          cursor: `${product?.quantity < 1 ? 'not-allowed' : ''}`,
        }}
      >
        <IoBag />
        <b>Add to Cart</b>
      </button>
      <button>
        <IoHeartOutline />
        Wishlist
      </button>
    </div>
  );
};

export default SingleProductComponentInfosActions;
