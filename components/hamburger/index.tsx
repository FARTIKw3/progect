"use client";
import styles from "./style.module.css";
import clsx from "clsx";
interface Props {
  isActive: boolean;
  toggleNav: () => void;
}
export const Hamburger = ({ isActive, toggleNav }: Props) => {
  return (
    <>
      <button
        aria-label="burger"
        onClick={toggleNav}
        className={clsx(styles.hamburger, isActive && "is-active")}
      >
        <div className={clsx(styles.burger, isActive && "active")}></div>
        <div className={clsx(styles.burger, isActive && "active")}></div>
        <div className={clsx(styles.burger, isActive && "active")}></div>
      </button>
    </>
  );
};
