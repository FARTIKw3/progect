import Image from "next/image";
import styles from "./style.module.css";

export const AboutTitle = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.boxSpan}>
          <span className={styles.span}>
            Команда Simple
            <span className={styles.spanOrange}> Design</span>
          </span>
          <div className={styles.boxTitle}>
            <h1 className={styles.title}>
              Первый интернет-сервис дизайна интерьера в Казахстане
            </h1>
          </div>
        </div>
      </div>

      <div className={styles.image}>
        <Image src="/people.jpg" width={1660} height={660} alt="interior" />
      </div>
    </>
  );
};
