import styles from "./style.module.css";
import { IoBagHandle } from "react-icons/io5";

export const DesignProject = () => {
  return (
    <div>
      <div className={styles.orangeTitle}>Дизайн-проект</div>
      <div className={styles.info}>
        <p className={styles.paragh}>
          Мы разработаем для вас уникальное планировочное решение квартиры,
          которое будет соответствовать как нормам эргономики, так и вашим
          личным пожеланиям.
        </p>
        <p className={styles.paragh}>
          Затем мы подготовим альбом, состоящий из 12 чертежей, необходимых
          строителям для ремонта.
        </p>
        <p className={styles.paraghSec}>
          * также, вы можете дополнительно выбрать любой дизайн из нашего
          каталога, и мы добавим его в ваш проект.
        </p>
        <span className={styles.span}>Вам подойдет, если:</span>
        <ul className={styles.list}>
          <li>
            Вы купили квартиру в новостройке, и нужен чёткий план на ремонт;
          </li>
          <li>
            Вы хотите полностью переделать квартиру с уже готовой отделкой или
            вторичку;
          </li>
          <li>
            Вы планируете бюджетный ремонт квартиры для дальнейшей сдачи в
            аренду.
          </li>
        </ul>
        <span className={styles.span}>Срок выполненния:</span>
        <ul className={styles.list}>
          <li>
            5 рабочих дней после получения замера - составление планировки
          </li>
          <li>
            7 рабочих дней после согласования планировочного решения -
            подготовка комплекта чертежей
          </li>
        </ul>
        <span className={styles.span}>Вы получите:</span>
        <ul className={styles.list}>
          <li>2 варианта планировки + финальный</li>
          <li>планы демонтажа и монтажа стен</li>
          <li>розетки, выключатели, освещение</li>
          <li>сантехника</li>
          <li>план потолка</li>
          <li>план пола и плинтусов</li>
          <li>план дверей </li>
        </ul>
        <div className={styles.box}>
          <span className={styles.span}>Цена услуги:</span>
          <span className={styles.orangeSpan}>199 000 тг</span>
        </div>
        <div className={styles.boxBtn}>
          <button className={styles.btnOrange}>
            {" "}
            <IoBagHandle />В корзину
          </button>
          <button className={styles.btnPink}>Посмотреть пример</button>
        </div>
      </div>
    </div>
  );
};
