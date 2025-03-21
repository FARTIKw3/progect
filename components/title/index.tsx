import { RoomName } from "@/shared/ui/roomName";
import styles from "./style.module.css";
import { SliderLivR } from "../catalogTitle/livingRoomSlider";
import { SliderChilR } from "../catalogTitle/childrenRoomSlider";
import { SliderCorridors } from "../catalogTitle/corridorsRoomSlider";
import { Controls } from "@/shared/ui/controls";
import Link from "next/link";

export const Title = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Дизайн комнат</h1>
      <h1 className={styles.title2}>Наши стили</h1>
      <p className={styles.paragh}>
        Выбирая дизайн комнаты, вы получаете смету со списком всех предметов в
        интерьере, названиями, артикулами, цветом стен и так далее.
      </p>
      <RoomName text="Гостиные" />
      <SliderLivR />
      <RoomName text="Детские" />
      <SliderChilR />
      <RoomName text="Коридоры" />
      <SliderCorridors />
      <Link href="/catalog">
        <Controls text="К каталогу комнат" />
      </Link>
    </div>
  );
};
