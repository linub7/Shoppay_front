import ShippingInput from 'components/shared/inputs/shipping-input';
import { Form, Formik } from 'formik';
import styles from '../styles.module.scss';

const CheckoutPageComponentSummaryForm = ({
  coupon,
  validateCoupon,
  handleSubmit,
  setCoupon,
  discount,
  cart,
  totalAfterDiscount,
}) => {
  return (
    <div className={styles.coupon}>
      <Formik
        enableReinitialize
        initialValues={{ coupon }}
        validationSchema={validateCoupon}
        onSubmit={handleSubmit}
      >
        {(form) => (
          <Form>
            <ShippingInput
              name={'coupon'}
              placeholder={'Coupon'}
              onChange={(e) => setCoupon(e.target.value)}
              value={coupon}
            />
            <button type="submit">Apply This Coupon</button>
            <div className={styles.infos}>
              <span>
                Total:
                <b>{cart?.total}</b>
              </span>
              {discount > 0 && (
                <span className={styles.coupon_span}>
                  Coupon applied: <b>-{discount}%</b>
                </span>
              )}
              {totalAfterDiscount < cart?.cartTotal &&
                totalAfterDiscount !== '' && (
                  <span>
                    New Price: <b>{totalAfterDiscount}$</b>
                  </span>
                )}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CheckoutPageComponentSummaryForm;
