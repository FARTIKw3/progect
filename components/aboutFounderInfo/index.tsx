import Image from "next/image";
import styles from "./style.module.css";
import { MyVideo } from "./myVideo";

export const FounderInfo = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.image}>
          <Image src="/bioImage.jpg" width={384} height={462} alt="bioAfter" />
        </div>
        <div className={styles.bio}>
          <h1 className={styles.title}>Юрий Черепанов</h1>
          <span className={styles.span}>
            Дизайнер, основатель студии Design Republic <br />
            основатель сервиса Simple Design
          </span>
          <p className={styles.paragh}>
            Главная идея Simple design - дать возможность каждому жить в
            красивом доме.
            <br className={styles.br} />
            Мы помогаем решить вам сложные, но важные вопросы, касающиеся
            ремонта:
          </p>
          <ul className={styles.list}>
            <li className={styles.li}>какую планировку лучше выбрать;</li>
            <li className={styles.li}>
              как рационально использовать площадь дома;
            </li>
            <li className={styles.li}>какой дизайн выбрать?</li>
            <li className={styles.li}>как правильно спланировать освещение;</li>
            <li className={styles.li}>
              как грамотно составить бюджет на материалы и мебель;
            </li>
            <li className={styles.li}>
              как выбрать надежную строительную бригаду;
            </li>
            <li className={styles.li}>и как на всём этом еще и сэкономить?</li>
          </ul>
        </div>
      </div>
      <MyVideo />
    </>
  );
};
