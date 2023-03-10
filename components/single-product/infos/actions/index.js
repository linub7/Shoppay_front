import { toast } from 'react-hot-toast';
import { IoBag, IoHeartOutline } from 'react-icons/io5';
import styles from '../styles.module.scss';

const SingleProductComponentInfosActions = ({
  handleAddToCart,
  handleAddToWishlist,
  token,
}) => {
  return (
    <div className={styles.infos__actions}>
      <button
        disabled={product?.quantity < 1}
        style={{
          cursor: `${product?.quantity < 1 ? 'not-allowed' : ''}`,
        }}
        onClick={handleAddToCart}
      >
        <IoBag />
        <b>Add to Cart</b>
      </button>
      {token && (
        <button onClick={handleAddToWishlist}>
          <IoHeartOutline />
          Wishlist
        </button>
      )}
    </div>
  );
};

export default SingleProductComponentInfosActions;
