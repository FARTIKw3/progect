import { DesignProject } from "./designProject";
import { Planners } from "./planners";
import styles from "./style.module.css";

export const Offer = () => {
  return (
    <>
      <div className={styles.container}>
        <Planners />
        <DesignProject />
      </div>
    </>
  );
};
