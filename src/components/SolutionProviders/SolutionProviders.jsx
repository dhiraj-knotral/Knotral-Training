import Link from 'next/link';
import React from 'react';
import styles from "./SolutionProviders.module.css"

const SolutionProviders = () => {
    return (
        <>
            <section className="pagehero leftalign">
                <div className="container">
                    <div className="grid2" style={{ alignItems: "center" }}>
                        <div>
                            <span className="badge badgenew" style={{ marginBottom: "16px" }}>
                                FOR EDTECH & PUBLISHERS
                            </span>
                            <h1 style={{ fontSize: "38px" }}>
                                Reach 50,000+ Indian Educators<br />Through Training.
                            </h1>
                            <p>
                                Use Knotral's training infrastructure to educate teachers about your
                                product. We handle logistics, you get qualified leads.
                            </p>
                            <div style={{ display: "flex", gap: "16px" }}>
                                <Link href="/" className="btn btnprimary btnlg">Become a Partner</Link>
                                <Link href="/" className="btn btnoutline btnlg">See How It Works</Link>
                            </div>
                        </div>

                        <div style={{ textAlign: "center" }}>
                            <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: "16px", padding: "40px" }}>
                                <div style={{ fontSize: "64px", fontWeight: "700" }}>45+</div>
                                <div style={{ opacity: "0.8" }}>Global brands already on Knotral</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section white">
                <div className="container">
                    <div className={`${styles.sectionheader} ${styles.center}`}>
                        <h2 className={styles.sectiontitle}>Why Partner with Knotral?</h2>
                    </div>

                    <div className={styles.spbenefitgrid}>
                        {[
                            { icon: "🎯", title: "Qualified Teacher Leads", text: "Teachers who attend trainings are already interested in solutions like yours. No cold outreach needed." },
                            { icon: "🇮🇳", title: "India Market Expertise", text: "We localize your training content for Indian teachers. Handle registrations, reminders, and follow-ups." },
                            { icon: "📊", title: "Full Analytics", text: "Track registrations, attendance, engagement, and trial sign-ups. Measure ROI on every training." },
                            { icon: "🔄", title: "Product Trial Integration", text: "Seamlessly offer free trials to attendees. Convert engaged teachers into users." },
                        ].map((item, i) => (
                            <div className={styles.spbenefitcard} key={i}>
                                <div className={styles.icon}>{item.icon}</div>
                                <div>
                                    <h4>{item.title}</h4>
                                    <p>{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div
                        className="grid2"
                        style={{ gap: "80px", alignItems: "flex-start" }}
                    >
                        <div>
                            <div className={styles.sectionheader}>
                                <h2 className={styles.sectiontitle}>How It Works</h2>
                            </div>

                            <div className={styles.processtimeline}>
                                <div className={styles.timelineitem}>
                                    <h4>1. Onboard Your Product</h4>
                                    <p>
                                        Share your product info, training topics, and goals. We create your
                                        provider profile on Knotral.
                                    </p>
                                </div>

                                <div className={styles.timelineitem}>
                                    <h4>2. Plan Your Training Calendar</h4>
                                    <p>
                                        Work with our team to schedule webinars, certification programs,
                                        or on-demand content.
                                    </p>
                                </div>

                                <div className={styles.timelineitem}>
                                    <h4>3. We Handle Promotion</h4>
                                    <p>
                                        We promote to our teacher database, handle registrations, send
                                        reminders, and manage the webinar.
                                    </p>
                                </div>

                                <div className={styles.timelineitem}>
                                    <h4>4. You Deliver Content</h4>
                                    <p>
                                        Your experts deliver the training. Focus on education, with
                                        product naturally integrated.
                                    </p>
                                </div>

                                <div className={styles.timelineitem}>
                                    <h4>5. Convert Attendees</h4>
                                    <p>
                                        Attendees get free trials. We share qualified leads. You nurture
                                        and convert.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div
                                className={styles.card}
                                style={{ border: "2px solid var(--accent-teal)" }}
                            >
                                <div className={styles.cardbody}>
                                    <h3 style={{ marginBottom: "24px" }}>Training Packages</h3>

                                    <div
                                        style={{
                                            marginBottom: "24px",
                                            paddingBottom: "24px",
                                            borderBottom: "1px solid var(--border-light)",
                                        }}
                                    >
                                        <div
                                            style={{
                                                fontSize: "14px",
                                                color: "var(--accent-teal)",
                                                fontWeight: 600,
                                                marginBottom: "4px",
                                            }}
                                        >
                                            SINGLE WEBINAR
                                        </div>
                                        <div style={{ fontSize: "28px", fontWeight: 700 }}>
                                            ₹25,000 - ₹50,000
                                        </div>
                                        <p
                                            style={{
                                                fontSize: "14px",
                                                color: "var(--text-secondary)",
                                            }}
                                        >
                                            One-time live training session
                                        </p>
                                    </div>

                                    <div
                                        style={{
                                            marginBottom: "24px",
                                            paddingBottom: "24px",
                                            borderBottom: "1px solid var(--border-light)",
                                        }}
                                    >
                                        <div
                                            style={{
                                                fontSize: "14px",
                                                color: "var(--accent-teal)",
                                                fontWeight: 600,
                                                marginBottom: "4px",
                                            }}
                                        >
                                            CERTIFICATION PROGRAM
                                        </div>
                                        <div style={{ fontSize: "28px", fontWeight: 700 }}>
                                            ₹1,00,000 - ₹2,00,000
                                        </div>
                                        <p
                                            style={{
                                                fontSize: "14px",
                                                color: "var(--text-secondary)",
                                            }}
                                        >
                                            4–6 module certification with branded certificates
                                        </p>
                                    </div>

                                    <div>
                                        <div
                                            style={{
                                                fontSize: "14px",
                                                color: "var(--accent-teal)",
                                                fontWeight: 600,
                                                marginBottom: "4px",
                                            }}
                                        >
                                            ANNUAL PARTNERSHIP
                                        </div>
                                        <div style={{ fontSize: "28px", fontWeight: 700 }}>Custom</div>
                                        <p
                                            style={{
                                                fontSize: "14px",
                                                color: "var(--text-secondary)",
                                            }}
                                        >
                                            Unlimited trainings, priority placement, dedicated support
                                        </p>
                                    </div>

                                    <a
                                        href="#"
                                        className="btn btnteal btnblock"
                                        style={{ marginTop: "24px" }}
                                    >
                                        Request Partnership Info
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section white">
                <div className="container">
                    <div className={`${styles.sectionheader} ${styles.center}`}>
                        <h2 className={styles.sectiontitle}>Trusted by Global EdTech Leaders</h2>
                    </div>

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            gap: "48px",
                            flexWrap: "wrap",
                            marginTop: "32px",
                        }}
                    >
                        <div style={{ textAlign: "center" }}>
                            <div style={{ fontWeight: 600, fontSize: "18px", color: "var(--text-secondary)" }}>
                                EdShed
                            </div>
                            <div style={{ fontSize: "13px", color: "var(--text-muted)" }}>UK</div>
                        </div>

                        <div style={{ textAlign: "center" }}>
                            <div style={{ fontWeight: 600, fontSize: "18px", color: "var(--text-secondary)" }}>
                                Save My Exams
                            </div>
                            <div style={{ fontSize: "13px", color: "var(--text-muted)" }}>UK</div>
                        </div>

                        <div style={{ textAlign: "center" }}>
                            <div style={{ fontWeight: 600, fontSize: "18px", color: "var(--text-secondary)" }}>
                                IDL Group
                            </div>
                            <div style={{ fontSize: "13px", color: "var(--text-muted)" }}>UK</div>
                        </div>

                        <div style={{ textAlign: "center" }}>
                            <div style={{ fontWeight: 600, fontSize: "18px", color: "var(--text-secondary)" }}>
                                Mathspace
                            </div>
                            <div style={{ fontSize: "13px", color: "var(--text-muted)" }}>Australia</div>
                        </div>

                        <div style={{ textAlign: "center" }}>
                            <div style={{ fontWeight: 600, fontSize: "18px", color: "var(--text-secondary)" }}>
                                EdThena
                            </div>
                            <div style={{ fontSize: "13px", color: "var(--text-muted)" }}>USA</div>
                        </div>

                        <div style={{ textAlign: "center" }}>
                            <div style={{ fontWeight: 600, fontSize: "18px", color: "var(--text-secondary)" }}>
                                +40 more
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default SolutionProviders;
