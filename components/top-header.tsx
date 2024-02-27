import type { NextPage } from "next";
import styles from "./top-header.module.css";

const TopHeader: NextPage = () => {
  return (
    <header className={styles.topHeader}>
      <div className={styles.topContainer}>
        <div className={styles.logo}>
          <img
            className={styles.houselineIcon}
            loading="lazy"
            alt=""
            src="/houseline.svg"
          />
          <div className={styles.name}>
            <h2 className={styles.reis}>REIS</h2>
            <div className={styles.realState}>Real State</div>
          </div>
        </div>
        <div className={styles.navigationRight}>
          <div className={styles.navigation}>
            <div className={styles.home}>HOME</div>
            <div className={styles.aboutUs}>ABOUT US</div>
            <div className={styles.ourAgents}>OUR AGENTS</div>
            <div className={styles.properties}>PROPERTIES</div>
            <div className={styles.gallery}>GALLERY</div>
            <div className={styles.blog}>BLOG</div>
            <div className={styles.contactUs}>CONTACT US</div>
            <div className={styles.search}>SEARCH</div>
          </div>
          <div className={styles.hamburger}>
            <img
              className={styles.hamburgerMenuIcon}
              alt=""
              src="/hamburgermenu@2x.png"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
