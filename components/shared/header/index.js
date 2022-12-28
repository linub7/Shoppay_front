import Ad from './Ad';
import styles from './styles.module.scss';
import TopSection from './TopSection';

const HeaderComponent = () => {
  return (
    <header className={styles.header}>
      <Ad />
      <TopSection />
    </header>
  );
};

export default HeaderComponent;
