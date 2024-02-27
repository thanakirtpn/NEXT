import type { NextPage } from "next";
import styles from "./footer-section.module.css";

const FooterSection: NextPage = () => {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.footer}>
        <div className={styles.contactUs}>
          <div className={styles.logo}>
            <img className={styles.houselineIcon} alt="" src="/houseline.svg" />
            <div className={styles.reisParent}>
              <h3 className={styles.reis}>REIS</h3>
              <div className={styles.realState}>Real State</div>
            </div>
          </div>
          <div className={styles.contactDetails}>
            <h3 className={styles.contactUs1}>Contact Us</h3>
            <div className={styles.call123}>Call : +123 400 123</div>
            <div className={styles.praesentNullaMassa}>
              Praesent nulla massa, hendrerit vestibulum gravida in, feugiat
              auctor felis.
            </div>
            <div className={styles.emailExamplemailcom}>
              Email: example@mail.com
            </div>
          </div>
          <div className={styles.socialMedia}>
            <button className={styles.socialMediaCard}>
              <img
                className={styles.socialMediaLogo}
                alt=""
                src="/social-media-logo.svg"
              />
            </button>
            <button className={styles.socialMediaCard1}>
              <img
                className={styles.socialMediaLogo1}
                alt=""
                src="/social-media-logo-1.svg"
              />
            </button>
            <button className={styles.socialMediaCard2}>
              <img
                className={styles.socialMediaLogo2}
                alt=""
                src="/social-media-logo-2.svg"
              />
            </button>
            <div className={styles.socialMediaCard3}>
              <img
                className={styles.socialMediaLogo3}
                alt=""
                src="/social-media-logo-3.svg"
              />
            </div>
            <button className={styles.socialMediaCard4}>
              <img
                className={styles.socialMediaLogo4}
                alt=""
                src="/social-media-logo-4.svg"
              />
            </button>
          </div>
        </div>
        <div className={styles.features}>
          <h3 className={styles.features1}>Features</h3>
          <div className={styles.featuresSubCategories}>
            <div className={styles.home}>Home</div>
            <div className={styles.becomeAHost}>Become a Host</div>
            <div className={styles.pricing}>Pricing</div>
            <div className={styles.blog}>Blog</div>
            <div className={styles.contact}>Contact</div>
          </div>
        </div>
        <div className={styles.company}>
          <h3 className={styles.company1}>Company</h3>
          <div className={styles.companySubCategories}>
            <div className={styles.aboutUs}>About Us</div>
            <div className={styles.press}>Press</div>
            <div className={styles.contact1}>Contact</div>
            <div className={styles.careers}>Careers</div>
            <div className={styles.blog1}>Blog</div>
          </div>
        </div>
        <div className={styles.termsAndPolicies}>
          <h3 className={styles.teamAndPolicies}>Team and policies</h3>
          <div className={styles.termsAndPoliciesSubcategori}>
            <div className={styles.termsOfServies}>Terms of servies</div>
            <div className={styles.privacyPolicy}>Privacy Policy</div>
            <div className={styles.security}>Security</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
