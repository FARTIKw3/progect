"use client";
import styles from "./style.module.css";

export const MyVideo = () => {
  return (
    <div>
      <div className={styles.boxTitle}>
        <h1 className={styles.title}>
          <span>За 4 года</span> мы реализовали <br />
          более 250 проектов
        </h1>
        <div className={styles.borderBottom}></div>
      </div>
      <div className={styles.video}></div>
    </div>
  );
};
