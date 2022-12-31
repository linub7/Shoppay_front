import { useState } from 'react';
import Ad from './Ad';
import MainSection from './main/MainSection';
import styles from './styles.module.scss';
import TopSection from './TopSection';
import UserMenu from './user-menu/UserMenu';

const HeaderComponent = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  return (
    <header className={styles.header}>
      <Ad />
      <TopSection setIsMenuVisible={setIsMenuVisible} />
      {isMenuVisible && <UserMenu />}
      <MainSection />
    </header>
  );
};

export default HeaderComponent;
