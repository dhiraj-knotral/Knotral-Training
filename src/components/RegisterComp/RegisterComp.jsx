import React from "react";
import styles from "./Register.module.css"
import Link from "next/link";

const RegisterComp = () => {
  return (
    <section className={styles.landingcontent}>
      <div className="container">
        <div className={styles.landinggrid}>
          {/* Main Content */}
          <div className={styles.maincontent}>
            <div className={styles.spbadge}>
              <div
                className={styles.logo}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 600,
                  color: "var(--secondary-blue)",
                }}
              >
                SME
              </div>
              <span className="badge badgelive">LIVE WEBINAR</span>
            </div>

            <h1>
              Formative Assessment Strategies That Actually Work in Indian
              Classrooms
            </h1>
            <p className={styles.description}>
              Learn practical techniques to assess student learning without
              adding to your workload. Walk away with ready-to-use templates.
            </p>

            <div className={styles.contentsection}>
              <h2>What You'll Learn</h2>
              <ul>
                <li>3 formative assessment techniques that take less than 5 minutes</li>
                <li>How to use exit tickets without paper waste</li>
                <li>Digital tools that auto-analyze student responses</li>
                <li>NEP 2020 competency mapping for assessments</li>
                <li>Ready-to-use templates you can implement tomorrow</li>
              </ul>
            </div>

            <div className={styles.contentsection}>
              <h2>Who Should Attend</h2>
              <div className={styles.audiencegrid}>
                <div className={styles.audienceitem}>
                  <div className={styles.icon}>👩‍🏫</div>
                  <div className={styles.label}>
                    Math Teachers
                    <br />
                    Gr. 6-12
                  </div>
                </div>
                <div className={styles.audienceitem}>
                  <div className={styles.icon}>📊</div>
                  <div className={styles.label}>
                    Academic
                    <br />
                    Coordinators
                  </div>
                </div>
                <div className={styles.audienceitem}>
                  <div className={styles.icon}>👨‍💼</div>
                  <div className={styles.label}>
                    Curriculum
                    <br />
                    Heads
                  </div>
                </div>
                <div className={styles.audienceitem}>
                  <div className={styles.icon}>🏫</div>
                  <div className={styles.label}>
                    School
                    <br />
                    Leaders
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.contentsection}>
              <h2>Meet Your Trainer</h2>
              <div className={styles.trainercard}>
                <div className={styles.photo}><img src="/defaultImage.webp" alt="Trainer"/></div>
                <div>
                  <h3>Dr. Sarah Mitchell</h3>
                  <div className={styles.title}>Head of Pedagogy, Save My Exams</div>
                  <p>
                    Former Math teacher with 15 years classroom experience. PhD
                    in Educational Assessment. Trained 5,000+ teachers globally.
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.contentsection}>
              <h2>Session Agenda</h2>
              <div className={styles.agendalist}>
                <div className={styles.agendaitem}>
                  <div className={styles.time}>0:00 - 0:10</div>
                  <div className={styles.topic}>Welcome & Context Setting</div>
                </div>
                <div className={styles.agendaitem}>
                  <div className={styles.time}>0:10 - 0:25</div>
                  <div className={styles.topic}>The 3 Assessment Techniques (with demos)</div>
                </div>
                <div className={styles.agendaitem}>
                  <div className={styles.time}>0:25 - 0:40</div>
                  <div className={styles.topic}>Live Tool Walkthrough</div>
                </div>
                <div className={styles.agendaitem}>
                  <div className={styles.time}>0:40 - 0:50</div>
                  <div className={styles.topic}>Implementation in Your Classroom</div>
                </div>
                <div className={styles.agendaitem}>
                  <div className={styles.time}>0:50 - 1:00</div>
                  <div className={styles.topic}>Q&A + Special Offer</div>
                </div>
              </div>
            </div>

            <div className={styles.contentsection}>
              <h2>🎁 Exclusive Attendee Benefits</h2>
              <div className={styles.benefitbox}>
                <h3>FREE for All Attendees</h3>
                <p style={{ marginBottom: "16px", opacity: 0.9 }}>
                  30-Day Free Trial of Save My Exams
                </p>
                <ul>
                  <li>Unlimited student accounts during trial</li>
                  <li>Full access to assessment library</li>
                  <li>Implementation support from our India team</li>
                </ul>
                <Link href="/register" className={styles.productlink}>
                  Learn More About Save My Exams →
                </Link>
              </div>
            </div>
          </div>

          {/* Registration Card */}
          <div>
            <div className={styles.registrationcard}>
              <div className={styles.regmeta}>
                <div className={styles.item}>
                  <span className={styles.icon}>📅</span> December 15, 2025
                </div>
                <div className={styles.item}>
                  <span className={styles.icon}>🕓</span> 4:00 PM IST
                </div>
                <div className={styles.item}>
                  <span className={styles.icon}>⏱️</span> 60 minutes
                </div>
                <div className={styles.item}>
                  <span className={styles.icon}>🌐</span> Online (Zoom)
                </div>
              </div>
              <div className={styles.regdivider}></div>
             <div className={`${styles.regprice} ${styles.free}`}>FREE</div>
              <button className="btn btnprimary btnblock">REGISTER NOW</button>
              <div className={styles.regbonus}>
                <div className={styles.label}>🎁 BONUS</div>
                <p>Free trial of Save My Exams for all attendees</p>
              </div>
              <div className={styles.regdivider}></div>
              <div className={styles.regfooter}>
                <p>👥 142 registered • 🔥 Limited seats</p>
                <p style={{ marginTop: "12px" }}>
                  <Link href="/register">📧 Get reminder</Link> • <Link href="/register">📲 Add to calendar</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterComp;
