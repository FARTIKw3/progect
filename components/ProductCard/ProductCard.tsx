"use client";
import Image from "next/image";
import styles from "./ProductCard.module.css";
import { SwiperSlide, Swiper } from "swiper/react";
import { IImage } from "./../../interfaces/strapiData";
import { Additionally } from "../priceAdditionally";
import { Buttons } from "./buttons";
import { servicesData } from "../ServicesWork/servicesData";

interface Props {
  title: string;
  description: string;
  price: number;
  images: IImage[];
  colorScheme: string;
  materials: string;
  accents: string;
  pdfUrl: string;
}

export default function ProductCard({
  title,
  description,
  price,
  images,
  colorScheme,
  materials,
  accents,
  pdfUrl,
}: Props) {
  return (
    <div className={styles.card}>
      <div className={styles.imageGallery}>
        <Swiper slidesPerView={"auto"} spaceBetween={30} className="mySwiper">
          {images.map((image) => (
            <SwiperSlide key={image.id} style={{ width: "auto" }}>
              <Image
                src={image.url}
                alt="Фото 1"
                width={image.width}
                height={495}
                className={styles.image}
              />
            </SwiperSlide>
          ))}
          <Buttons />
        </Swiper>
      </div>

      {/* --- Основная информация о товаре --- */}
      <div className={styles.info}>
        <span className={styles.category}>Гостиные</span>
        <h2 className={styles.title}>{title}</h2>

        <div className={styles.descriptionWrapper}>
          <p className={styles.description}>{description}</p>
          <ul className={styles.details}>
            <li>
              <span className={styles.span}>-Цветовая гамма:</span>{" "}
              {colorScheme}
            </li>
            <li>
              <span className={styles.span}>-Основные материалы:</span>{" "}
              {materials}
            </li>
            <li>
              <span className={styles.span}>-Акцентные элементы:</span>{" "}
              {accents}
            </li>
          </ul>
        </div>

        {/* --- Кнопка и цена --- */}
        <div className={styles.buttoncon}>
          <button className={styles.button}>
            <img src="marcket.svg" alt="Корзина" />
            <span>В корзину</span>
          </button>
          <p className={styles.price}>Стоимость комнаты: {price} мг</p>
        </div>

        {/* --- Что входит в комплект --- */}
        <div className={styles.sectionTitle}>Что вы получаете:</div>
        <ul className={styles.benefits}>
          <li>Смета на мебель и освещение (названия и артикулы)</li>
          <li>Ведомость материалов</li>
          <li>Чертежи дизайна под вашу планировку (развертки стен)</li>
        </ul>

        {/* --- PDF-файл --- */}
        <div className={styles.pdfSection}>
          <img src="pdf.svg" alt="PDF" />
          <a href={pdfUrl} download className={styles.pdfButton}>
            Смотреть пример
          </a>
          <span className={styles.pdfSize}>Pdf 2,5 Мб</span>
        </div>

        <div className={styles.add}>
          <Additionally />
        </div>

        <div className={styles.service__info}>
          <h1 className={styles.service__title}>Как это работает?</h1>
          <div className={styles.service__container}>
            {servicesData.map((item, index) => (
              <div key={index} className={styles.service__cart}>
                <h1 className={styles.index}>{index + 1}</h1>
                <div className={styles.text}>
                  <span className={styles.title}>{item.title}</span>
                  <p className={styles.paragh}>{item.paragh}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
