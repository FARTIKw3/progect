"use client";
import Image from "next/image";
import styles from "./style.module.css";
import { additonData } from "./additonallyData";
export const Additionally = () => {
  return (
    <>
      <h1 className={styles.title}>Дополнительные услуги</h1>
      <div className={styles.container}>
        {additonData.map((item, id) => {
          return (
            <div key={id} className={styles.cart}>
              <Image src={item.src} width={355} height={264} alt="build" />
              <h3>{item.title}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
};
