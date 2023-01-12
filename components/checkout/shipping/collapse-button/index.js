import { IoAddOutline, IoCaretUpCircleOutline } from 'react-icons/io5';
import styles from '../styles.module.scss';

const CheckoutPageComponentShippingCollapseButton = ({
  isVisible,
  setIsVisible,
}) => {
  return (
    <button
      className={styles.hide_show}
      onClick={() => setIsVisible(!isVisible)}
    >
      {isVisible ? (
        <span>
          <IoCaretUpCircleOutline style={{ fontSize: '2rem', color: '#222' }} />
        </span>
      ) : (
        <span>
          Add new Address
          <IoAddOutline />
        </span>
      )}
    </button>
  );
};

export default CheckoutPageComponentShippingCollapseButton;
