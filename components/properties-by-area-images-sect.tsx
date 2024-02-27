import type { NextPage } from "next";
import styles from "./properties-by-area-images-sect.module.css";

const PropertiesByAreaImagesSect: NextPage = () => {
  return (
    <section className={styles.propertiesByAreaImagesSect}>
      <div className={styles.description}>
        <h1 className={styles.propertiesByArea}>Properties by Area</h1>
        <div className={styles.vestibulumAnteIpsum}>
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat.
        </div>
      </div>
      <div className={styles.cards}>
        <div className={styles.cardwrapper}>
          <div className={styles.row1}>
            <div className={styles.card1}>
              <div className={styles.text}>
                <h3 className={styles.centerville}>Centerville</h3>
                <div className={styles.listings}>25 listings</div>
              </div>
            </div>
            <div className={styles.card2}>
              <div className={styles.text1}>
                <h3 className={styles.centerville1}>Centerville</h3>
                <div className={styles.listings1}>25 listings</div>
              </div>
            </div>
            <div className={styles.card3}>
              <div className={styles.text2}>
                <h3 className={styles.centerville2}>Centerville</h3>
                <div className={styles.listings2}>25 listings</div>
              </div>
            </div>
          </div>
          <div className={styles.row2}>
            <div className={styles.card4}>
              <div className={styles.text3}>
                <h3 className={styles.arlington}>Arlington</h3>
                <div className={styles.listings3}>25 listings</div>
              </div>
            </div>
            <div className={styles.card5}>
              <div className={styles.text4}>
                <h3 className={styles.centerville3}>Centerville</h3>
                <div className={styles.listings4}>25 listings</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertiesByAreaImagesSect;
