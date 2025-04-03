"use client";
import Image from "next/image";
import styles from "./style.module.css";
import { additonData } from "./additonallyData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

export const Additionally = () => {
  return (
    <>
      <h1 className={styles.title}>Дополнительные услуги</h1>
      <div className={styles.container}>
        <Swiper
          effect="coverflow"
          slidesPerView={1}
          spaceBetween={30}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          breakpoints={{
            850: { slidesPerView: 1, spaceBetween: 10 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          modules={[Autoplay, Pagination, EffectCoverflow]}
          className={styles.customSwiper}
        >
          {additonData.map((item, id) => (
            <SwiperSlide>
              <div key={id} className={styles.cart}>
                <Image src={item.src} width={355} height={264} alt="build" />
                <h3>{item.title}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
