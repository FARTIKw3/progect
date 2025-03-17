"use client";

import styles from "./style.module.css";
import { sliderBase } from "./sliderBase";
import { SwiperSlide, Swiper } from "swiper/react";
import Image from "next/image";
import { Autoplay, Pagination } from "swiper/modules";
export const AboutSlider = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.boxTitle}>
          <div className={styles.borderBottom}></div>
          <h1 className={styles.title}>
            В команде Simple design <span>21 человек</span>
          </h1>
        </div>
      </div>
      <div className={styles.sliderContainer}>
        <Swiper
          loop={true}
          slidesPerView={1}
          grabCursor={true}
          centeredSlides={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          speed={1000}
          modules={[Autoplay, Pagination]}
          className={styles.customerSwiper}
          breakpoints={{
            1440: {
              slidesPerView: 1,
            },
          }}
        >
          {sliderBase.map((item, id) => (
            <SwiperSlide key={id}>
              <Image src={item.image} width={1178} height={712} alt="people" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
