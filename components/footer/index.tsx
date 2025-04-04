import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";
import { Tel } from "../tel";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__info}>
        <div>
          <Image src="/Logo.svg" width={100} height={50} alt="Logo" />
        </div>
        <div className={styles.footer__links}>
          <Link href="/">Главная</Link>
          <Link href="/testLink">Тест</Link>

          <Link href="/about">О нас</Link>
          <Link href="/price">Цены</Link>
        </div>
        <div className={styles.footer__paragh}>
          <p>Политика конфиденциальности Условия пользования</p>
        </div>
        <div>
          <Tel />
        </div>
      </div>
      <div className={styles.footer__end}>
        <div>
          <h4 className={styles.footer__title}>
            (с) 2022. Все права защищены.
          </h4>
        </div>
      </div>
    </footer>
  );
};
