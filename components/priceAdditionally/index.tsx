"use client";
import Image from "next/image";
import styles from "./style.module.css";
import { additonData } from "./additonallyData";
import { useRouter } from "next/navigation";
export const Additionally = () => {
  const router = useRouter();

  return (
    <>
      <h1 className={styles.title}>Дополнительные услуги</h1>
      <div className={styles.container}>
        {additonData.map((item, id) => {
          return (
            <div
              key={id}
              className={styles.cart}
              onClick={() => router.push(`/price/service/${item.id}`)}
            >
              <Image
                src={item.image.format.thumbnail.url}
                width={355}
                height={264}
                alt="build"
              />
              <h3>{item.title}</h3>
            </div>
          );
        })}
      </div>
    </>
  );
};
