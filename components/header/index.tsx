import Image from "next/image";
import { Navigation } from "../navigation";
import styles from "./styles.module.css";
export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <div>
          <Image src="/Logo.svg" width={100} height={50} alt="Logo" />
        </div>
        <Navigation />
        <div>
          <div className={styles.tel}>
            <Image src="/tel.svg" width={20} height={20} alt="tel" />
            <span className={styles.tel__number}>+7 700 505 3000</span>
          </div>
          <div className={styles.tel__clock}>C 9:00 до 18:00</div>
        </div>
      </div>
    </header>
  );
};
