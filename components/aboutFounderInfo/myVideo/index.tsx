"use client";
import styles from "./style.module.css";

import ReactPlayer from "react-player";
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
      <div className={styles.video}>
        <ReactPlayer
          url="https://vimeo.com/1065926311/5cd22c1b65"
          controls
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};
