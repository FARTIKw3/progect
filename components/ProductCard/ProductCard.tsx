import Image from "next/image";
import styles from "./ProductCard.module.css";
import { FaSearchPlus, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function ProductCard({
  title,
  description,
  price,
  images,
  colorScheme,
  materials,
  accents,
  pdfUrl,
}) {
  return (
    <div className={styles.card}>
      <div className={styles.imageGallery}>
        <div className={styles.imageWrapper}>
          <Image
            src={images[0]}
            alt="Фото 1"
            width={992}
            height={495}
            className={styles.image}
          />
          {/* <div className={styles.iconLeft}>
            <FaChevronLeft className={styles.arrow} />
          </div> */}
        </div>

        <div className={styles.imageWrapper}>
          <Image
            src={images[1]}
            alt="Фото 2"
            width={313}
            height={495}
            className={styles.image}
          />
          {/* <div className={styles.iconZoom}>
            <FaSearchPlus />
          </div> */}
        </div>

        <div className={styles.imageWrapper}>
          <Image
            src={images[2]}
            alt="Фото 3"
            width={992}
            height={495}
            className={styles.image}
          />
          {/* <div className={styles.iconRight}>
            <FaChevronRight className={styles.arrow} />
          </div> */}
        </div>
      </div>

      {/* Информация о товаре */}
      <div className={styles.info}>
        <span className={styles.category}>Гостиные</span>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>

        <ul className={styles.details}>
          <li>
            <b>Цветовая гамма:</b> {colorScheme}
          </li>
          <li>
            <b>Основные материалы:</b> {materials}
          </li>
          <li>
            <b>Акцентные элементы:</b> {accents}
          </li>
        </ul>

        <p className={styles.price}>Стоимость комнаты: {price} мг</p>

        <button className={styles.button}>
          <span>В корзину</span>
        </button>

        <div className={styles.pdfSection}>
          <a href={pdfUrl} className={styles.pdfButton}>
            📄 Смотреть пример
          </a>
          <span className={styles.pdfSize}>Pdf 2,5 Мб</span>
        </div>
      </div>
    </div>
  );
}
