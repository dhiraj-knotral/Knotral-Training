import React from 'react';
import styles from "./AboutUs.module.css";

const AboutUs = () => {
    return (
        <>
            <section className="pagehero compact">
                <div className="container">
                    <h1>About Knotral</h1>
                    <p>
                        Connecting global education solutions with Indian schools through
                        the power of teacher training.
                    </p>
                </div>
            </section>

            <section className="section white">
                <div className="container">
                    <div className={styles.aboutgrid}>
                        <div className={styles.aboutcontent}>
                            <h2>Our Story</h2>
                            <p>
                                Knotral was born from a simple observation: international EdTech
                                companies struggle to reach Indian teachers, and Indian teachers
                                lack access to world-class professional development.
                            </p>
                            <p>
                                We bridge this gap by creating a platform where global education
                                brands can train Indian educators on best practices — naturally
                                introducing their tools in the process.
                            </p>
                            <p>
                                The result? Teachers get free, high-quality PD. Solution
                                providers get qualified leads. Schools get better-equipped
                                faculty. Everyone wins.
                            </p>
                        </div>

                        <div className={styles.aboutimage}>
                            {/* Replace this with an actual image later */}
                            Team Photo / Illustration
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={`${styles.sectionheader} ${styles.center}`}>
                        <h2 className={styles.sectiontitle}>What We Believe</h2>
                    </div>

                    <div className={styles.valuesgrid}>
                        <div className={styles.valueitem}>
                            <div className={styles.icon}>🎓</div>
                            <h4>Teachers First</h4>
                            <p>
                                Everything we do starts with what helps teachers grow
                                professionally.
                            </p>
                        </div>

                        <div className={styles.valueitem}>
                            <div className={styles.icon}>🌍</div>
                            <h4>Global × Local</h4>
                            <p>
                                World-class content, adapted for Indian classroom realities.
                            </p>
                        </div>

                        <div className={styles.valueitem}>
                            <div className={styles.icon}>🤝</div>
                            <h4>Win-Win-Win</h4>
                            <p>
                                Teachers, schools, and solution providers all benefit from our
                                platform.
                            </p>
                        </div>

                        <div className={styles.valueitem}>
                            <div className={styles.icon}>📈</div>
                            <h4>Practical Impact</h4>
                            <p>
                                Every training should change something in the classroom
                                tomorrow.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section white">
                <div className="container">
                    <div
                        className="grid2"
                        style={{ gap: "64px", alignItems: "center" }}
                    >
                        <div>
                            <h2 className={styles.sectiontitle}>Part of India Market Entry</h2>

                            <p
                                style={{
                                    color: "var(--text-secondary)",
                                    marginBottom: "16px",
                                }}
                            >
                                Knotral is powered by India Market Entry (IME), a boutique
                                consulting firm that helps international education companies
                                establish and grow in India's K-12 market.
                            </p>

                            <p
                                style={{
                                    color: "var(--text-secondary)",
                                    marginBottom: "24px",
                                }}
                            >
                                With 20+ active clients including Express Publishing, Save My
                                Exams, EdThena, IDL Group, and more — IME brings deep expertise
                                in navigating India's unique education landscape.
                            </p>

                            <a
                                href="https://indiamarketentry.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btnsecondary"
                            >
                                Visit IME Website →
                            </a>
                        </div>

                        <div>
                            <div
                                className={styles.statsbar}
                                style={{
                                    margin: 0,
                                    display: "grid",
                                    gridTemplateColumns: "1fr 1fr",
                                    gap: "24px",
                                }}
                            >
                                <div className={styles.statitem}>
                                    <div className={styles.number}>20+</div>
                                    <div className={styles.label}>Active Clients</div>
                                </div>
                                <div className={styles.statitem}>
                                    <div className={styles.number}>45+</div>
                                    <div className={styles.label}>EdTech Brands</div>
                                </div>
                                <div className={styles.statitem}>
                                    <div className={styles.number}>5+</div>
                                    <div className={styles.label}>Years in India</div>
                                </div>
                                <div className={styles.statitem}>
                                    <div className={styles.number}>1000+</div>
                                    <div className={styles.label}>School Partnerships</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={`${styles.sectionheader} ${styles.center}`}>
                        <h2 className={styles.sectiontitle}>Leadership Team</h2>
                    </div>

                    <div className={styles.teamgrid}>
                        <div className={styles.teamcard}>
                            <div className={styles.photo}></div>
                            <h4>Dhiraj Taraku</h4>
                            <div className={styles.role}>Founder & Director</div>
                        </div>

                        <div className={styles.teamcard}>
                            <div className={styles.photo}></div>
                            <h4>Team Member</h4>
                            <div className={styles.role}>Head of Partnerships</div>
                        </div>

                        <div className={styles.teamcard}>
                            <div className={styles.photo}></div>
                            <h4>Team Member</h4>
                            <div className={styles.role}>Training Operations</div>
                        </div>

                        <div className={styles.teamcard}>
                            <div className={styles.photo}></div>
                            <h4>Team Member</h4>
                            <div className={styles.role}>School Relations</div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="section"
                style={{
                    background: "var(--bg-gradient)",
                    color: "var(--white)",
                    textAlign: "center",
                }}
            >
                <div className="container">
                    <h2 style={{ fontSize: "32px", marginBottom: "16px" }}>
                        Want to Work With Us?
                    </h2>

                    <p
                        style={{
                            opacity: 0.8,
                            marginBottom: "32px",
                            maxWidth: "500px",
                            marginLeft: "auto",
                            marginRight: "auto",
                        }}
                    >
                        Whether you're a teacher, school, or solution provider — we'd love
                        to hear from you.
                    </p>

                    <div
                        style={{
                            display: "flex",
                            gap: "16px",
                            justifyContent: "center",
                        }}
                    >
                        <a href="#" className="btn btnprimary btnlg">
                            Contact Us
                        </a>
                        <a href="#" className="btn btnoutline btnlg">
                            Join Our Team
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutUs;
