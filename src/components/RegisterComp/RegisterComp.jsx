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
                {webinar.whoCanAttend && webinar.whoCanAttend.map((audience) => {
                  // Map keys to icons
                  const audienceIcons = {
                    leaders: "🏫",
                    teachers: "👩‍🏫",
                    heads: "👨‍💼",
                    counsellors: "🧠",
                    tuition_owners: "🎒",
                    coaching_owners: "🎓",
                    consultants: "🤝",
                  };

                  return (
                    <div className={styles.audienceitem} key={audience._id}>
                      <div className={styles.icon}>
                        {audienceIcons[audience.key] || "👤"}
                      </div>
                      <div className={styles.label}>
                        {audience.title}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className={styles.contentsection}>
              {webinar.trainer[0] && (
                <>
                  <h2>Meet Your Trainer</h2>
                  <div className={styles.trainers}>
                    {webinar.trainer && webinar.trainer.map((t, index) => (
                      <div className={styles.trainercard} key={index}>
                        <div className={styles.photo}>
                          <img
                            src={t.trainerImage?.url || "/defaultImage.webp"}
                            alt={t.trainerName || "Trainer"}
                          />
                        </div>
                        <div>
                          <h3>{t.trainerName}</h3>
                          <div className={styles.title}>
                            {t.designation}{t.worksAt ? `, ${t.worksAt}` : ""}
                          </div>
                          <p>{t.description}</p>
                        </div>
                      </div>
                    ))}
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


            <div className={styles.contentsection}>
              <h2>🎁 Exclusive Attendee Benefits</h2>
              <div className={styles.benefitbox}>
                <h3>{webinar.attendeeBenefits.title}</h3>
                {/* <p style={{ marginBottom: "16px", opacity: 0.9 }}>
                  30-Day Free Trial of {webinar.organisedBy}
                </p> */}
                <ul>
                  {webinar.attendeeBenefits?.features?.map((feature, index) => (
                    <li key={index} className={styles.benefits}>{feature}</li>
                  ))}
                </ul>
                <Link href={webinar.link || "/"}
                  target={webinar.link ? "_blank" : "_self"}
                  rel={webinar.link ? "noopener noreferrer" : undefined} className={styles.productlink}>
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
                  <span className={styles.icon}>🌐</span> {webinar.mode}
                </div>
              </div>
              <div className={styles.regdivider}></div>
              {/* <div className={`${styles.regprice} ${styles.free}`}>FREE</div> */}
              <div className={`${styles.regprice} ${webinar.isFree ? styles.free : ""}`}>
                {webinar.isFree ? "FREE" : `₹${webinar.price}`}
              </div>

              {/* <button className="btn btnprimary btnblock">REGISTER NOW</button> */}
              <Link href={href} className={buttonClass}>
                {buttonText}
              </Link>
              {webinar.bonus && webinar.bonus.title && (
                <div className={styles.regbonus}>
                  <div className={styles.label}>🎁 BONUS</div>
                  <p>{webinar.bonus.title}.</p>
                  <p>{webinar.bonus.description || ""}</p>
                </div>
              )}

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
