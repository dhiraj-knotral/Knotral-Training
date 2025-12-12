import React from 'react';
import styles from "./LogoStrip.module.css";

const logos = [
  "EdShed",
  "Mathspace",
  "Save My Exams",
  "IDL Group",
  "Tilli",
  "EdThena",
  "+20 more",
];

const LogoStrip = () => {
  return (
    <section className={styles.logostrip}>
      <div className={`${styles.container} container`}>
        <div className={styles.slider}>
           <div className={styles.slideTrack}>
          {[...logos, ...logos].map((logo, index) => (
            <div key={index} className={styles.partnerlogo}>
              {logo}
            </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoStrip;