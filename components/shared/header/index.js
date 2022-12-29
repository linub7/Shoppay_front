import { useState } from 'react';
import Ad from './Ad';
import MainSection from './main/MainSection';
import styles from './styles.module.scss';
import TopSection from './TopSection';
import UserMenu from './user-menu/UserMenu';

const HeaderComponent = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  return (
    <header className={styles.header}>
      <Ad />
      <TopSection loggedIn={loggedIn} setIsMenuVisible={setIsMenuVisible} />
      {isMenuVisible && <UserMenu loggedIn={loggedIn} />}
      <MainSection />
    </header>
  );
};

export default HeaderComponent;
