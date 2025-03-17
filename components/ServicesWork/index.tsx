import Image from "next/image";
import { servicesData } from "./servicesData";
import styles from "./style.module.css";

export const Services = () => {
  return (
    <div className={styles.container}>
      <div className={styles.service__info}>
        <h1 className={styles.service__title}>Как это работает?</h1>
        {servicesData.map((index, item) => {
          return (
            <div key={item} className={styles.service__cart}>
              <div>
                <h1 className={styles.index}>{index.index}</h1>
              </div>
              <div className={styles.text}>
                <span className={styles.title}>{index.title}</span>
                <p className={styles.paragh}>{index.paragh}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.services__images}>
        <div>
          <Image src="/serviceBed.jpg" width={660} height={626} alt="bed" />
        </div>
        <div className={styles.absolute}>
          <Image
            src="/serviceSmalBed.jpg"
            width={320}
            height={415}
            alt="smalBed"
          />
        </div>
      </div>
    </div>
  );
};
