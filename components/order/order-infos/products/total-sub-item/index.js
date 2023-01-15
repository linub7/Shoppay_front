import styles from '../../../styles.module.scss';

const UserOrderPageComponentOrderInfosProductsTotalSubItem = ({
  children,
  lastChild = false,
}) => {
  return (
    <div
      className={`${styles.order__products_total_sub} ${
        lastChild ? styles.borderTop : ''
      }`}
    >
      {children}
    </div>
  );
};

export default UserOrderPageComponentOrderInfosProductsTotalSubItem;
