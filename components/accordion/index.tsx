"use client";
import { useState } from "react";
import { faqList } from "./accordionData";
import styles from "./style.module.css";
import { CiCirclePlus } from "react-icons/ci";

export const Accordion = () => {
  const [openId, setOpenId] = useState(null);
  const clickHandler = (id) => {
    if (id === openId) {
      setOpenId(null);
    } else {
      setOpenId(id);
    }
  };

  return (
    <>
      <h1 className={styles.title}>Часто задаваемые вопросы</h1>
      <ul className={styles.accordion}>
        {faqList.map((faqItem, id: number) => {
          return (
            <li key={id} className={styles.accordion_item}>
              <button
                className={styles.accordion_btn}
                onClick={() => clickHandler(id)}
              >
                <div
                  className={`${styles.box} ${
                    id === openId ? styles.open : ""
                  }`}
                >
                  <CiCirclePlus
                    className={`${styles.plus} ${
                      id === openId ? styles.open : ""
                    }`}
                  />
                </div>
                {faqItem.q}{" "}
              </button>
              <div
                className={`${styles.accordion_collapse} ${
                  id === openId ? styles.open : ""
                }`}
              >
                <div className={styles.accrodion_body}>{faqItem.a}</div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};
