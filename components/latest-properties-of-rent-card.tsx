import type { NextPage } from "next";
import styles from "./latest-properties-of-rent-card.module.css";

const LatestPropertiesOfRentCard: NextPage = () => {
  return (
    <section className={styles.latestPropertiesOfRentCard}>
      <div className={styles.contents}>
        <div className={styles.text}>
          <h1 className={styles.contactUs}>Contact us</h1>
          <div className={styles.vestibulumAnteIpsum}>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className={styles.form}>
          <div className={styles.formText}>
            <h3 className={styles.enquiryForm}>Enquiry Form</h3>
            <div className={styles.areYouLooking}>
              Are you looking for details about a certain property? Ask us a
              question using the form below.
            </div>
          </div>
          <form className={styles.formFields}>
            <div className={styles.inputRow}>
              <div className={styles.input}>
                <input
                  className={styles.firstName}
                  placeholder="First name"
                  type="text"
                />
              </div>
              <div className={styles.input1}>
                <input
                  className={styles.lastName}
                  placeholder="Last name"
                  type="text"
                />
              </div>
            </div>
            <div className={styles.destinationNameInput}>
              <input
                className={styles.emailId}
                placeholder="Email id"
                type="text"
              />
            </div>
            <div className={styles.input2}>
              <input
                className={styles.commentsOrQuestions}
                placeholder="Comments or questions"
                type="text"
              />
            </div>
            <button className={styles.formSubmitButton}>
              <div className={styles.submit}>Submit</div>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LatestPropertiesOfRentCard;
