import { useSwiper } from "swiper/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styles from "./Buttons.module.css";

export const Buttons = () => {
  const swiper = useSwiper();
  return (
    <div className={styles.buttonsContainer}>
      <button className={styles.button} onClick={() => swiper.slidePrev()}>
        <FaChevronLeft />
      </button>
      <button className={styles.button} onClick={() => swiper.slideNext()}>
        <FaChevronRight />
      </button>
    </div>
  );
};
