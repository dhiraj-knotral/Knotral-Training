import React from 'react';
import styles from "./CtaSection.module.css";

const ctaData = [
  {
    title: "For Schools",
    description: "Upskill your entire faculty with curated PD packages from global education leaders.",
    buttonText: "Talk to Us",
  },
  {
    title: "For Solution Providers",
    description: "Reach 50,000+ Indian educators through Knotral Trainings.",
    buttonText: "List Your Trainings",
  },
];

const CtaSection = () => {
  return (
    <section className={styles.ctasection}>
      <div className="container">
        <div className={styles.ctagrid}>
          {ctaData.map((item, index) => (
            <div className={styles.ctabox} key={index}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <button className="btn">{item.buttonText}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
