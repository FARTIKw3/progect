import { RoomName } from "@/shared/ui/roomName";
import styles from "./style.module.css";
import { CatalogSlider } from "../catalogSlider";

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
        <CatalogSlider endpoint="living-rooms" />
        <RoomName text="Детские" />
        <CatalogSlider endpoint="childrens-rooms" />
        <RoomName text="Коридоры" />
        <CatalogSlider endpoint="corridor-rooms" />
        <RoomName text="Кухни" />
        <CatalogSlider endpoint="kitchens" />
        <RoomName text="Санузлы" />
        <CatalogSlider endpoint="sanuzlies" />
        <RoomName text="Спальни" />
        <CatalogSlider endpoint="bedrooms" />
      </div>
    </>
  );
};
