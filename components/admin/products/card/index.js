/* eslint-disable @next/next/no-img-element */
import styles from '../styles.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper';
import Link from 'next/link';
import { IoEye, IoPencil, IoTrash } from 'react-icons/io5';

const ProductCard = ({ prod }) => {
  return (
    <div className={styles.product}>
      <h1 className={styles.product__name}>{prod?.name}</h1>
      <h2 className={styles.product__category}>#{prod?.category?.name}</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="products__swiper"
        style={{ padding: '5px 0 5px 5px' }}
        breakpoints={{
          450: {
            slidesPerView: 2,
          },
          630: {
            slidesPerView: 3,
          },
          920: {
            slidesPerView: 4,
          },
          1232: {
            slidesPerView: 5,
          },
          1520: {
            slidesPerView: 6,
          },
        }}
      >
        {prod?.subProducts?.map((subProd, index) => (
          <SwiperSlide key={index}>
            <div className={styles.product__item}>
              <div className={styles.product__item_img}>
                <img src={subProd?.images[0]?.url} alt="" />
              </div>
              <div className={styles.product__actions}>
                <Link href={`/admin/products/${prod?._id}`}>
                  <a>
                    <IoPencil />
                  </a>
                </Link>
                <Link href={`/products/${prod?.slug}?style=${index}`}>
                  <a>
                    <IoEye />
                  </a>
                </Link>
                <button onClick={() => {}}>
                  <IoTrash />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductCard;
