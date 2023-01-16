import styles from './styles.module.scss';

const AdminSubmitButton = ({ btnTitle }) => {
  return (
    <div className={styles.btnWrap}>
      <button type="submit" className={`${styles.btn}`}>
        <span>{btnTitle}</span>
      </button>
    </div>
  );
};

export default AdminSubmitButton;
