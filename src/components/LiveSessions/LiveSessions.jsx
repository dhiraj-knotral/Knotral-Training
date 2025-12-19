import React from 'react'
import styles from "./LiveSessions.module.css"
import Link from 'next/link';
import moment from "moment"

export const liveWebinarsStatic = [
  {
    title: "Gamified & Thematic Abacus Learning: Building Whole-Brain Development in Children",
    slug: "gamified-thematic-abacus-learning",
    date: "2026-01-06",
    startTime: "6:00 PM IST",
    isLive: true,
    isFree: true,
    price: 0,
    logo: {
      url: "/logo13.png",
      alt: "SmartyKids Logo",
    },
  },
  {
    title: "AI in IB Mathematics: What Works, What Matters, What’s Next",
    slug: "ai-in-ib-mathematics",
    date: "2026-01-08",
    startTime: "6:00 PM IST",
    isFree: true,
    isLive: true,
    price: 0,
    logo: {
      url: "/logo3.png",
      alt: "Mathspace Logo",
    },
  },
  {
    title: "Certified SEL Workshop for Teachers (KG to Grade 5)",
    slug: "certified-sel-workshop",
    date: "2026-01-13",
    startTime: "7:00 PM IST",
    isFree: false,
    isLive: true,

    price: 999,
    logo: {
      url: "/logo5.png",
      alt: "Tilli Kids Logo",
    },
  },
  // {
  //   title: "How Spelling Builds Literacy & Engagement?",
  //   slug: "how-spelling-builds-literacy",
  //   date: "2026-01-13",
  //   startTime: "6:00 PM IST",
  //   isFree: true,
  //   isLive: true,
  //   price: 0,
  //   logo: {
  //     url: "/logos/spelling-force.png",
  //     alt: "Spelling Force Logo",
  //   },
  // },
  {
    title: "Improving Student Engagement Through Evidence-Based Teaching Practice",
    slug: "improving-student-engagement",
    date: "2026-01-15",
    startTime: "6:00 PM IST",
    isFree: true,
    isLive: true,

    price: 0,
    logo: {
      url: "/logo1.png",
      alt: "Edthena Logo",
    },
  },
  {
    title: "From Teaching English to Offering a UK-Certified English Program",
    slug: "uk-certified-english-program",
    date: "2026-01-20",
    startTime: "6:00 PM IST",
    isFree: true,
    isLive: true,

    price: 0,
    logo: {
      url: "/logos/k2l.png",
      alt: "K2L Logo",
    },
  },
  {
    title: "Become Certified Reggio Emilia Teacher",
    slug: "reggio-emilia-teacher-certification",
    date: "2025-01-22",
    startTime: "6:00 PM IST",
    isFree: false,
    isLive: true,

    price: 999,
    logo: {
      url: "/logo16.png",
      alt: "We Skoolhouse Logo",
    },
  },
  {
    title: "Chess with Numbers: Teaching Maths Through Strategy, Not Memorisation",
    slug: "chess-with-numbers",
    date: "2026-01-27",
    startTime: "6:00 PM IST",
    isFree: true,
    isLive: true,

    price: 0,
    logo: {
      url: "/logos/number-hive.png",
      alt: "Number Hive Logo",
    },
  },
  {
    title: "Virtual Open Day",
    slug: "virtual-open-day-onfire-learning",
    date: "2026-01-29",
    startTime: "6:00 PM IST",
    isFree: true,
    price: 0,
    isLive: true,

    logo: {
      url: "/logos/onfire-learning.png",
      alt: "OnFire Learning Logo",
    },
  },
];

const LiveSessions = ({ webinars }) => {

  // const liveWebinars = webinars.filter((webinar) => webinar.isLive);

  const liveWebinars = liveWebinarsStatic.filter((webinar) => webinar.isLive);



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
                  {/* <Link href={`/${item.slug}`} className={styles.buttonlink}>
                    Register
                  </Link> */}
                   <Link href="/" className={styles.buttonlink}>
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