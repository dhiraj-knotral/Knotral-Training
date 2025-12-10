import React from 'react'
import styles from "./LiveSessions.module.css"
import Link from 'next/link';

const trainings = [
  {
    logo: "SME",
    title: "Formative Assessment Strategies That Actually Work",
    date: "Dec 15, 2025",
    time: "4:00 PM IST",
    price: "FREE",
    isFree: true,
  },
  {
    logo: "EdShed",
    title: "Gamifying Spelling & Math for Primary Grades",
    date: "Dec 18, 2025",
    time: "5:30 PM IST",
    price: "FREE",
    isFree: true,
  },
  {
    logo: "IDL",
    title: "Supporting Dyslexic Learners in Mainstream Classrooms",
    date: "Dec 20, 2025",
    time: "4:00 PM IST",
    price: "₹499",
    isFree: false,
  },
  {
    logo: "Tilli",
    title: "Building SEL into Your Daily Classroom Routine",
    date: "Dec 22, 2025",
    time: "6:00 PM IST",
    price: "FREE",
    isFree: true,
  },
];


const LiveSessions = () => {
  return (
    <section className="section" style={{ background: "var(--white)" }}>
      <div className="container">
        <div className="sectionheader">
          <h2 className="sectiontitle">🔴 Upcoming Live Sessions</h2>
          <Link href="/webinars" className="viewall">View All →</Link>
        </div>
        <div className={styles.cardgrid}>
          {trainings.map((item, index) => (
            <div key={index} className={styles.trainingcard}>
              <div className={styles.cardheader}>
                <div className={styles.splogo}>{item.logo}</div>
                <span className="badge badgelive">LIVE</span>
              </div>

              <h3 className={styles.cardtitle}>{item.title}</h3>

              <div className={styles.cardmeta}>
                <span>📅 {item.date}</span>
                <span>🕓 {item.time}</span>
              </div>

              <div className={styles.cardfooter}>
                <span
                  className={`${styles.cardprice} ${item.isFree ? styles.free : ""}`}
                >
                  {item.price}
                </span>

                <button className="btn btnprimary btnsm">
                  <Link href="/register" className={styles.buttonlink}>
                    Register
                  </Link>
                </button>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default LiveSessions