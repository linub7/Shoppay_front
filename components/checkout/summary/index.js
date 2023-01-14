import { applyCouponHandler } from 'actions/coupon';
import { toast } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';
import CheckoutPageComponentSummaryForm from './form';
import CheckoutPageComponentSummaryHeader from './header';
import styles from './styles.module.scss';
import CheckoutPageComponentSummarySubmitButton from './submit-button';

const CheckoutPageComponentSummary = ({
  totalAfterDiscount,
  setTotalAfterDiscount,
  user,
  cart,
  paymentMethod,
  selectedAddress,
}) => {
  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState('');

  const { token } = useSelector((state) => state.auth);

  const validateCoupon = Yup.object({
    coupon: Yup.string().required('Please enter a coupon first'),
  });

  const handleApplyCoupon = async () => {
    const { err, data } = await applyCouponHandler(coupon, token);
    if (err) {
      console.log(err);
      toast.error(err);
      return;
    }
    setTotalAfterDiscount(data?.data?.data?.totalAfterDiscount);
    setDiscount(data?.data?.data?.discount);
  };

  const handlePlaceOrder = (params) => {};

  return (
    <div className={styles.summary}>
      <CheckoutPageComponentSummaryHeader />
      <CheckoutPageComponentSummaryForm
        coupon={coupon}
        setCoupon={setCoupon}
        validateCoupon={validateCoupon}
        handleSubmit={handleApplyCoupon}
        cart={cart}
        discount={discount}
        totalAfterDiscount={totalAfterDiscount}
      />
      <CheckoutPageComponentSummarySubmitButton
        handlePlaceOrder={handlePlaceOrder}
      />
    </div>
  );
};

export default CheckoutPageComponentSummary;
