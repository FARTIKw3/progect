"use client";
import styles from "./style.module.css";
import clsx from "clsx";
export const Hamburger = ({ isActive, toggleNav }) => {
  return (
    <>
      <button
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
