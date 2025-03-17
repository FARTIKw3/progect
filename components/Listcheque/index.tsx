import { Controls } from "@/shared/ui/controls";
import styles from "./style.module.css";
import Image from "next/image";

export const ListCheque = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.image}>
          <Image
            src="/chequeList.jpg"
            width={379}
            height={369}
            alt="List"
          ></Image>
        </div>
        <div className={styles.info}>
          <h1 className={styles.title}>Планируете ремонт?</h1>
          <p className={styles.paragh}>
            Ответьте на несколько вопросов и получите бесплатный чек-лист по
            ремонту
          </p>
          <Controls text="Получить чек-лист" />
        </div>
      </div>
    </>
  );
};
