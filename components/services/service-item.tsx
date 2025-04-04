import Image from "next/image";
import styles from "./style.module.css";
import cn from "clsx";
import { IService } from "@/interface/service";
import { formatPrice } from "@/libs/format-price";

export default function ServiceItem({
  title,
  image,
  description,
  price,
  example,
}: IService) {
  return (
    <>
      <div className={styles.banner}>
        <Image
          src={image.url}
          fill
          alt=";l;l;"
          style={{
            objectFit: "cover",
          }}
        />
        <div className={cn(styles.container, styles.bannerContainer)}>
          <h2>{title}</h2>
        </div>
      </div>
      <div className={styles.container}>
        <p className={styles.description}>{description}</p>
        <div className={styles.pricingContainer}>
          <div className={styles.pricing}>
            <button className={styles.btn}>
              {" "}
              <Image
                className={styles.imageBag}
                src="/services/zamok.svg"
                width={21}
                height={16}
                alt=""
              />{" "}
              В корзиxy
            </button>

            <a href="#" className={styles.buy}>
              Купить
            </a>
          </div>
          <div className={styles.prise}>
            Стоимость услуги:
            <span className={styles.priseTwo}>{formatPrice(price)} мг</span>
          </div>
        </div>

        {example && (
          <div>
            <h1>Что вы получаете</h1>
            <a href="#">
              смета на мебель и освещение (названия и артикулы) ведомость
              материалов чертежи дизайна под вашу планировку (развертки стен)
            </a>
          </div>
        )}

        <h2 className={styles.sectionTitle}>Смотрите также</h2>
        <div className={styles.services}>
          <div className={styles.serviceItem}>
            <Image
              className={styles.serviceItemImg}
              src="/services/smeta.png"
              width={300}
              height={350}
              alt=""
            />
            <p className={styles.serviceItemP}> Составление сметы</p>
          </div>
          <div className={styles.serviceItem}>
            <Image
              className={styles.serviceItemImg}
              src="/services/pechat.png"
              width={300}
              height={350}
              alt=""
            />
            <p className={styles.serviceItemP}>Печать альбома</p>
          </div>
        </div>
      </div>
    </>
  );
}
