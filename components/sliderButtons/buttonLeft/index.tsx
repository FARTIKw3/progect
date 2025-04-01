import { FaArrowLeft } from "react-icons/fa";
import styles from "./style.module.css";
import { useSwiper } from "swiper/react";

export const SlideLeft = () => {
  const swiper = useSwiper();
  return (
    <div className={styles.container}>
      <div className={styles.btnLeft} onClick={() => swiper.slidePrev()}>
        <button className={styles.btn}>
          <FaArrowLeft size={18} />
        </button>
      </div>
    </div>
  );
};
