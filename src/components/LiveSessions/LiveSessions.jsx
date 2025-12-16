import React from 'react'
import styles from "./LiveSessions.module.css"
import Link from 'next/link';
import moment from "moment"

const LiveSessions = ({ webinars }) => {

  const liveWebinars = webinars.filter((webinar) => webinar.isLive);


  return (
    <section className="section" style={{ background: "var(--white)" }}>
      <div className="container">
        <div className="sectionheader">
          <h2 className="sectiontitle">🔴 Upcoming Live Sessions</h2>
          <Link href="/webinars?page=1" className="viewall">View All →</Link>
        </div>
        <div className={styles.cardgrid}>
          {liveWebinars.slice(0, 4).map((item, index) => (
            <div key={index} className={styles.trainingcard}>
              <div className={styles.cardheader}>
                {item.logo?.url && (
                  <div className={styles.splogo}>
                    <img src={item.logo.url} alt={item.title} />
                  </div>
                )}
                <span className="badge badgelive">LIVE</span>
              </div>

              <h3 className={styles.cardtitle}>{item.title}</h3>

              <div className={styles.cardmeta}>
                <span>📅 {moment(item.date).format("MMM DD, YYYY")}</span>
                <span>🕓 {item.startTime}</span>
              </div>

              <div className={styles.cardfooter}>
                <span
                  className={`${styles.cardprice} ${item.isFree ? styles.free : ""}`}
                >
                  {item.isFree ? "FREE" : `₹${item.price}`}
                </span>

                <button className="btn btnprimary btnsm">
                  <Link href={`/${item.slug}`} className={styles.buttonlink}>
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