import Image from "next/image";
import styles from "./style.module.css";
export const Tel = () => {
  return (
    <div className={styles.container}>
      <div>
        <Image src="/tel.svg" width={20} height={20} alt="tel" />
      </div>
      <div className={styles.tel}>
        <span className={styles.tel__number}>+7 700 505 3000</span>
        <span className={styles.tel__clock}>C 9:00 до 18:00</span>
      </div>
    </div>
  );
};
