import Link from "next/link";
import React from "react";
import styles from "./Teachers.module.css"

const Teachers = () => {
  return (
    <>
      <section className="pagehero" style={{ paddingBottom: "120px" }}>
        <div className="container">
          <h1>
            Level Up Your Teaching.<br />For Free.
          </h1>
          <p>
            Access world-class professional development from global EdTech
            leaders. Get certified. Discover tools that actually work in your
            classroom.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
            <Link href="/" className="btn btnprimary btnlg">Browse Trainings</Link>
            <Link href="/" className="btn btnoutline btnlg">View Certifications</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={styles.valuecards}>
            <div className={styles.valuecard}>
              <div className={styles.icon}>🆓</div>
              <h3>100% Free Access</h3>
              <p>Most trainings are completely free. Get premium PD without spending from your pocket.</p>
            </div>
            <div className={styles.valuecard}>
              <div className={styles.icon}>🌍</div>
              <h3>Global Expertise</h3>
              <p>Learn from educators and experts from UK, Australia, US, and more — all adapted for Indian classrooms.</p>
            </div>
            <div className={styles.valuecard}>
              <div className={styles.icon}>🏆</div>
              <h3>Recognized Certificates</h3>
              <p>Earn credentials that boost your resume and help you stand out in your school.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section white">
        <div className="container">
          <div className="grid2" style={{ gap: "80px", alignItems: "center" }}>
            <div>
              <div className={styles.sectionheader}>
                <h2 className={styles.sectiontitle}>How It Works</h2>
                <p className="sectionsubtitle">Get started in 3 simple steps</p>
              </div>
              <div className={styles.howitworks}>
                <div className={styles.stepitem}>
                  <div className={styles.stepnumber}>1</div>
                  <div className={styles.stepcontent}>
                    <h3>Browse & Register</h3>
                    <p>Find trainings by subject, skill, or provider. Register with just your email and WhatsApp.</p>
                  </div>
                </div>
                <div className={styles.stepitem}>
                  <div className={styles.stepnumber}>2</div>
                  <div className={styles.stepcontent}>
                    <h3>Attend & Learn</h3>
                    <p>Join live webinars or watch on-demand. Get practical strategies you can use immediately.</p>
                  </div>
                </div>
                <div className={styles.stepitem}>
                  <div className={styles.stepnumber}>3</div>
                  <div className={styles.stepcontent}>
                    <h3>Get Certified & Try Tools</h3>
                    <p>Earn certificates and get free trials of the products featured in trainings.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.aboutimage}>
              {/* Replace this with an actual image */}
              <div style={{ textAlign: "center", padding: "40px", background: "#f5f5f5", borderRadius: "12px" }}>
                Teacher Learning Illustration
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={`${styles.sectionheader} ${styles.center}`}>
            <h2 className={styles.sectiontitle}>Why Teachers Love Knotral</h2>
          </div>

          <div className="grid2" style={{ maxWidth: "900px", margin: "0 auto" }}>
            <ul className={styles.benefitlist}>
              <li>
                <span className={styles.check}>✓</span>
                <div>
                  <strong>No cost to you</strong><br />
                  Free trainings funded by solution providers
                </div>
              </li>
              <li>
                <span className={styles.check}>✓</span>
                <div>
                  <strong>Practical, not theoretical</strong><br />
                  Walk away with ready-to-use strategies
                </div>
              </li>
              <li>
                <span className={styles.check}>✓</span>
                <div>
                  <strong>Fits your schedule</strong><br />
                  Live sessions and on-demand library
                </div>
              </li>
            </ul>

            <ul className={styles.benefitlist}>
              <li>
                <span className={styles.check}>✓</span>
                <div>
                  <strong>Career advancement</strong><br />
                  Certificates recognized by school management
                </div>
              </li>
              <li>
                <span className={styles.check}>✓</span>
                <div>
                  <strong>Discover new tools</strong><br />
                  Try before your school buys
                </div>
              </li>
              <li>
                <span className={styles.check}>✓</span>
                <div>
                  <strong>NEP 2020 aligned</strong><br />
                  Content mapped to latest policies
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section white">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className={styles.sectiontitle}>Ready to Start Learning?</h2>
          <p style={{ color: "var(--text-secondary)", marginBottom: "32px" }}>
            Join 12,000+ teachers already using Knotral
          </p>
          <Link href="#" className="btn btnprimary btnlg">
            Browse All Trainings →
          </Link>
        </div>
      </section>
    </>
  );
};

export default Teachers;
