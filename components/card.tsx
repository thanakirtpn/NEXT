import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import styles from "./card.module.css";

export type CardType = {
  /** Style props */
  propBackgroundImage?: CSSProperties["backgroundImage"];
};

const Card: NextPage<CardType> = ({ propBackgroundImage }) => {
  const card1Style: CSSProperties = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (
    <div className={styles.card1} style={card1Style}>
      <div className={styles.details}>
        <div className={styles.location}>
          <img
            className={styles.mappinIcon}
            loading="lazy"
            alt=""
            src="/mappin.svg"
          />
          <div className={styles.washington}>Washington</div>
        </div>
        <div className={styles.size}>
          <img className={styles.arrowsoutIcon} alt="" src="/arrowsout-4.svg" />
          <div className={styles.commentsOrQuestions}>12000</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
