import React from 'react'
import styles from "./Webinars.module.css"
import Link from 'next/link'


const webinarsData = [
    {
        id: 1,
        logo: "SME",
        title: "Formative Assessment Strategies That Actually Work",
        date: "Dec 15, 2025",
        time: "4:00 PM IST",
        duration: "60 min",
        provider: "Save My Exams",
        badges: ["LIVE", "FREE"],
        price: "FREE",
        actionText: "Register",
        actionType: "primary",
        link: "/webinars/formative-assessment",
    },
    {
        id: 2,
        logo: "EdShed",
        title: "Gamifying Spelling & Math for Primary Grades",
        date: "Dec 18, 2025",
        time: "5:30 PM IST",
        duration: "45 min",
        provider: "EdShed UK",
        badges: ["LIVE", "CERTIFICATION"],
        price: "FREE",
        actionText: "Register",
        actionType: "primary",
        link: "/webinars/gamifying-spelling",
    },
    {
        id: 3,
        logo: "IDL",
        title: "Supporting Dyslexic Learners in Mainstream Classrooms",
        date: "Dec 20, 2025",
        time: "4:00 PM IST",
        duration: "75 min",
        provider: "IDL Group",
        badges: ["LIVE"],
        price: "₹499",
        actionText: "Register",
        actionType: "primary",
        link: "/webinars/dyslexic-learners",
    },
    {
        id: 4,
        logo: "Tilli",
        title: "Building SEL into Your Daily Classroom Routine",
        date: "Watch Anytime",
        time: "",
        duration: "45 min",
        provider: "Tilli",
        badges: ["ON-DEMAND", "FREE"],
        price: "FREE",
        actionText: "Watch Now",
        actionType: "secondary",
        link: "/webinars/building-sel",
    },
    {
        id: 5,
        logo: "Math",
        title: "Adaptive Learning: How AI Personalizes Math Practice",
        date: "Dec 22, 2025",
        time: "6:00 PM IST",
        duration: "50 min",
        provider: "Mathspace",
        badges: ["LIVE", "FREE"],
        price: "FREE",
        actionText: "Register",
        actionType: "primary",
        link: "/webinars/adaptive-learning",
    },
    {
        id: 6,
        logo: "EdThena",
        title: "AI-Powered Teacher Coaching: Getting Started",
        date: "Watch Anytime",
        time: "",
        duration: "4 modules",
        provider: "EdThena",
        badges: ["ON-DEMAND", "CERTIFICATION"],
        price: "FREE",
        actionText: "Start Course",
        actionType: "secondary",
        link: "/webinars/ai-teacher-coaching",
    },
];




