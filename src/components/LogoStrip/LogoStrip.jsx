import React from 'react';
import styles from "./LogoStrip.module.css";

const logos = [
  "/logo1.png",
  "/logo2.png",
  "/logo3.png",
  "/logo4.png",
  "/logo5.png",
  "/logo6.png",
  "/logo7.png",
  "/logo8.png",
  "/logo9.png",
  "/logo10.png",
  "/logo11.png",
  "/logo12.png",
  "/logo13.png",
  "/logo14.png",
  "/logo15.png",
  "/logo16.png",
  "/logo17.png",
  "/logo18.png",
  "/logo19.png",
  "/logo20.png",
  "/logo21.png",
  "/logo22.png",
  "/logo23.png",
  "/logo24.png",
  "/logo25.png",
];

const LogoStrip = () => {
  return (
    <section className={styles.logostrip}>
      <div className={`${styles.container} container`}>
        <div className={styles.slider}>
          <div className={styles.slideTrack}>
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className={styles.partnerlogo}>
                <img src={logo} alt="Partner logo" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoStrip;