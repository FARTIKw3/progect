"use client";
import { useState } from "react";
import styles from "./style.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { useBasket } from "@/store/basket";
import Image from "next/image";
import clsx from "clsx";
import { IoMdClose } from "react-icons/io";
import { Controls } from "@/shared/ui/controls";
import Link from "next/link";

export const Basket = ({}) => {
  const [isOpenBasket, setIsOpenBasket] = useState(false);
  const { cart, removeFromCart } = useBasket();

  return (
    <>
      <div className={styles.container}>
        <button
          type="button"
          aria-label="basket"
          onClick={() => setIsOpenBasket(true)}
          className={styles.basket}
        >
          <span className={clsx(styles.span, cart.length === 0 && styles.none)}>
            {cart.length}
          </span>
          <FaShoppingCart size={44} />
        </button>
        {isOpenBasket && (
          <div className={styles.basketContainer}>
            <button
              onClick={() => setIsOpenBasket(false)}
              className={styles.basketClose}
            >
              Закрыть
            </button>

            <h1 className={styles.title}>Выбраные комнаты</h1>
            {cart.length === 0 && (
              <h1 className={styles.basketClear}> Корзина пуста</h1>
            )}
            {cart.map((item, index) => (
              <div key={index} className={styles.basketItem}>
                <div className={styles.basketContent}>
                  <span>{index + 1}</span>
                  <Image
                    src={`http://localhost:1337${item.image[0]?.url}`}
                    width={100}
                    height={100}
                    alt={item.name}
                  />
                  <h1>{item.name}</h1>
                </div>
                <button
                  aria-label="remove"
                  className={styles.removeBtn}
                  onClick={() => removeFromCart(item.id)}
                >
                  <IoMdClose size={22} />
                </button>
              </div>
            ))}
            <div className={styles.basketFooter}>
              <Link href="/price" onClick={() => setIsOpenBasket(false)}>
                <button className={styles.btn}>
                  Перейти к выбору услуг {">>"}
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
