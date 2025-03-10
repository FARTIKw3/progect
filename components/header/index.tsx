import Image from "next/image";
import { Navigation } from "../navigation";
import styles from "./styles.module.css";
import { Tel } from "../tel";
export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <div>
          <Image src="/Logo.svg" width={100} height={50} alt="Logo" />
        </div>
        <Navigation />
        <Tel />
      </div>
    </header>
  );
};
