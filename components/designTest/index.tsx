import { Controls } from "@/shared/ui/controls";
import styles from "./style.module.css";

export const DesignTest = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Давайте определим, что вам нравится</h1>
      <p className={styles.paragh}>
        Пройдите короткий тест и мы покажем подходящие вам стилевые решения
      </p>
      <Controls text="Пройти тест" />
    </div>
  );
};
