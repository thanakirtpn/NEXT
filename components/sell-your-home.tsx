import type { NextPage } from "next";
import styles from "./sell-your-home.module.css";

export type SellYourHomeType = {
  icon?: string;
  sellYourHome?: string;
};

const SellYourHome: NextPage<SellYourHomeType> = ({ icon, sellYourHome }) => {
  return (
    <div className={styles.sellYourHome}>
      <div className={styles.contents}>
        <img className={styles.icon} loading="lazy" alt="" src={icon} />
        <div className={styles.description}>
          <h3 className={styles.sellYourHome1}>{sellYourHome}</h3>
          <div className={styles.weDoA}>
            We do a free evaluation to be sure you want to start selling.
          </div>
          <div className={styles.readMore}>Read more</div>
        </div>
      </div>
    </div>
  );
};

export default SellYourHome;
