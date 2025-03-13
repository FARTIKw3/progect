import styles from "./style.module.css";

export const Title = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Дизайн комнат</h1>
      <h1 className={styles.title2}>Наши стили</h1>
      <p className={styles.paragh}>
        Выбирая дизайн комнаты, вы получаете смету со списком всех предметов в
        интерьере, названиями, артикулами, цветом стен и так далее.
      </p>
    </div>
  );
};
