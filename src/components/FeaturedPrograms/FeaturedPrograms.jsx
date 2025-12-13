import React from 'react'
import styles from "./FeaturedPrograms.module.css"
import Link from 'next/link'

const certifications = [
    {
        logo: "EdShed",
        title: "EdShed Certified Educator",
        info: "4 Modules • 8 Hours • Certificate Included",
        rating: "4.8 (234 educators certified)",
    },
    {
        logo: "SME",
        title: "Assessment Design Specialist",
        info: "6 Modules • 12 Hours • Certificate Included",
        rating: "4.9 (156 educators certified)",
    },
];

const FeaturedPrograms = () => {
    return (
        <section className="section" style={{ background: "var(--white)" }}>
            <div className="container">
                <div className={styles.sectionheader}>
                    <h2 className={styles.sectiontitle}>🏆Featured Certification Programs</h2>
                    <Link href="/certificates" className={styles.viewall}>View All →</Link>
                </div>
                <div className={styles.certgrid}>
                    {certifications.map((item, index) => (
                        <div key={index} className={styles.certcard}>
                            <div className={styles.certlogo}>{item.logo}</div>

                            <div className={styles.certcontent}>
                                <h3>{item.title}</h3>
                                <p>{item.info}</p>

                                <div className={styles.rating}>
                                    <span>⭐</span> {item.rating}
                                </div>

                                <button className="btn btnsecondary btnsm" style={{ marginTop: "12px" }}>
                                    Start Program
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FeaturedPrograms