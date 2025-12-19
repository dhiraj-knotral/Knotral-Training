import React from "react";
import styles from "./Register.module.css"
import Link from "next/link";
import moment from "moment";

const RegisterComp = ({ webinar }) => {

  // Determine button text and style based on webinar actions
  const buttonText = webinar.actions?.canStartProgram
    ? "Start Course"
    : webinar.actions?.canEnroll
      ? "Watch Now"
      : "Register Now";

  const buttonClass = webinar.actions?.canStartProgram || webinar.actions?.canEnroll
    ? "btn btnsecondary btnblock"
    : "btn btnprimary btnblock";

  // Determine link destination (e.g., registration page)
const href = webinar.actions?.canStartProgram || webinar.actions?.canEnroll
  ? `/course/${webinar.slug}`     // Course page
  : `/register/${webinar._id}`;  // Registration page

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
                <img
                  src={webinar.logo.url}
                  alt="Logo"
                  style={{ width: "65px", height: "65px" }}
                />
              </div>
              {webinar.isLive && (
                <span className="badge badgelive">LIVE WEBINAR</span>
              )}
            </div>

            <h1>
              {webinar.title}
            </h1>
            <p className={styles.description}>
              {webinar.description}
            </p>

            <div className={styles.contentsection}>
              <h2>What You'll Learn</h2>
              <ul>
                {webinar.features.map((item) => (
                  <li key={item._id}>{item.feature}</li>
                ))}
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
              {webinar.trainer[0] && (
                <>
                  <h2>Meet Your Trainer</h2>
                  <div className={styles.trainercard}>
                    <div className={styles.photo}>
                      <img
                        src={webinar.trainer[0].trainerImage?.url || "/defaultImage.webp"}
                        alt={webinar.trainer[0].trainerName || "Trainer"}
                      />
                    </div>
                    <div>
                      <h3>{webinar.trainer[0].trainerName}</h3>
                      <div className={styles.title}>{webinar.trainer[0].designation}, {webinar.trainer[0].worksAt}</div>
                      <p>
                        {webinar.trainer[0].description}
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className={styles.contentsection}>
              <h2>Session Agenda</h2>
              <div className={styles.agendalist}>
                {webinar?.sessionAgenda?.map((item) => (
                  <div key={item._id} className={styles.agendaitem}>
                    <div className={styles.time}>{item.time}</div>
                    <div className={styles.topic}>{item.title}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* <div className={styles.contentsection}>
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
            </div> */}


            <div className={styles.contentsection}>
              <h2>🎁 Exclusive Attendee Benefits</h2>
              <div className={styles.benefitbox}>
                <h3>{webinar.attendeeBenefits.title}</h3>
                <p style={{ marginBottom: "16px", opacity: 0.9 }}>
                  30-Day Free Trial of {webinar.organisedBy}
                </p>
                <ul>
                  {webinar.attendeeBenefits?.features?.map((feature, index) => (
                    <li key={index} className={styles.benefits}>{feature}</li>
                  ))}
                </ul>
                <Link href="/register" className={styles.productlink}>
                  Learn More About {webinar.organisedBy} →
                </Link>
              </div>
            </div>
          </div>

          {/* Registration Card */}
          <div>
            <div className={styles.registrationcard}>
              <div className={styles.regmeta}>
                <div className={styles.item}>
                  <span className={styles.icon}>📅</span>{moment(webinar.date).format("MMM DD, YYYY")}
                </div>
                <div className={styles.item}>
                  <span className={styles.icon}>🕓</span> {webinar.startTime}
                </div>
                <div className={styles.item}>
                  <span className={styles.icon}>⏱️</span> {webinar.duration}
                </div>
                <div className={styles.item}>
                  <span className={styles.icon}>🌐</span> Online (Zoom)
                </div>
              </div>
              <div className={styles.regdivider}></div>
              {/* <div className={`${styles.regprice} ${styles.free}`}>FREE</div> */}
              <div className={`${styles.regprice} ${webinar.isFree ? styles.free : ""}`}>
                {webinar.isFree ? "FREE" : `₹${webinar.price}`}
              </div>

              {/* <button className="btn btnprimary btnblock">REGISTER NOW</button> */}
              <Link href={href}  className={buttonClass}>
                {buttonText}
              </Link>
              <div className={styles.regbonus}>
                <div className={styles.label}>🎁 BONUS</div>
                <p>Free trial of {webinar.organisedBy} for all attendees</p>
              </div>
              <div className={styles.regdivider}></div>
              <div className={styles.regfooter}>
                <p>👥 142 registered • 🔥 Limited seats</p>
                <p style={{ marginTop: "12px" }}>
                  <Link href="/">📧 Get reminder</Link> • <Link href="/">📲 Add to calendar</Link>
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
