import Image from "next/image";
import styles from "./style.module.css";

export const Interior = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h1 className={styles.title}>
          <span>10</span>
          {""} дизайн-концепций, отражающих актуальные стили в интерьере
        </h1>
        <p className={styles.paragh}>
          Мы создали сервис для тех, кто не знает, как подступиться к большому
          ремонту, ценит качественный дизайн, для тех, кому нужен чёткий план.
          Заказав Simple Design - вы получите дизайн-проект, подробную
          инструкцию по реализации, смету с материалами, чек-лист для проверки
          строителей.
        </p>
      </div>
      <div className={styles.image}>
        <Image src="/interior.jpg" width={629} height={424} alt="interior" />
      </div>
    </div>
  );
};
