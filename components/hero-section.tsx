import type { NextPage } from "next";
import styles from "./hero-section.module.css";

const HeroSection: NextPage = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroSectionContents}>
        <div className={styles.text}>
          <h1 className={styles.findYourDream}>Find Your Dream Home</h1>
          <div className={styles.vestibulumAnteIpsum}>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className={styles.rentsale}>
          <div className={styles.tabs}>
            <button className={styles.rent}>
              <div className={styles.rent1}>Rent</div>
            </button>
            <button className={styles.sale}>
              <div className={styles.sale1}>Sale</div>
            </button>
          </div>
          <div className={styles.formwrapper}>
            <div className={styles.formcontainer}>
              <div className={styles.locations}>
                <div className={styles.locations1}>Locations</div>
                <div className={styles.dropdownlink}>
                  <div className={styles.logoAndTitle}>Select your city</div>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/vector@2x.png"
                  />
                </div>
              </div>
              <div className={styles.propertyType}>
                <div className={styles.propertyType1}>Property Type</div>
                <div className={styles.dropdownlink1}>
                  <div className={styles.text1}>Select property type</div>
                  <img
                    className={styles.vectorIcon1}
                    alt=""
                    src="/vector@2x.png"
                  />
                </div>
              </div>
              <div className={styles.rentRange}>
                <div className={styles.rentRange1}>Rent Range</div>
                <div className={styles.dropdownlink2}>
                  <div className={styles.text2}>Select rent range</div>
                  <img
                    className={styles.vectorIcon2}
                    alt=""
                    src="/vector@2x.png"
                  />
                </div>
              </div>
              <button className={styles.searchCta}>
                <div className={styles.search}>Search</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
