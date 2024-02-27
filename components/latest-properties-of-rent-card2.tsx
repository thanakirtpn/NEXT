import type { NextPage } from "next";
import Card1 from "./card1";
import styles from "./latest-properties-of-rent-card2.module.css";

const LatestPropertiesOfRentCard2: NextPage = () => {
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
        <div className={styles.cardsRow}>
          <Card1 propertyImage="/property-image@2x.png" />
          <Card1 propertyImage="/property-image-1@2x.png" />
          <Card1 propertyImage="/property-image-2@2x.png" />
          <Card1 propertyImage="/property-image-3@2x.png" />
        </div>
      </div>
      <div className={styles.cta}>
        <div className={styles.loadMoreListing}>Load more listing</div>
      </div>
    </section>
  );
};

export default LatestPropertiesOfRentCard2;
