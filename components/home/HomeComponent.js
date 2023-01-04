import FlashDealsComponent from './flash-deals';
import HomeMainComponent from './main';
import styles from './styles.module.scss';

const HomeComponent = () => {
  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <HomeMainComponent />
        <FlashDealsComponent />
      </div>
    </div>
  );
};

export default HomeComponent;
