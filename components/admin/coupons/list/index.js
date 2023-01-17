import styles from '../styles.module.scss';
import AdminCouponsPageComponentListItem from './item';

const AdminCouponsPageComponentList = ({ couponsData, setCoupons, token }) => {
  return (
    <ul className={styles.list}>
      {couponsData?.map((coupon) => (
        <AdminCouponsPageComponentListItem
          key={coupon._id}
          coupon={coupon}
          token={token}
          setCoupons={setCoupons}
          couponsData={couponsData}
        />
      ))}
    </ul>
  );
};

export default AdminCouponsPageComponentList;
