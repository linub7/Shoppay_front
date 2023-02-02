import {
  IoBagHandle,
  IoCash,
  IoHourglass,
  IoLogoUsd,
  IoPeople,
  IoStorefront,
} from 'react-icons/io5';
import AdminDashboardPageComponentCardItem from './card-item';
import styles from '../styles.module.scss';

const AdminDashboardPageComponentCards = ({ users, orders, products }) => {
  const totalEarnings = orders?.reduce((a, val) => a + val?.total, 0);
  const unPaidYet = orders
    ?.filter((order) => !order?.isPaid)
    .reduce((a, val) => a + val?.total, 0);
  return (
    <div className={styles.cards}>
      <AdminDashboardPageComponentCardItem
        info={`+${users?.length}`}
        title={'Users'}
      >
        <IoPeople />
      </AdminDashboardPageComponentCardItem>
      <AdminDashboardPageComponentCardItem
        info={`+${orders?.length}`}
        title={'Orders'}
      >
        <IoBagHandle />
      </AdminDashboardPageComponentCardItem>
      <AdminDashboardPageComponentCardItem
        info={`+${products?.length}`}
        title={'Products'}
      >
        <IoStorefront />
      </AdminDashboardPageComponentCardItem>
      <AdminDashboardPageComponentCardItem
        info={`+${totalEarnings}$`}
        title={'Total Earnings'}
      >
        <IoCash />
      </AdminDashboardPageComponentCardItem>
      <AdminDashboardPageComponentCardItem
        info={`-${unPaidYet}$`}
        title={'Unpaid Yet'}
      >
        <IoHourglass />
      </AdminDashboardPageComponentCardItem>
    </div>
  );
};

export default AdminDashboardPageComponentCards;
