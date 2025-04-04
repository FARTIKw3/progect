import { Controls } from "@/shared/ui/controls";
import styles from "./style.module.css";
import Image from "next/image";
import { FaRegFilePdf } from "react-icons/fa6";
import Link from "next/link";

export const OurServices = () => {
  return (
    <>
      <div>
        <h1 className={styles.title}>Наши услуги</h1>
      </div>
      <div className={styles.container}>
        <div className={styles.ser__info}>
          <h2 className={styles.info__title}>Планировка за 99 000 ₸</h2>
          <span className={styles.info__span}>Срок выполнения: 5 дней</span>
          <p className={styles.info__paragh}>
            Мы разработаем для вас уникальное планировочное решение квартиры,
            которое будет соответствовать как нормам эргономики, так и вашим
            личным пожеланиям, а также подготовим чертеж для согласования
            планировки.{" "}
          </p>
          <div className={styles.container_list}>
            <div className={styles.list_orange}></div>
            <ul className={styles.info__list}>
              <li className={styles.info__li}>
                2 варианта планировки + финальный
              </li>
              <li>обмерный план</li>
              <li>план демонтажа стен</li>
              <li>план монтажа перегородок</li>
            </ul>
          </div>
          <div className={styles.conrols}>
            <Link href="/price">
              <h1 className={styles.link}>Оставить заявку</h1>
            </Link>
            <div className={styles.conrols_orange}>
              <FaRegFilePdf size={22} />{" "}
              <button className={styles.btn}>Посмотреть пример</button>
            </div>
          </div>
        </div>
        <div className={styles.ser__image}>
          <Image src="/planHome.jpg" width={648} height={600} alt="planHome" />
        </div>
      </div>
      <div className={styles.container2}>
        <div className={styles.ser__image}>
          <Image src="/planHome2.jpg" width={648} height={600} alt="planHome" />
        </div>
        <div className={styles.ser__info}>
          <h2 className={styles.info__title}>Дизайн-проект за 199 000 ₸</h2>
          <span className={styles.info__span}>Срок выполнения: 14 дней</span>
          <p className={styles.info__paragh}>
            Разработаем планировочное решение вашей квартиры, далее на его
            основе мы подготовим альбом, состоящий из 12 чертежей, необходимых
            строителям для ремонта.
          </p>
          <div className={styles.container_list}>
            <div className={styles.list_orange2}></div>
            <ul className={styles.info__list}>
              <li className={styles.info__li}>
                2 варианта планировки + финальный
              </li>
              <li>планы демонтажа и монтажа стен</li>
              <li>розетки, выключатели, освещение</li>
              <li>сантехника</li>
              <li>план потолка</li>
              <li>план пола и плинтусов</li>
              <li>план дверей</li>
            </ul>
          </div>
          <div className={styles.conrols}>
            <Controls text="Оставить заявку" />
            <div className={styles.conrols_orange}>
              <FaRegFilePdf size={22} />{" "}
              <button className={styles.btn}>Посмотреть пример</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
