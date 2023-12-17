import { useEffect, useState } from 'react';
import Link from 'next/link';
import { IoGridOutline, IoShapes } from 'react-icons/io5';
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
import toast from 'react-hot-toast';

import styles from '../styles.module.scss';
import { getAllCategoriesHandler } from 'actions/category';

const HomeMainMenu = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    handleGetCategories();

    return () => {};
  }, []);

  const handleGetCategories = async () => {
    const { err, data } = await getAllCategoriesHandler();
    if (err) {
      console.log(err);
      toast.error(err);
      return;
    }
    setCategories(data?.data?.data);
  };
  return (
    <div className={styles.menu}>
      <ul>
        <div className={styles.menu__list}>
          {categories?.map((category, index) => (
            <li key={index}>
              <Link href={'/'} passHref>
                <a>
                  {category?.slug === 'women-fashion' ? (
                    <GiLargeDress />
                  ) : category?.slug === 'men-fashion' ? (
                    <GiClothes />
                  ) : category?.slug === 'electronics' ? (
                    <GiHeadphones />
                  ) : category?.slug === 'jewelry-and-watches' ? (
                    <GiWatch />
                  ) : category?.slug === 'home-and-pet-and-appliances' ? (
                    <HiOutlineHome />
                  ) : category?.slug === 'beauty-and-health-and-hair' ? (
                    <GiHealthCapsule />
                  ) : category?.slug === 'shoes-and-sneakers-and-heels' ? (
                    <GiBallerinaShoes />
                  ) : category?.slug === 'accessories' ? (
                    <GiBigDiamondRing />
                  ) : category?.slug === 'sports-and-entertainments' ? (
                    <GiSportMedal />
                  ) : category?.slug === 'kids-and-babies' ? (
                    <FaBaby />
                  ) : category?.slug === 'movies-and-television' ? (
                    <BiCameraMovie />
                  ) : category?.slug === 'gaming-and-video-games' ? (
                    <MdOutlineSportsEsports />
                  ) : category?.slug === 'phones-and-telecommunications' ? (
                    <BsPhoneVibrate />
                  ) : category?.slug === 'toys-and-hobbies' ? (
                    <MdOutlineSmartToy />
                  ) : category?.slug === 'gift-and-crafts' ? (
                    <BiGift />
                  ) : category?.slug === 'machinery' ? (
                    <Gi3DHammer />
                  ) : category?.slug === 'security-and-safety' ? (
                    <AiOutlineSecurityScan />
                  ) : (
                    <IoShapes />
                  )}
                  <span>{category?.name?.replaceAll(' and', ',')}</span>
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
