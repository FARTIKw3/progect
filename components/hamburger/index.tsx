"use client";
import styles from "./style.module.css";
import clsx from "clsx";

interface Props {
  isActive: boolean;
  toggleNav: () => void;
}

export const Hamburger = ({ isActive, toggleNav }: Props) => {
  return (
    <button
      aria-label="burger"
      onClick={toggleNav}
      className={clsx(styles.hamburger, isActive && styles.isActive)}
    >
      <span className={styles.hamburgerBox}>
        <span className={styles.hamburgerInner}></span>
      </span>
    </button>
  );
};
