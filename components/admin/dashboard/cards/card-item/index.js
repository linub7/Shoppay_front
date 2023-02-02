import styles from '../../styles.module.scss';

const AdminDashboardPageComponentCardItem = ({ children, info, title }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__icon}>{children}</div>
      <div className={styles.card__infos}>
        <h4>{info}</h4>
        <span>{title}</span>
      </div>
    </div>
  );
};

export default AdminDashboardPageComponentCardItem;
