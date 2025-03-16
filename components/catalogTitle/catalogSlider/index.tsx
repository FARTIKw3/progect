"use client";
import styles from "./style.module.css";
import { IoBagHandleOutline } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { slideData } from "./sliderData";
import Image from "next/image";
export const Slider = ({}) => {
  return (
    <>
      <div className={styles.sliderContainer}>
        <Swiper
          effect="fade "
          slidesPerView={3}
          autoplay={{ delay: 10000 }}
          spaceBetween={20}
          centeredSlides={true}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          modules={[Autoplay, Navigation, Pagination, EffectFade]}
          className={styles.customSwiper}
        >
          {slideData.map((item, id) => (
            <SwiperSlide key={id} className={styles.customSlider}>
              <div className={styles.cart}>
                <div className={styles.img}>
                  <Image
                    src={item.image}
                    width={362}
                    height={273}
                    alt={item.title}
                    unoptimized
                  />
                </div>
                <div className={styles.box}>
                  <h2 className={styles.title}>{item.title}</h2>
                  <button className={styles.btn}>
                    <IoBagHandleOutline size={18} />
                    <span className={styles.span}>Выбрать</span>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles.btnRight}>
          <button>
            <FaArrowRight />
          </button>
        </div>
        <div className={styles.btnLeft}>
          <button>
            <FaArrowLeft />
          </button>
        </div>
      </div>
      ;
    </>
  );
};
