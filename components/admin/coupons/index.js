import { useState } from 'react';
import { useSelector } from 'react-redux';
import AdminLayout from '../layout';
import AdminCouponsPageComponentCreateCoupon from './create-coupon';
import AdminCouponsPageComponentList from './list';
import styles from './styles.module.scss';

const AdminCouponsPageComponent = ({ coupons }) => {
  const [data, setData] = useState(coupons);
  const { token } = useSelector((state) => state.auth);

  return (
    <AdminLayout>
      <AdminCouponsPageComponentCreateCoupon
        setCoupons={setData}
        couponsData={data}
        token={token}
      />
      <AdminCouponsPageComponentList
        couponsData={data}
        setCoupons={setData}
        token={token}
      />
    </AdminLayout>
  );
};

export default AdminCouponsPageComponent;
