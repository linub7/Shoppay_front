import { deleteCouponHandler, updateCouponHandler } from 'actions/coupon';
import CustomDateLocalizationProvider from 'components/shared/custom-date-localization-provider';
import { useRef, useState } from 'react';
import { toast } from 'react-hot-toast';
import { IoPencil, IoTrash } from 'react-icons/io5';
import styles from '../../styles.module.scss';

const AdminCouponsPageComponentListItem = ({
  coupon,
  token,
  setCoupons,
  couponsData,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [enteredCoupon, setEnteredCoupon] = useState(coupon?.coupon);
  const [discount, setDiscount] = useState(coupon?.discount);
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const [startDate, setStartDate] = useState(coupon?.startDate || new Date());
  const [endDate, setEndDate] = useState(coupon?.endDate || tomorrow);
  const inputRef = useRef(null);

  const handleStartDate = (newValue) => setStartDate(newValue);
  const handleEndDate = (newValue) => setEndDate(newValue);

  const handleUpdateCoupon = async (id) => {
    if (startDate.toString() === endDate.toString())
      return toast.error('Start Date and End Date can not be same ⚠️.');

    if (discount < 1 || discount > 99)
      return toast.error('Discount must be between 1 and 99 ⚠️.');

    const { err, data } = await updateCouponHandler(
      id,
      enteredCoupon,
      startDate,
      endDate,
      discount,
      token
    );
    if (err) {
      console.log(err);
      toast.error(err);
      return;
    }
    toast.success('Coupon updated Successfully 👍.');
    const filteredCouponArray = couponsData?.filter(
      (coupon) => coupon?._id !== id
    );
    setCoupons([...filteredCouponArray, data?.data?.data]);
    setEnteredCoupon(data?.data?.data?.coupon);
    setDiscount(data?.data?.data?.discount);
    setStartDate(data?.data?.data?.startDate);
    setEndDate(data?.data?.data?.endDate);
    setIsOpen(false);
  };

  const handleDeleteCoupon = async (id) => {
    if (window.confirm('Are you sure?')) {
      const { err, data } = deleteCouponHandler(id, token);
      if (err) {
        console.log(err);
        toast.error(err);
        return;
      }
      toast.success('Coupon deleted Successfully 👍.');
      const filteredCouponArray = couponsData?.filter(
        (coupon) => coupon?._id !== id
      );
      setCoupons(filteredCouponArray);
      setIsOpen(false);
    }
  };
  return (
    <li className={styles.list__item}>
      <input
        className={isOpen ? styles.open : ''}
        type="text"
        value={enteredCoupon ? enteredCoupon : coupon?.coupon}
        onChange={(e) => setEnteredCoupon(e.target.value)}
        disabled={!isOpen}
        ref={inputRef}
      />
      {isOpen && (
        <div className={styles.list__item_expand}>
          <input
            className={isOpen ? styles.open : ''}
            type="number"
            value={discount ? discount : coupon?.discount}
            onChange={(e) => setDiscount(e.target.value)}
            disabled={!isOpen}
            ref={inputRef}
          />
          <CustomDateLocalizationProvider
            startDate={startDate}
            handleStartDate={handleStartDate}
            endDate={endDate}
            handleEndDate={handleEndDate}
            tomorrow={tomorrow}
          />
          <button
            className={styles.btn}
            onClick={() => handleUpdateCoupon(coupon?._id)}
          >
            Save
          </button>
          <button
            className={styles.btn}
            onClick={() => {
              setIsOpen(false);
              setEnteredCoupon('');
              setDiscount(0);
              setStartDate(coupon?.startDate);
              setEndDate(coupon?.endDate);
            }}
          >
            Cancel
          </button>
        </div>
      )}
      <div className={styles.list__items_actions}>
        {!isOpen && (
          <IoPencil
            onClick={() => {
              setIsOpen(true);
            }}
          />
        )}
        <IoTrash onClick={() => handleDeleteCoupon(coupon?._id)} />
      </div>
    </li>
  );
};

export default AdminCouponsPageComponentListItem;
