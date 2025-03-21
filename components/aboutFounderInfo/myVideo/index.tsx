"use client";
import ReactPlayer from "react-player";
import styles from "./style.module.css";
import { useEffect, useState } from "react";
import Image from "next/image";
export const MyVideo = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
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
        {isMounted && (
          <ReactPlayer
            light="/videoBg.jpg"
            url="https://youtu.be/FoSgDtqb0Zc"
            playIcon={
              <Image src="/PlayIcon.svg" width={130} height={130} alt="play" />
            }
            controls={true}
            width="100%"
            height="660px"
            playing={true}
          />
        )}
      </div>
    </div>
  );
};
