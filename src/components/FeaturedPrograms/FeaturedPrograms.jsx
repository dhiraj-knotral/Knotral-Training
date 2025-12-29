import React from 'react'
import styles from "./FeaturedPrograms.module.css"
import Link from 'next/link'

export const certificationsStatic = [
    {
        title: "Reggio Emilia Certification for Professional Development",
        provider: "We Skoolhouse",
        slug: "reggio-emilia-certification",
        meta: "Early Years Educators • 5 Modules • 5 Hours",
        logo: {
            url: "/logo16.png",
            alt: "We Skoolhouse Logo",
        },
        cta: {
            text: "Get Certified",
            url: "https://www.weskoolhouseindia.com/reggio-emilia-certification-enroll-now",
        },
    },
    {
        title: "Social Emotional Learning Certification",
        provider: "Tilli Kids",
        slug: "sel-certification-tilli-kids",
        meta: "For Teachers of KG – Grade 5",
        logo: {
            url: "/logo5.png",
            alt: "Tilli Kids Logo",
        },
        cta: {
            text: "Join Webinar",
            url: "/", // replace if needed
        },
    },
];


const FeaturedPrograms = ({ webinars }) => {
    const certifiedWebinars = webinars.slice(0, 2);

    return (
        <section className="section" style={{ background: "var(--white)" }}>
            <div className="container">
                <div className={styles.sectionheader}>
                    <h2 className={styles.sectiontitle}>Featured Certification Programs</h2>
                    <Link href="/certificates?page=1" className={styles.viewall}>View All →</Link>
                </div>
                <div className={styles.certgrid}>
                    {certifiedWebinars.map((item, index) => (
                        <div key={index} className={styles.certcard}>
                            <div className={styles.certlogo}>
                                <img
                                    src={item.logo?.url}
                                    alt={item.title || "Certification Logo"}
                                />
                            </div>

                            <div className={styles.certcontent}>
                                <h3>{item.title}</h3>
                                {/* <p>{item.modules?.length} Modules • 8 Hours • Certificate Included</p> */}

                                <p>{item.meta}</p>


                                <div className={styles.rating}>
                                    {item.rating ? (
                                        <>
                                            <span>⭐</span> {item.rating}
                                        </>
                                    ) : (
                                        <>
                                            <span>⭐</span> 4.8 (234 educators certified)
                                        </>
                                    )}
                                </div>

                                {/* <Link href={`/${item.slug}`} className="btn btnsecondary btnsm" style={{ marginTop: "12px" }}>
                                    Start Program
                                </Link> */}
                                <Link  href={item.link || "/"} className="btn btnsecondary btnsm" style={{ marginTop: "12px" }}>
                                    Start Program
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default FeaturedPrograms