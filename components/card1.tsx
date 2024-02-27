import type { NextPage } from "next";
import styles from "./card1.module.css";

export type Card1Type = {
  propertyImage?: string;
};

const Card1: NextPage<Card1Type> = ({ propertyImage }) => {
  return (
    <div className={styles.card1}>
      <img
        className={styles.propertyImageIcon}
        loading="lazy"
        alt=""
        src={propertyImage}
      />
      <div className={styles.propertyName}>
        <div className={styles.alliumPlaceOrlando}>
          92 ALLIUM PLACE, ORLANDO FL 32827
        </div>
      </div>
      <div className={styles.price}>
        <div className={styles.path}>$ 590,693</div>
      </div>
      <div className={styles.moreDetails}>
        <div className={styles.parking}>
          <img className={styles.carIcon} alt="" src="/car.svg" />
          <div className={styles.rectangleRounded}>4</div>
        </div>
        <div className={styles.bathrooms}>
          <img className={styles.bathtubIcon} alt="" src="/bathtub.svg" />
          <div className={styles.groupMask}>4</div>
        </div>
        <div className={styles.size}>
          <img className={styles.arrowsoutIcon} alt="" src="/arrowsout.svg" />
          <div className={styles.ft}>2,096.00 ft</div>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.user}>
          <img
            className={styles.featuresListIcon}
            loading="lazy"
            alt=""
            src="/ellipse-1@2x.png"
          />
          <div className={styles.jennyWilson}>Jenny Wilson</div>
        </div>
        <div className={styles.ctas}>
          <div className={styles.share}>
            <img
              className={styles.sharenetworkIcon}
              alt=""
              src="/sharenetwork.svg"
            />
          </div>
          <div className={styles.favorite}>
            <img className={styles.heartIcon} alt="" src="/heart.svg" />
          </div>
          <div className={styles.add}>
            <img className={styles.plusIcon} alt="" src="/plus.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card1;
