import React from "react";
import styles from "./CertificatesComp.module.css"
import Link from "next/link";

const certificatesData = [
    {
        id: 1,
        logo: "EdShed",
        title: "EdShed Certified Educator",
        provider: "By EdShed UK",
        price: "FREE",
        modulesCount: "4 MODULES",
        duration: "8 hours total",
        schedule: "Self-paced",
        rating: "⭐ 4.8 (234 certified)",
        buttonText: "Start Program",
        modules: [
            "Introduction to Gamified Learning",
            "EdShed Spelling: Implementation",
            "EdShed Math: Classroom Strategies",
            "Assessment & Progress Tracking",
        ],
    },
    {
        id: 2,
        logo: "SME",
        title: "Assessment Design Specialist",
        provider: "By Save My Exams",
        price: "FREE",
        modulesCount: "6 MODULES",
        duration: "12 hours total",
        schedule: "6 live sessions",
        rating: "⭐ 4.9 (156 certified)",
        buttonText: "Start Program",
        modules: [
            "Principles of Effective Assessment",
            "Formative vs Summative Strategies",
            "Creating Quality Questions",
            "Digital Assessment Tools",
            "Data-Driven Instruction",
            "NEP 2020 Competency Mapping",
        ],
    },
    {
        id: 3,
        logo: "IDL",
        title: "Inclusive Education Champion",
        provider: "By IDL Group",
        price: "₹999",
        modulesCount: "5 MODULES",
        duration: "10 hours total",
        schedule: "5 live sessions",
        rating: "⭐ 4.7 (89 certified)",
        buttonText: "Enroll Now",
        modules: [
            "Understanding Learning Differences",
            "Dyslexia: Identification & Support",
            "Dyscalculia: Strategies That Work",
            "Technology for Inclusive Classrooms",
            "Creating IEPs & Progress Monitoring",
        ],
    },
    {
        id: 4,
        logo: "EdThena",
        title: "AI-Powered Teacher Coach",
        provider: "By EdThena",
        price: "FREE",
        modulesCount: "4 MODULES",
        duration: "6 hours total",
        schedule: "On-demand",
        rating: "⭐ 4.8 (67 certified)",
        buttonText: "Start Program",
        modules: [
            "Introduction to AI in Education",
            "Video-Based Teacher Reflection",
            "AI Coach: Platform Mastery",
            "Building a Coaching Culture",
        ],
    },
];


const CertificatesComp = () => {
    return (
        <>
            <section
                className="pagehero compact"
                style={{
                    background:
                        "linear-gradient(135deg, #1E3A5F 0%, #1E3A5F 100%)",
                }}
            >
                <div className="container">
                    <span
                        className="badge"
                        style={{
                            background: "rgba(255,255,255,0.2)",
                            color: "white",
                            marginBottom: "16px",
                            display: "inline-block",
                        }}
                    >
                        🏆 CERTIFICATION PROGRAMS
                    </span>
                    <h1>Earn Credentials That Matter</h1>
                    <p>
                        Complete multi-session programs and earn certificates from global
                        EdTech leaders. Boost your resume and advance your career.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className={styles.certherocard}>
                        <div>
                            <h2>Why Get Certified?</h2>
                            <p>
                                Knotral certifications are more than attendance badges. They
                                demonstrate mastery of specific skills and tools — recognized by
                                school management across India.
                            </p>
                            <a
                                href="#"
                                className="btn"
                                style={{ background: "white", color: "#1E3A5F" }}
                            >
                                Browse All Programs
                            </a>
                        </div>

                        <div className={styles.stats}>
                            <div className={styles.stat}>
                                <div className={styles.num}>30+</div>
                                <div className={styles.label}>Programs</div>
                            </div>
                            <div className={styles.stat}>
                                <div className={styles.num}>2,400+</div>
                                <div className={styles.label}>Certified</div>
                            </div>
                            <div className={styles.stat}>
                                <div className={styles.num}>93%</div>
                                <div className={styles.label}>Completion</div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.sectionheader} style={{ marginTop: "48px" }}>
                        <h2 className={styles.sectiontitle}>
                            Featured Certification Programs
                        </h2>
                    </div>

                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "32px",
                        }}
                    >
                        <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
                            {certificatesData.map((cert) => (
                                <div key={cert.id} className={styles.certprogramcard}>
                                    <div className={styles.header}>
                                        <div>
                                            <div className={styles.splogo}>{cert.logo}</div>
                                            <h3>{cert.title}</h3>
                                            <div className={styles.provider}>{cert.provider}</div>
                                        </div>

                                        <div className={styles.metabadge}>
                                            <span className="badge badgefree">{cert.price}</span>
                                            <span className="badge badgecert">{cert.modulesCount}</span>
                                        </div>
                                    </div>

                                    <div className={styles.modules}>
                                        {cert.modules.map((mod, index) => (
                                            <div key={index} className={styles.module}>
                                                <div className={styles.num}>MODULE {index + 1}</div>
                                                {mod}
                                            </div>
                                        ))}
                                    </div>

                                    <div className={styles.footer}>
                                        <div className={styles.info}>
                                            <span>⏱️ {cert.duration}</span>
                                            <span>📅 {cert.schedule}</span>
                                            <span>{cert.rating}</span>
                                        </div>
                                        <Link href="#" className="btn btnprimary">
                                            {cert.buttonText}
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                    <div className={styles.pagination} style={{ marginTop: "48px" }}>
                        <a href="#" className={styles.active}>
                            1
                        </a>
                        <a href="#">2</a>
                        <a href="#">3</a>
                        <a href="#">→</a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default CertificatesComp;
