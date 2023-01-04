import { menuArray } from 'constants';
import Link from 'next/link';
import { IoGridOutline } from 'react-icons/io5';
import { AiOutlineSecurityScan } from 'react-icons/ai';
import { HiOutlineHome } from 'react-icons/hi';
import { BsPhoneVibrate } from 'react-icons/bs';
import { FaBaby } from 'react-icons/fa';
import { MdOutlineSportsEsports, MdOutlineSmartToy } from 'react-icons/md';
import { BiCameraMovie, BiGift } from 'react-icons/bi';
import {
  GiLargeDress,
  GiClothes,
  GiHeadphones,
  GiWatch,
  GiHealthCapsule,
  GiBallerinaShoes,
  GiBigDiamondRing,
  GiSportMedal,
  Gi3DHammer,
} from 'react-icons/gi';
import styles from '../styles.module.scss';

const HomeMainMenu = () => {
  return (
    <div className={styles.menu}>
      <ul>
        {/* <li>
          <Link href={'/'} passHref>
            <a className={styles.menu__header}>
              <IoGridOutline />
              <b>Categories</b>
            </a>
          </Link>
        </li> */}
        <div className={styles.menu__list}>
          {menuArray.map((menu, i) => (
            <li key={i}>
              <Link href={menu?.link} passHref>
                <a>
                  {/* {i === 0 ? <GiLargeDress /> : i === 1 ? <GiClothes /> : i === 2 ?  <GiHeadphones /> : i ===3 ? <GiWatch /> : i ===4 ? <HiOutlineHome /> ? i === 5 ? <GiHealthCapsule /> : i === 6 ? <GiBallerinaShoes /> : i === 7 ? <GiBigDiamondRing /> : i === 8 ? <GiSportMedal /> : i === 9 ? <FaBaby /> : i === 10 ? <BiCameraMovie /> : i === 11 ? <MdOutlineSportsEsports /> : i === 12 ? <BsPhoneVibrate /> : i === 13 ? <MdOutlineSmartToy /> : i === 14 ? <BiGift />: i === 15 ? <Gi3DHammer /> : i === 16 ? <AiOutlineSecurityScan /> : ""} */}
                  {i === 0 ? (
                    <GiLargeDress />
                  ) : i === 1 ? (
                    <GiClothes />
                  ) : i === 2 ? (
                    <GiHeadphones />
                  ) : i === 3 ? (
                    <GiWatch />
                  ) : i === 4 ? (
                    <HiOutlineHome />
                  ) : i === 5 ? (
                    <GiHealthCapsule />
                  ) : i === 6 ? (
                    <GiBallerinaShoes />
                  ) : i === 7 ? (
                    <GiBigDiamondRing />
                  ) : i === 8 ? (
                    <GiSportMedal />
                  ) : i === 9 ? (
                    <FaBaby />
                  ) : i === 10 ? (
                    <BiCameraMovie />
                  ) : i === 11 ? (
                    <MdOutlineSportsEsports />
                  ) : i === 12 ? (
                    <BsPhoneVibrate />
                  ) : i === 13 ? (
                    <MdOutlineSmartToy />
                  ) : i === 14 ? (
                    <BiGift />
                  ) : i === 15 ? (
                    <Gi3DHammer />
                  ) : i === 16 ? (
                    <AiOutlineSecurityScan />
                  ) : (
                    ''
                  )}
                  <span>{menu?.name}</span>
                </a>
              </Link>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default HomeMainMenu;
