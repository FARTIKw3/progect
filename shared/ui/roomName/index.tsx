import styles from "./style.module.css";
interface Props {
  text: string;
}
export const RoomName = ({ text }: Props) => {
  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.title}>{text}</h1>
      </div>
      <div className={styles.bottomLine}></div>
    </div>
  );
};
