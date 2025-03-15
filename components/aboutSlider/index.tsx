import styles from "./style.module.css";

export const AboutSlider = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.boxTitle}>
          <div className={styles.borderBottom}></div>
          <h1 className={styles.title}>
            В команде Simple design <span>21 человек</span>
          </h1>
        </div>
      </div>
      <div className={styles.sliderContainer}></div>
    </>
  );
};
