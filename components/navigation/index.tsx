"use client";
import Link from "next/link";
import { navData } from "./navData";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import styles from "./styles.module.css";

export const Navigation = () => {
  const pathname = usePathname();
  return (
    <nav className={styles.nav}>
      {navData.map((link) => {
        return (
          <Link
            key={link.href}
            href={link.href}
            className={clsx(
              "underline-offset-2",
              pathname === link.href && "underline text-[#BD7048] "
            )}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
};
