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
        {logos.map((logo, index) => (
          <div key={index} className={styles.partnerlogo}>
            {logo}
          </div>
        ))}
      </div>
    </section>
  );
};

export default LogoStrip;