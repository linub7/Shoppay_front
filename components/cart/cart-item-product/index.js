/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import {
  IoArrowForwardOutline,
  IoHeartOutline,
  IoTrashOutline,
} from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { updateCart } from 'store/slices/cartSlice';
import styles from './styles.module.scss';

const CartPageComponentCartItemProduct = ({
  product,
  selected,
  setSelected,
}) => {
  const [active, setActive] = useState();
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    const isAlreadyChecked = selected?.filter((p) => p._uid === product?._uid);
    setActive(isAlreadyChecked);
  }, [selected]);

  const updateQty = (op) => {
    let newCart = cartItems?.map((item) => {
      if (item?._uid === product?._uid) {
        return {
          ...item,
          qty: op === 'plus' ? product?.qty + 1 : product?.qty - 1,
        };
      }
      return item;
    });
    dispatch(updateCart(newCart));
  };

  const removeProductFromCart = (productUid) => {
    let newCart = cartItems?.filter((item) => item?._uid !== productUid);
    dispatch(updateCart(newCart));
  };

  const handleSelect = (product) => {
    active
      ? setSelected(selected.filter((p) => p._uid !== product._uid))
      : setSelected([...selected, product]);
  };

  return (
    <div className={`${styles.cart} ${styles.product}`}>
      {product?.quantity < 1 && <div className={styles.blue}></div>}
      <div className={styles.product__header}>
        <img src="https://imgurl.ir/uploads/y815903_store.png" alt="image" />
        {/* <img src="/images/store.png" alt="image" /> */}
        John official store
      </div>
      <div className={styles.product__image}>
        <div
          className={`${styles.checkbox} ${active ? styles.active : ''}`}
          onClick={() => handleSelect(product)}
        ></div>
        <img src={product?.images[0].url} alt="product image" />
        <div className={styles.col}>
          <div className={styles.grid}>
            <h1>
              {product?.name?.length > 20
                ? `${product?.name.substring(0, 30)}`
                : product?.name}
            </h1>
            <div style={{ zIndex: '2' }}>
              <IoHeartOutline />
            </div>
            <div
              style={{ zIndex: '2' }}
              onClick={() => removeProductFromCart(product?._uid)}
            >
              <IoTrashOutline />
            </div>
          </div>
          <div className={styles.product__style}>
            <img src={product?.color?.image} alt="color image" />
            {product?.size && <span>{product?.size}</span>}
            {product?.price && <span>{product?.price?.toFixed(2)}$</span>}
            <IoArrowForwardOutline />
          </div>
          <div className={styles.product__priceQty}>
            <div className={styles.product__priceQty_price}>
              <span className={styles.price}>
                USD {(product?.price * product?.qty).toFixed(2)}$
              </span>
              {product?.price !== product?.priceBefore && (
                <span className={styles.priceBefore}>
                  USD {product?.priceBefore}$
                </span>
              )}
              {product?.discount > 0 && (
                <span className={styles.discount}>-{product?.discount}%</span>
              )}
            </div>
            <div className={styles.product__priceQty_qty}>
              <button
                disabled={product?.qty < 2}
                onClick={() => updateQty('minus')}
              >
                -
              </button>
              <span>{product?.qty}</span>
              <button
                disabled={product?.qty === product?.quantity}
                onClick={() => updateQty('plus')}
              >
                +
              </button>
            </div>
          </div>
          <div className={styles.product__shipping}>
            {product?.shipping
              ? `+${product?.shipping}$ Shipping Fee`
              : 'Free Shipping'}
          </div>
          {product?.quantity < 1 && (
            <div className={styles.notAvailable}>
              This product is out of stock for now, Add it to your wishlist it
              may get restocked.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartPageComponentCartItemProduct;
