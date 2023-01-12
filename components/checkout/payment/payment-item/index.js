/* eslint-disable @next/next/no-img-element */
import styles from '../styles.module.scss';

const CheckoutPageComponentPaymentItem = ({
  pm,
  paymentMethod,
  setPaymentMethod,
}) => {
  return (
    <label
      htmlFor={pm?.id}
      className={styles.payment__item}
      onClick={() => setPaymentMethod(pm?.id)}
      style={{ background: `${paymentMethod === pm?.id ? '#f5f5f5' : ''}` }}
    >
      <input
        type="radio"
        name="payment"
        id={pm?.id}
        checked={paymentMethod === pm?.id}
      />
      <img src={`/images/checkout/${pm?.img}.png`} alt={pm?.name} />
      <div className={styles.payment__item_col}>
        <span>Pay with {pm?.name}</span>
        <p>
          {pm?.images?.length > 0
            ? pm?.images?.map((pmImg, j) => (
                <img
                  key={j}
                  alt="images"
                  src={`/images/payment/${pmImg}.png`}
                />
              ))
            : pm?.description}
        </p>
      </div>
    </label>
  );
};

export default CheckoutPageComponentPaymentItem;
