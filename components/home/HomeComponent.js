import HomeMainComponent from './main';
import styles from './styles.module.scss';

const HomeComponent = () => {
  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <HomeMainComponent />
      </div>
    </div>
  );
};

export default HomeComponent;
