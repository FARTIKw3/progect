import styles from "./style.module.css";
interface Props {
  text: string;
}
export const Controls = ({ text }: Props) => {
  return <button className={styles.btn}>{text}</button>;
};
