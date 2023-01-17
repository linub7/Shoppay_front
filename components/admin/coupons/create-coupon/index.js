import AdminSubmitButton from 'components/shared/buttons/admin-submit-button';
import AdminInput from 'components/shared/inputs/admin-input';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useRef, useState } from 'react';
import styles from './styles.module.scss';
import { createCoupon } from 'actions/coupon';
import { toast } from 'react-hot-toast';
import CustomDateLocalizationProvider from 'components/shared/custom-date-localization-provider';

const AdminCouponsPageComponentCreateCoupon = ({
  setCoupons,
  couponsData,
  token,
}) => {
  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(tomorrow);
  const inputRef = useRef(null);

  const handleStartDate = (newValue) => setStartDate(newValue);
  const handleEndDate = (newValue) => setEndDate(newValue);

  const validateCoupon = Yup.object({
    coupon: Yup.string()
      .required('Coupon name is required.')
      .min(2, 'Coupon name must be between 2 and 30 characters.')
      .max(20, 'Coupon name must be between 2 and 30 characters.')
      .matches(
        /^[A-Za-z ]+$/,
        'Numbers and special characters are not allowed.'
      ),
    discount: Yup.number()
      .required('Discount is required.')
      .min(1, 'Discount must be between 1 and 99%.')
      .max(99, 'Discount must be between 1 and 99%.'),
  });

  const handleAddCoupon = async () => {
    if (startDate.toString() === endDate.toString())
      return toast.error('Start Date and End Date can not be same ⚠️.');

    if (endDate.getTime() - startDate.getTime() < 0)
      return toast.error('End Date must be more than Start Date ⚠️.');

    const { err, data } = await createCoupon(
      coupon,
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
    toast.success('Coupon created Successfully 👍.');
    setCoupons([...couponsData, data?.data?.data]);
    setCoupon('');
    setDiscount(0);
    setStartDate(new Date());
    setEndDate(tomorrow);
    inputRef.current.blur();
  };
  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{ discount, coupon }}
        validationSchema={validateCoupon}
        onSubmit={handleAddCoupon}
      >
        {(form) => (
          <Form>
            <div className={styles.header}>Create a Coupon</div>
            <AdminInput
              inputRef={inputRef}
              type={'text'}
              label="Coupon"
              name="coupon"
              placeholder="Coupon"
              onChange={(e) => setCoupon(e.target.value)}
            />
            <AdminInput
              type={'number'}
              label="Discount"
              name="discount"
              placeholder="Discount"
              onChange={(e) => setDiscount(e.target.value)}
            />
            <div className={styles.date_picker}>
              <CustomDateLocalizationProvider
                startDate={startDate}
                handleStartDate={handleStartDate}
                endDate={endDate}
                handleEndDate={handleEndDate}
                tomorrow={tomorrow}
              />
            </div>
            <AdminSubmitButton btnTitle={'Add Coupon'} />
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AdminCouponsPageComponentCreateCoupon;
