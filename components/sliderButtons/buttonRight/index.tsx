import { useSwiper } from "swiper/react";
import styles from "./style.module.css";
import { FaArrowRight } from "react-icons/fa";

export const SliderRight = () => {
  const swiper = useSwiper();
  return (
    <>
      <div className={styles.container}>
        <div className={styles.btnRight} onClick={() => swiper.slideNext()}>
          <button className={styles.btn}>
            <FaArrowRight size={18} />
          </button>
        </div>
      </div>
    </>
  );
};
