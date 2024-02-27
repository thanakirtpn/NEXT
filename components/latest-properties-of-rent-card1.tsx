import type { NextPage } from "next";
import Card from "./card";
import styles from "./latest-properties-of-rent-card1.module.css";

const LatestPropertiesOfRentCard1: NextPage = () => {
  return (
    <section className={styles.latestPropertiesOfRentCard}>
      <div className={styles.contents}>
        <div className={styles.text}>
          <h1 className={styles.latestPropertiesOf}>
            Latest Properties of Rent
          </h1>
          <div className={styles.vestibulumAnteIpsum}>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className={styles.cardRow}>
          <Card />
          <Card propBackgroundImage="url('/card-21@3x.png')" />
          <Card propBackgroundImage="url('/card-31@3x.png')" />
          <Card propBackgroundImage="url('/card-41@3x.png')" />
        </div>
      </div>
      <button className={styles.cta}>
        <div className={styles.loadMoreListing}>Load more listing</div>
      </button>
    </section>
  );
};

export default LatestPropertiesOfRentCard1;
