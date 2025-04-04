import { RoomName } from "@/shared/ui/roomName";
import styles from "./style.module.css";
import { Controls } from "@/shared/ui/controls";
import Link from "next/link";
import { CatalogSlider } from "../catalogSlider";

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
      <CatalogSlider endpoint="living-rooms" />
      <RoomName text="Детские" />
      <CatalogSlider endpoint="childrens-rooms" />
      <RoomName text="Коридоры" />
      <CatalogSlider endpoint="corridor-rooms" />
      <Link href="/catalog">
        <Controls text="К каталогу комнат" />
      </Link>
    </div>
  );
};
