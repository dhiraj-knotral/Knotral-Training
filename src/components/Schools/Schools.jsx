import Link from "next/link";
import React from "react";
import styles from "./Schools.module.css"

const schools = [
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

const Schools = () => {
    return (
        <>
            <section className="pagehero" style={{ paddingBottom: "100px" }}>
                <div className="container">
                    <h1>
                        Upskill Your Entire Faculty.<br />Without the Budget Headache.
                    </h1>
                    <p>
                        Curated professional development from 45+ global EdTech brands.
                        Flexible packages for schools of all sizes.
                    </p>
                    <Link href="/" className="btn btnprimary btnlg">
                        Request School Demo
                    </Link>
                </div>
            </section>

            <section className="section" style={{ paddingTop: "0" }}>
                <div className="container">
                    <div className={styles.statsbar}>
                        <div className={styles.statitem}>
                            <div className={styles.number}>45+</div>
                            <div className={styles.label}>Global Brands</div>
                        </div>
                        <div className={styles.statitem}>
                            <div className={styles.number}>150+</div>
                            <div className={styles.label}>Training Sessions</div>
                        </div>
                        <div className={styles.statitem}>
                            <div className={styles.number}>30+</div>
                            <div className={styles.label}>Certification Programs</div>
                        </div>
                        <div className={styles.statitem}>
                            <div className={styles.number}>93%</div>
                            <div className={styles.label}>Satisfaction Rate</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section white">
                <div className="container">
                    <div className={`${styles.sectionheader} ${styles.center}`}>
                        <h2 className={styles.sectiontitle}>Why School Leaders Choose Knotral</h2>
                    </div>
                    <div className="grid3">
                        <div className={styles.card}>
                            <div className={styles.cardbody} style={{ textAlign: "center" }}>
                                <div className={styles.cardIcon}><img src="/school1.png" alt="Cost Effective" /></div>
                                <h3 style={{ marginBottom: "12px" }}>Cost Effective</h3>
                                <p style={{ color: "var(--text-secondary)", fontSize: "14px" }}>
                                    One subscription, unlimited trainings. Much cheaper than
                                    individual workshops or hiring external trainers.
                                </p>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <div className={styles.cardbody} style={{ textAlign: "center" }}>
                                <div className={styles.cardIcon}><img src="/school2.png" alt="Track Progress" /></div>
                                <h3 style={{ marginBottom: "12px" }}>Track Progress</h3>
                                <p style={{ color: "var(--text-secondary)", fontSize: "14px" }}>
                                    Dashboard shows which teachers attended what. Perfect for
                                    CBSE/CISCE audit requirements.
                                </p>
                            </div>
                        </div>

                        <div className={styles.card}>
                            <div className={styles.cardbody} style={{ textAlign: "center" }}>
                                <div className={styles.cardIcon}><img src="/school3.png" alt="Curated Content" /></div>
                                <h3 style={{ marginBottom: "12px" }}>Curated Content</h3>
                                <p style={{ color: "var(--text-secondary)", fontSize: "14px" }}>
                                    NEP 2020 aligned. No need to vet content — we've done the
                                    quality check.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={`${styles.sectionheader} ${styles.center}`}>
                        <h2 className={styles.sectiontitle}>School Packages</h2>
                        <p className={styles.sectionsubtitle}>
                            Choose the plan that fits your school
                        </p>
                    </div>

                    <div className={styles.pricingtable}>
                        <div className={styles.pricingcard}>
                            <div className={styles.header}>
                                <h3>Starter</h3>
                                <div className={styles.price}>
                                    ₹25,000<span>/year</span>
                                </div>
                                <p style={{ fontSize: "14px", opacity: 0.7 }}>
                                    Up to 30 teachers
                                </p>
                            </div>
                            <div className={styles.body}>
                                <ul>
                                    <li>✓ Access to all free webinars</li>
                                    <li>✓ 5 certification programs</li>
                                    <li>✓ Basic attendance tracking</li>
                                    <li>✓ Email support</li>
                                    <li>✗ Custom trainings</li>
                                    <li>✗ Dedicated account manager</li>
                                </ul>
                                <Link href="/" className="btn btnsecondary btnblock">
                                    Get Started
                                </Link>
                            </div>
                        </div>

                        <div className={`${styles.pricingcard} ${styles.featured}`}>
                            <div className={styles.header}>
                                <span
                                    className="badge badgenew"
                                    style={{ marginBottom: "8px" }}
                                >
                                    MOST POPULAR
                                </span>
                                <h3>Professional</h3>
                                <div className={styles.price}>
                                    ₹60,000<span>/year</span>
                                </div>
                                <p style={{ fontSize: "14px", opacity: 0.9 }}>
                                    Up to 80 teachers
                                </p>
                            </div>
                            <div className={styles.body}>
                                <ul>
                                    <li>✓ Everything in Starter</li>
                                    <li>✓ All certification programs</li>
                                    <li>✓ On-demand video library</li>
                                    <li>✓ Advanced analytics dashboard</li>
                                    <li>✓ 2 custom training sessions/year</li>
                                    <li>✓ Priority support</li>
                                </ul>
                                <Link href="/" className="btn btnteal btnblock">
                                    Get Started
                                </Link>
                            </div>
                        </div>

                        <div className={styles.pricingcard}>
                            <div className={styles.header}>
                                <h3>Enterprise</h3>
                                <div className={styles.price}>Custom</div>
                                <p style={{ fontSize: "14px", opacity: 0.7 }}>
                                    Unlimited teachers
                                </p>
                            </div>
                            <div className={styles.body}>
                                <ul>
                                    <li>✓ Everything in Professional</li>
                                    <li>✓ Unlimited custom trainings</li>
                                    <li>✓ White-label certificates</li>
                                    <li>✓ API integration</li>
                                    <li>✓ Dedicated account manager</li>
                                    <li>✓ On-site training option</li>
                                </ul>
                                <a href="#" className="btn btnsecondary btnblock">
                                    Contact Sales
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section white">
                <div className="container" style={{ textAlign: "center" }}>
                    <h2 className={styles.sectiontitle}>Trusted by Leading Schools</h2>
                    <p
                        style={{
                            color: "var(--text-secondary)",
                            marginBottom: "32px",
                        }}
                    >
                        Join 200+ schools across India
                    </p>

                    {/* <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "48px",
                            flexWrap: "wrap",
                            opacity: 0.6,
                        }}
                    >
                        <span
                            style={{ fontWeight: 600, color: "var(--text-secondary)" }}
                        >
                            DPS
                        </span>
                        <span
                            style={{ fontWeight: 600, color: "var(--text-secondary)" }}
                        >
                            Ryan International
                        </span>
                        <span
                            style={{ fontWeight: 600, color: "var(--text-secondary)" }}
                        >
                            Amity
                        </span>
                        <span
                            style={{ fontWeight: 600, color: "var(--text-secondary)" }}
                        >
                            Podar
                        </span>
                        <span
                            style={{ fontWeight: 600, color: "var(--text-secondary)" }}
                        >
                            Vibgyor
                        </span>
                    </div> */}
                    <div className={styles.slider}>
                        <div className={styles.slideTrack}>
                            {[...schools, ...schools].map((school, index) => (
                                <div key={index} className={styles.schoolItem}>
                                    <img src={school} alt="Partner logo" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="section"
                style={{
                    background: "var(--primary-navy)",
                    color: "var(--white)",
                    textAlign: "center",
                }}
            >
                <div className="container">
                    <h2 className={styles.heading}>
                        Ready to Transform Your School's PD?
                    </h2>
                    <p className={styles.content}>
                        Schedule a free demo and see how Knotral can work for your school.
                    </p>
                    <a href="#" className="btn btnprimary btnlg">
                        Book Free Demo
                    </a>
                </div>
            </section>
        </>
    );
};

export default Schools;
