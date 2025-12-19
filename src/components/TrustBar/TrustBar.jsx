import React from 'react'
import styles from "./TrustBar.module.css"

const TrustBar = () => {
  
  return (
   <section className={styles.trustbar}>
  <div className={`${styles.container} container`}>
    <div className={styles.trustitem}>
      <div className={styles.number}>12,000+</div>
      <div className={styles.label}>Teachers Trained</div>
    </div>
    <div className={styles.trustitem}>
      <div className={styles.number}>45+</div>
      <div className={styles.label}>Global EdTech Brands</div>
    </div>
    <div className={styles.trustitem}>
      <div className={styles.number}>150+</div>
      <div className={styles.label}>Sessions Completed</div>
    </div>
    <div className={styles.trustitem}>
      <div className={styles.number}>30+</div>
      <div className={styles.label}>Certification Programs</div>
    </div>
  </div>
</section>
  )
}

export default TrustBar