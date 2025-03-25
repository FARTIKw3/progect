"use client";
import Image from "next/image";
import styles from "./styles.module.css";
import { Navigation } from "../navigation";

export const Header = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.navbar}>
          <Image src="/Logo.svg" width={100} height={50} alt="Logo" />

          <Navigation />
        </div>
      </header>
    </div>
  );
};
