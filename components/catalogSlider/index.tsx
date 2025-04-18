"use client";
import styles from "./style.module.css";
import { IoBagHandleOutline } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { fetchRooms } from "@/api/strapi";
import Image from "next/image";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { useBasket } from "@/store/basket";
import Link from "next/link";
import { SliderRight } from "../sliderButtons/buttonRight";
import { SlideLeft } from "../sliderButtons/buttonLeft";
export const CatalogSlider = ({ endpoint }: { endpoint: string }) => {
  const [slideChildren, setSlideChildren] = useState<any[]>([]);
  const { addToCart } = useBasket();

  useEffect(() => {
    const fetchRoomchild = async () => {
      try {
        const data = await fetchRooms(endpoint, "image");
        setSlideChildren(data.data);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchRoomchild();
  }, [endpoint]);
  console.log("Slide Data:", slideChildren);
  if (!slideChildren || slideChildren.length === 0)
    return <h1 className={styles.noRooms}>Комнат нет</h1>;
  return (
    <>
      <div className={styles.sliderContainer}>
        <Swiper
          effect="coverflow"
          slidesPerView={3}
          autoplay={{ delay: 5000 }}
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            628: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          modules={[Autoplay, Pagination, EffectCoverflow]}
          className={styles.customSwiper}
        >
          {slideChildren.map((room, id) => (
            <SwiperSlide key={id} className={styles.customSlider}>
              <div className={styles.cart}>
                <div className={styles.img}>
                  <Image
                    src={`http://localhost:1337${room.image[0]?.url}`}
                    width={362}
                    height={273}
                    alt={room.name}
                    unoptimized
                  />
                </div>
                <div className={styles.box}>
                  <h2 className={styles.title}>{room.name}</h2>
                  <Link
                    className={styles.btn}
                    href={`/catalog/${endpoint}/${room.documentId}`}
                  >
                    <div>
                      <IoBagHandleOutline size={18} />
                    </div>
                    <div>
                      {" "}
                      <span className={styles.span}>Выбрать</span>
                    </div>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className={styles.btnRight}>
            <SliderRight />
          </div>
          <div className={styles.btnLeft}>
            <SlideLeft />
          </div>
        </Swiper>
      </div>
      ;
    </>
  );
};
