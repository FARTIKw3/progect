import { RoomName } from "@/shared/ui/roomName";
import { SliderLivR } from "./livingRoomSlider";
import styles from "./style.module.css";
import { SliderChilR } from "./childrenRoomSlider";
import { SliderCorridors } from "./corridorsRoomSlider";
import { SliderKitchen } from "./kitchenSlider";
import { SliderBathRoom } from "./bathRoomSlider";
import { SliderBedRoom } from "./bedRoomSlider";

export const CatalogTitle = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Дизайн комнат</h1>
        <p className={styles.paragh}>
          Выбирая дизайн комнаты, вы получаете смету со списком всех предметов в
          интерьере, названиями, артикулами, цветом стен и так далее.
        </p>
      </div>
      <div className={styles.containerSlider}>
        <RoomName text="Гостиные" />
        <SliderLivR />
        <RoomName text="Детские" />
        <SliderChilR />
        <RoomName text="Коридоры" />
        <SliderCorridors />
        <RoomName text="Кухни" />
        <SliderKitchen />
        <RoomName text="Санузлы" />
        <SliderBathRoom />
        <RoomName text="Спальни" />
        <SliderBedRoom />
      </div>
    </>
  );
};
