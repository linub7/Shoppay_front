import { useEffect, useState } from 'react';
import { compareArrays } from 'utils/arraysUtils';
import styles from './styles.module.scss';

const CartPageComponentCartHeader = ({ cartItems, selected, setSelected }) => {
  const [active, setActive] = useState();

  useEffect(() => {
    const isAlreadyChecked = compareArrays(cartItems, selected);
    setActive(isAlreadyChecked);
  }, [selected]);

  const handleSelect = () => {
    selected.length !== cartItems?.length
      ? setSelected(cartItems)
      : setSelected([]);
  };
  return (
    <div className={`${styles.cart__header} ${styles.card}`}>
      <h1>Item Summary({cartItems?.length})</h1>
      <div className={styles.flex} onClick={handleSelect}>
        <div className={`${styles.checkbox} ${active ? styles.active : ''}`}>
          <span>Select All Items</span>
        </div>
      </div>
    </div>
  );
};

export default CartPageComponentCartHeader;
