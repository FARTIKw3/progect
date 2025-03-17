import styles from "./style.module.css";
import { IoBagHandle } from "react-icons/io5";
export const Planners = () => {
  return (
    <>
      <div>
        <div className={styles.orangeTitle}> Планировка</div>
        <div className={styles.info}>
          <p className={styles.paragh}>
            Мы разработаем для вас уникальное планировочное решение квартиры,
            которое будет соответствовать как нормам эргономики, так и вашим
            личным пожеланиям, а также подготовим чертеж для согласования
            планировки.{" "}
          </p>
          <span className={styles.span}>Вам подойдет, если:</span>
          <ul className={styles.list}>
            <li>Вы купили квартиру без отделки и планируете начать ремонт;</li>
            <li>
              Вы приобрели квартиру с ремонтом, и не понимаете, как правильно
              зонировать ее и расставить мебель;
            </li>
            <li>
              Вы хотите изменить интерьер квартиры, в которой уже проживаете.
            </li>
          </ul>
          <span className={styles.span}>Срок выполненния: </span>
          <p className={styles.paragh}>5 рабочих дней после получения замера</p>
          <span className={styles.span}>Вы получите:</span>
          <ul className={styles.list}>
            <li>2 варианта планировки + финальный</li>
            <li>план демонтажа стен</li>
            <li>план монтажа перегородок</li>
          </ul>
          <div className={styles.box}>
            <span className={styles.span}>Цена услуги:</span>
            <span className={styles.orangeSpan}>99 000 тг</span>
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
    </>
  );
};
