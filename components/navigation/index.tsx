"use client";
import Link from "next/link";
import { navData } from "./navData";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import styles from "./styles.module.css";
import { Hamburger } from "../hamburger";
import { useState } from "react";
import { Tel } from "../tel";

export const Navigation = () => {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const toggleNav = () => {
    setIsActive((prev) => !prev);
  };
  const hadleCloseClick = () => {
    setIsActive(false);
  };
  return (
    <>
      <nav className={clsx(styles.nav, isActive && styles["is-active"])}>
        {navData.map((link) => {
          return (
            <Link
              key={link.href}
              href={link.href}
              className={clsx(
                "underline-offset-2",
                pathname === link.href && "underline text-[#BD7048] "
              )}
              onClick={hadleCloseClick}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
      <Tel />
      <Hamburger isActive={isActive} toggleNav={toggleNav} />
    </>
  );
};