const WebinarsList = () => {
    return (
        <>
            <section className="pagehero compact">
                <div className="container">
                    <h1>All Training Sessions</h1>
                    <p>
                        Browse live webinars, on-demand sessions, and certification programs from 45+ global EdTech brands.
                    </p>
                </div>
            </section>

            <section className="section" style={{ paddingTop: "32px" }}>
                <div className="container">
                    <div className={styles.filterbar}>
                        <div>
                            <label>Category:</label>
                            <select>
                                <option>All Categories</option>
                                <option>Mathematics</option>
                                <option>Literacy</option>
                                <option>Science</option>
                                <option>EdTech</option>
                                <option>SEL & Wellbeing</option>
                                <option>Assessment</option>
                                <option>NEP 2020</option>
                            </select>
                        </div>

                        <div>
                            <label>Type:</label>
                            <select>
                                <option>All Types</option>
                                <option>Live Webinar</option>
                                <option>On-Demand</option>
                                <option>Certification</option>
                            </select>
                        </div>

                        <div>
                            <label>Price:</label>
                            <select>
                                <option>All</option>
                                <option>Free Only</option>
                                <option>Paid</option>
                            </select>
                        </div>

                        <input
                            type="text"
                            className={styles.searchinput}
                            placeholder="Search by topic or provider..."
                        />
                    </div>

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: "24px",
                        }}
                    >
                        <div className={styles.trainingscount}>
                            Showing <strong>24</strong> of <strong>156</strong> trainings
                        </div>

                        <div>
                            <label className={styles.filterlabel}>
                                Sort by:
                            </label>
                            <select className={styles.filterselect}>
                                <option>Date (Newest First)</option>
                                <option>Date (Oldest First)</option>
                                <option>Most Popular</option>
                                <option>Provider A-Z</option>
                            </select>
                        </div>
                    </div>

                    {/* <div className={styles.webinarlist}>

                        <div className={styles.webinarcard}>
                            <div className={styles.splogo}>SME</div>
                            <div className={styles.content}>
                                <div className={styles.badges}>
                                    <span className="badge badgelive">LIVE</span>
                                    <span className="badge badgefree">FREE</span>
                                </div>
                                <h3>Formative Assessment Strategies That Actually Work</h3>
                                <div className={styles.meta}>
                                    <span>📅 Dec 15, 2025</span>
                                    <span>🕓 4:00 PM IST</span>
                                    <span>⏱️ 60 min</span>
                                    <span>👤 Save My Exams</span>
                                </div>
                            </div>
                            <div className={styles.actions}>
                                <div className={`${styles.price} ${styles.free}`}>FREE</div>
                                <Link href="/" className="btn btnprimary">Register</Link>
                            </div>
                        </div>

                        <div className={styles.webinarcard}>
                            <div className={styles.splogo}>EdShed</div>
                            <div className={styles.content}>
                                <div className={styles.badges}>
                                    <span className="badge badgelive">LIVE</span>
                                    <span className="badge badgecert">CERTIFICATION</span>
                                </div>
                                <h3>Gamifying Spelling & Math for Primary Grades</h3>
                                <div className={styles.meta}>
                                    <span>📅 Dec 18, 2025</span>
                                    <span>🕓 5:30 PM IST</span>
                                    <span>⏱️ 45 min</span>
                                    <span>👤 EdShed UK</span>
                                </div>
                            </div>
                            <div className={styles.actions}>
                                <div className={`${styles.price} ${styles.free}`}>FREE</div>
                                <Link href="/" className="btn btnprimary">Register</Link>
                            </div>
                        </div>

                        <div className={styles.webinarcard}>
                            <div className={styles.splogo}>IDL</div>
                            <div className={styles.content}>
                                <div className={styles.badges}>
                                    <span className="badge badgelive">LIVE</span>
                                </div>
                                <h3>Supporting Dyslexic Learners in Mainstream Classrooms</h3>
                                <div className={styles.meta}>
                                    <span>📅 Dec 20, 2025</span>
                                    <span>🕓 4:00 PM IST</span>
                                    <span>⏱️ 75 min</span>
                                    <span>👤 IDL Group</span>
                                </div>
                            </div>
                            <div className={styles.actions}>
                                <div className={styles.price}>₹499</div>
                                <Link href="/" className="btn btnprimary">Register</Link>
                            </div>
                        </div>

                        <div className={styles.webinarcard}>
                            <div className={styles.splogo}>Tilli</div>
                            <div className={styles.content}>
                                <div className={styles.badges}>
                                    <span className="badge badgeondemand">ON-DEMAND</span>
                                    <span className="badge badgefree">FREE</span>
                                </div>
                                <h3>Building SEL into Your Daily Classroom Routine</h3>
                                <div className={styles.meta}>
                                    <span>▶️ Watch Anytime</span>
                                    <span>⏱️ 45 min</span>
                                    <span>👤 Tilli</span>
                                </div>
                            </div>
                            <div className={styles.actions}>
                                <div className={`${styles.price} ${styles.free}`}>FREE</div>
                                <a href="#" className="btn btnsecondary">Watch Now</a>
                            </div>
                        </div>

                        <div className={styles.webinarcard}>
                            <div className={styles.splogo}>Math</div>
                            <div className={styles.content}>
                                <div className={styles.badges}>
                                    <span className="badge badgelive">LIVE</span>
                                    <span className="badge badgefree">FREE</span>
                                </div>
                                <h3>Adaptive Learning: How AI Personalizes Math Practice</h3>
                                <div className={styles.meta}>
                                    <span>📅 Dec 22, 2025</span>
                                    <span>🕓 6:00 PM IST</span>
                                    <span>⏱️ 50 min</span>
                                    <span>👤 Mathspace</span>
                                </div>
                            </div>
                            <div className={styles.actions}>
                                <div className={`${styles.price} ${styles.free}`}>FREE</div>
                                <a href="#" className="btn btnprimary">Register</a>
                            </div>
                        </div>

                        <div className={styles.webinarcard}>
                            <div className={styles.splogo}>EdThena</div>
                            <div className={styles.content}>
                                <div className={styles.badges}>
                                    <span className="badge badgeondemand">ON-DEMAND</span>
                                    <span className="badge badgecert">CERTIFICATION</span>
                                </div>
                                <h3>AI-Powered Teacher Coaching: Getting Started</h3>
                                <div className={styles.meta}>
                                    <span>▶️ Watch Anytime</span>
                                    <span>⏱️ 4 modules</span>
                                    <span>👤 EdThena</span>
                                </div>
                            </div>
                            <div className={styles.actions}>
                                <div className={`${styles.price} ${styles.free}`}>FREE</div>
                                <a href="#" className="btn btnsecondary">Start Course</a>
                            </div>
                        </div>

                    </div> */}

                    <div className={styles.webinarlist}>
                        {webinarsData.map((item) => (
                            <div key={item.id} className={styles.webinarcard}>
                                <div className={styles.splogo}>{item.logo}</div>

                                <div className={styles.content}>
                                    <div className={styles.badges}>
                                        {item.badges.map((badge, i) => (
                                            <span
                                                key={i}
                                                className={`badge ${badge === "LIVE"
                                                    ? "badgelive"
                                                    : badge === "FREE"
                                                        ? "badgefree"
                                                        : badge === "CERTIFICATION"
                                                            ? "badgecert"
                                                            : "badgeondemand"
                                                    }`}
                                            >
                                                {badge}
                                            </span>
                                        ))}
                                    </div>

                                    <h3>{item.title}</h3>

                                    <div className={styles.meta}>
                                        <span>📅 {item.date}</span>
                                        {item.time && <span>🕓 {item.time}</span>}
                                        <span>⏱️ {item.duration}</span>
                                        <span>👤 {item.provider}</span>
                                    </div>
                                </div>

                                <div className={styles.actions}>
                                    <div
                                        className={`${styles.price} ${item.price === "FREE" ? styles.free : ""
                                            }`}
                                    >
                                        {item.price}
                                    </div>

                                    <Link
                                        href="/register"
                                        className={`btn ${item.actionType === "primary" ? "btnprimary" : "btnsecondary"
                                            }`}
                                    >
                                        {item.actionText}
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>



                    <div className={styles.pagination}>
                        <a href="#" className={styles.active}>1</a>
                        <a href="#">2</a>
                        <a href="#">3</a>
                        <a href="#">4</a>
                        <a href="#">...</a>
                        <a href="#">12</a>
                        <a href="#">→</a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WebinarsList
