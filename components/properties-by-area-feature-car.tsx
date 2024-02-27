import type { NextPage } from "next";
import SellYourHome from "./sell-your-home";
import styles from "./properties-by-area-feature-car.module.css";

const PropertiesByAreaFeatureCar: NextPage = () => {
  return (
    <section className={styles.propertiesByAreaFeatureCar}>
      <div className={styles.areaContent}>
        <div className={styles.areaLabels}>
          <h1 className={styles.areaTitle}>Properties by Area</h1>
          <div className={styles.areaSubtitle}>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className={styles.propertiesRow}>
          <SellYourHome icon="/icon.svg" sellYourHome="Sell your home" />
          <SellYourHome icon="/icon-1.svg" sellYourHome="Rent your home" />
          <SellYourHome icon="/icon-2.svg" sellYourHome="Buy a home" />
          <SellYourHome icon="/icon-3.svg" sellYourHome="Free marketing" />
        </div>
      </div>
    </section>
  );
};

export default PropertiesByAreaFeatureCar;
