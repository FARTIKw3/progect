import { Controls } from "@/shared/ui/controls";
import styles from "./style.module.css";
import Image from "next/image";
import { IoIosCheckboxOutline } from "react-icons/io";

export const Article = () => {
  return (
    <article className={styles.article}>
      <h1 className={styles.article_title}>
        Дизайн-проект для вашей квартиры за 2 недели и 199 000 ₸
      </h1>

      <Controls text="Консультация" />
      <div className={styles.article_cart}>
        <div className={styles.cartClock}>
          <div className={styles.clock_svg}>
            <Image src="/clock.svg" width={44} height={44} alt="clock" />
          </div>
          <div className={styles.clock_about}>
            <h2>2 недели </h2>
            <span>срок выполнения заказа</span>
          </div>
        </div>
        <div className={styles.cartClock}>
          <div className={styles.clock_svg}>
            <IoIosCheckboxOutline size={44} color="#BD7048" />
          </div>
          <div className={styles.clock_about}>
            <h2>Не важно </h2>
            <span>Сколько квадратов, цена - одна!</span>
          </div>
        </div>
        <div className={styles.cartClock}>
          <div className={styles.clock_svg}>
            <Image src="/paycredits.svg" width={44} height={44} alt="credit" />
          </div>
          <div className={styles.clock_about}>
            <h2>Рассрочка </h2>
            <span>до 24 месяцев</span>
            <Image src="kaspi.svg" width={72} height={17} alt="Kaspi" />
          </div>
        </div>
      </div>
    </article>
  );
};
