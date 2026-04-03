"use client";

import React from 'react'
import styles from "./UserDashboard.module.css";
import { useAuth } from '@/context/AuthContext';

const UserDashboard = () => {
  const { user, logout } = useAuth();


  const addToGoogleCalendar = (session) => {
    const start = new Date(session.startTime);
    const end = new Date(start.getTime() + session.duration * 60000);

    const formatDate = (date) =>
      date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE
  &text=${encodeURIComponent(session.title)}
  &dates=${formatDate(start)}/${formatDate(end)}
  &details=${encodeURIComponent(session.provider)}
  &location=${encodeURIComponent("Online")}`;

    window.open(url, "_blank");
  };

  return (
    <>
      <main className={styles.dashboardMain}>
        <div className={styles.greetingHero}>
          <div className={styles.greetingText}>
            <h1>
              Good morning, <em style={{ color: "var(--teal)" }}>{user?.name}</em> 
            </h1>

            <p>
              You have{" "}
              <strong style={{ color: "#fff" }}>
                2 sessions in progress
              </strong>{" "}
              and a live training coming up on{" "}
              <strong style={{ color: "var(--teal)" }}>
                18 April
              </strong>
              . You're 62% towards your annual CPD goal — keep it up!
            </p>

            <div style={{ display: "flex", gap: "10px", marginTop: "18px" }}>
              <a
                href="#"
                className="btn btnprimary"
              >
                Browse Library
              </a>

              <a
                href="#"
                className="btn btnoutline"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  borderColor: "rgba(255,255,255,0.2)",
                  color: "#fff",
                }}
              >
                View CPD Log
              </a>
            </div>
          </div>

          <div className={styles.cpdRingWrap}>
            {/* <div className={styles.cpdRing}>
              <svg width="96" height="96" viewBox="0 0 96 96">
                <circle
                  cx="48"
                  cy="48"
                  r="40"
                  fill="none"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="7"
                />

                <circle
                  cx="48"
                  cy="48"
                  r="40"
                  fill="none"
                  stroke="#00A693"
                  strokeWidth="7"
                  strokeDasharray="251.2"
                  strokeDashoffset="95.5"
                  strokeLinecap="round"
                />
              </svg>

              <div className={styles.cpdRingInner}>
                <div className={styles.cpdRingVal}>62%</div>
                <div className={styles.cpdRingLabel}>CPD Goal</div>
              </div>
            </div> */}

            <div className={styles.cpdDetails}>
              <div className={styles.cpdDetailsTitle}>This year</div>

              <div className={styles.cpdStatRow}>
                <div className={styles.cpdStat}>
                  <div className={styles.cpdStatVal}>18.5h</div>
                  <div className={styles.cpdStatLbl}>Logged</div>
                </div>

                <div className={styles.cpdStat}>
                  <div className={styles.cpdStatVal}>30h</div>
                  <div className={styles.cpdStatLbl}>Target</div>
                </div>
              </div>

              <div
                style={{
                  marginTop: "10px",
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.45)",
                }}
              >
                14 sessions · 6 certificates
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div
              className={styles.statCardAccent}
              style={{ background: "var(--teal)" }}
            ></div>

            <div
              className={styles.statIcon}
              style={{ background: "var(--teal-light-sp)" }}
            >
              ▷
            </div>

            <div className={styles.statLabel}>Sessions completed</div>

            <div className={styles.statValue}>14</div>

            <div className={`${styles.statDelta} ${styles.deltaUp}`}>
              ↑ +3 this month
            </div>
          </div>
{/* 
          <div className={styles.statCard}>
            <div
              className={styles.statCardAccent}
              style={{ background: "var(--gold)" }}
            ></div>

            <div
              className={styles.statIcon}
              style={{ background: "var(--gold-light)" }}
            >
              🏅
            </div>

            <div className={styles.statLabel}>Certificates earned</div>

            <div className={styles.statValue}>6</div>

            <div className={`${styles.statDelta} ${styles.deltaUp}`}>
              ↑ +1 this month
            </div>
          </div> */}

          {/* <div className={styles.statCard}>
            <div
              className={styles.statCardAccent}
              style={{ background: "var(--purple)" }}
            ></div>

            <div
              className={styles.statIcon}
              style={{ background: "var(--purple-light)" }}
            >
              ◑
            </div>

            <div className={styles.statLabel}>CPD hours logged</div>

            <div className={styles.statValue}>18.5h</div>

            <div className={`${styles.statDelta} ${styles.deltaUp}`}>
              ↑ +2.5h this week
            </div>
          </div> */}

          <div className={styles.statCard}>
            <div
              className={styles.statCardAccent}
              style={{ background: "var(--orange)" }}
            ></div>

            <div
              className={styles.statIcon}
              style={{ background: "var(--orange-light)" }}
            >
              ◈
            </div>

            <div className={styles.statLabel}>Upcoming sessions</div>

            <div className={styles.statValue}>3</div>

            <div className={`${styles.statDelta} ${styles.deltaNeutral}`}>
              Next 30 days
            </div>
          </div>
        </div>

<div className={styles.mainGrid}>

  {/* LEFT COLUMN */}
  <div className={styles.mainCol}>

    {/* CONTINUE WATCHING */}
    {/* <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h3>Continue learning</h3>

        <div className={styles.tabs}>
          <div className={`${styles.tab} ${styles.active}`}>In progress</div>
          <div className={styles.tab}>Saved</div>
        </div>
      </div>

      <div className={styles.cardBody}>
        <div className={styles.continueGrid}>

          <div className={styles.continueItem}>
            <div
              className={styles.thumb}
              style={{ background: "linear-gradient(135deg,#667eea,#764ba2)" }}
            >
              <div className={styles.thumbPlay}>▶</div>
              <div className={styles.thumbTime}>18m left</div>
            </div>

            <div className={styles.continueInfo}>
              <div className={styles.continueTitle}>
                Formative Assessment Strategies That Actually Work
              </div>

              <div className={styles.continueMeta}>
                Save My Exams · 45 min total
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div className={styles.progressBar} style={{ flex: 1 }}>
                  <div
                    className={styles.progressFill}
                    style={{ width: "65%" }}
                  ></div>
                </div>

                <span className={styles.progressPct}>65%</span>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 4, alignItems: "flex-end" }}>
              <span className="badge badgecert">CERT</span>
              <button className="btn btnsm btmprimary">
                  Resume
              </button>
            </div>
          </div>

          <div className={styles.continueItem}>
            <div
              className={styles.thumb}
              style={{ background: "linear-gradient(135deg,#11998e,#38ef7d)" }}
            >
              <div className={styles.thumbPlay}>▶</div>
              <div className={styles.thumbTime}>32m left</div>
            </div>

            <div className={styles.continueInfo}>
              <div className={styles.continueTitle}>
                Building SEL Skills Through Daily Classroom Activities
              </div>

              <div className={styles.continueMeta}>
                Tilli Kids · 52 min total
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <div className={styles.progressBar} style={{ flex: 1 }}>
                  <div
                    className={styles.progressFill}
                    style={{ width: "35%" }}
                  ></div>
                </div>

                <span className={styles.progressPct}>35%</span>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 4, alignItems: "flex-end" }}>
              <span className="badge badgefree">FREE</span>
              <button className="btn btnsm btmprimary">
                Resume
              </button>
            </div>
          </div>

        </div>
      </div>
    </div> */}

    {/* UPCOMING SESSIONS */}

    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h3>Upcoming registered sessions</h3>
        <a href="#">Browse live trainings →</a>
      </div>

      <div className={styles.cardBody}>

        <div className={styles.upcomingItem}>
          <div className={styles.dateChip}>
            <div className={styles.dateDay}>18</div>
            <div className={styles.dateMon}>Apr</div>
          </div>

          <div className={styles.upcomingInfo}>
            <div className={styles.upcomingTitle}>
              AI in IB Mathematics: Tools & Practical Integration
            </div>

            <div className={styles.upcomingMeta}>
              3:00 PM IST · Dr. Rajesh Kumar · Zoom · 90 min
            </div>

            <div style={{ display: "flex", gap: 6, marginTop: 7 }}>
              <span className="badge badgelive">LIVE</span>
              <span className="badge badgecert">CERTIFICATE</span>
              <span className={styles.chip}>⏰ 15 days away</span>
            </div>
          </div>

          <div className={styles.upcomingActions}>
            <button className="btn btnprimary btnsm">
              Add to Calendar
            </button>
            <button className="btn btnoutline btnsm" style={{ color: "#000" }}>
              View Details
            </button>
          </div>
        </div>


        <div className={styles.upcomingItem}>
          <div className={styles.dateChip}>
            <div className={styles.dateDay}>18</div>
            <div className={styles.dateMon}>Apr</div>
          </div>

          <div className={styles.upcomingInfo}>
            <div className={styles.upcomingTitle}>
              AI in IB Mathematics: Tools & Practical Integration
            </div>

            <div className={styles.upcomingMeta}>
              3:00 PM IST · Dr. Rajesh Kumar · Zoom · 90 min
            </div>

            <div style={{ display: "flex", gap: 6, marginTop: 7 }}>
              <span className="badge badgelive">LIVE</span>
              <span className="badge badgecert">CERTIFICATE</span>
              <span className={styles.chip}>⏰ 15 days away</span>
            </div>
          </div>

          <div className={styles.upcomingActions}>
            <button className="btn btnprimary btnsm">
              Add to Calendar
            </button>
            <button className="btn btnoutline btnsm" style={{ color: "#000" }}>
              View Details
            </button>
          </div>
        </div>

        <div className={styles.upcomingItem}>
          <div className={styles.dateChip}>
            <div className={styles.dateDay}>18</div>
            <div className={styles.dateMon}>Apr</div>
          </div>

          <div className={styles.upcomingInfo}>
            <div className={styles.upcomingTitle}>
              AI in IB Mathematics: Tools & Practical Integration
            </div>

            <div className={styles.upcomingMeta}>
              3:00 PM IST · Dr. Rajesh Kumar · Zoom · 90 min
            </div>

            <div style={{ display: "flex", gap: 6, marginTop: 7 }}>
              <span className="badge badgelive">LIVE</span>
              <span className="badge badgecert">CERTIFICATE</span>
              <span className={styles.chip}>⏰ 15 days away</span>
            </div>
          </div>

          <div className={styles.upcomingActions}>
            <button className="btn btnprimary btnsm">
              Add to Calendar
            </button>
            <button className="btn btnoutline btnsm" style={{ color: "#000" }}>
              View Details
            </button>
          </div>
        </div>

      </div>
    </div>


    {/* RECOMMENDED FOR YOU */}

<div className={styles.card}>
  <div className={styles.cardHeader}>
    <h3>Recommended for you</h3>
    <a href="#">View all →</a>
  </div>

  <div className={styles.cardBody}>
    <div className={styles.recGrid}>

      <div className={styles.recCard}>
        <div
          className={styles.recThumb}
          style={{ background: "linear-gradient(135deg,#4facfe,#00f2fe)" }}
        >
          <div className={styles.recThumbPlay}>▶</div>
        </div>

        <div className={styles.recBody}>
          <div className={styles.recTitle}>
            Interactive Math: Engaging the Reluctant Learner
          </div>

          <div className={styles.recMeta}>
            Number Hive · 41 min
          </div>

          <div className={styles.recTags}>
            <span
              className="badge badgefree"
              style={{ fontSize: "10px" }}
            >
              FREE
            </span>
          </div>
        </div>
      </div>

      <div className={styles.recCard}>
        <div
          className={styles.recThumb}
          style={{ background: "linear-gradient(135deg,#f093fb,#f5576c)" }}
        >
          <div className={styles.recThumbPlay}>▶</div>
        </div>

        <div className={styles.recBody}>
          <div className={styles.recTitle}>
            Differentiated Reading Instruction for Every Learner
          </div>

          <div className={styles.recMeta}>
            IDL Group · 38 min
          </div>

          <div className={styles.recTags}>
            <span
              className="badge badgecert"
              style={{ fontSize: "10px" }}
            >
              CERT
            </span>

          </div>
        </div>
      </div>

      <div className={styles.recCard}>
        <div
          className={styles.recThumb}
          style={{ background: "linear-gradient(135deg,#fa709a,#fee140)" }}
        >
          <div className={styles.recThumbPlay}>▶</div>
        </div>

        <div className={styles.recBody}>
          <div className={styles.recTitle}>
            NEP 2020: Competency-Based Assessment
          </div>

          <div className={styles.recMeta}>
            Knotral Academy · 55 min
          </div>

          <div className={styles.recTags}>
            <span
              className="badge badgefree"
              style={{ fontSize: "10px" }}
            >
              FREE
            </span>

          </div>
        </div>
      </div>

      <div className={styles.recCard}>
        <div
          className={styles.recThumb}
          style={{ background: "linear-gradient(135deg,#a8edea,#5dcaa5)" }}
        >
          <div className={styles.recThumbPlay}>▶</div>
        </div>

        <div className={styles.recBody}>
          <div className={styles.recTitle}>
            Early Years: Play-Based Learning Strategies
          </div>

          <div className={styles.recMeta}>
            WeSkool House · 48 min
          </div>

          <div className={styles.recTags}>
            <span
              className="badge badgenew"
              style={{ fontSize: "10px" }}
            >
              PAID
            </span>

          </div>
        </div>
      </div>

    </div>
  </div>
</div>

  </div>

  {/* RIGHT COLUMN */}

  <div className={styles.sideCol}>

  <div className={styles.card}>
  <div className={styles.cardHeader}>
    <h3>Session calendar</h3>
    <span className="badge badgeteal">April 2026</span>
  </div>

  <div className={styles.cardBody} style={{ paddingBottom: "12px" }}>
    
    <div className={styles.miniCalHeader}>
      <span className={styles.miniCalMonth}>April 2026</span>

      <div style={{ display: "flex", gap: "2px" }}>
        <button className={styles.calNav}>‹</button>
        <button className={styles.calNav}>›</button>
      </div>
    </div>

    <div className={styles.calGrid}>
      <div className={styles.calDayLabel}>Mo</div>
      <div className={styles.calDayLabel}>Tu</div>
      <div className={styles.calDayLabel}>We</div>
      <div className={styles.calDayLabel}>Th</div>
      <div className={styles.calDayLabel}>Fr</div>
      <div className={styles.calDayLabel}>Sa</div>
      <div className={styles.calDayLabel}>Su</div>

      {/* Row 1 */}
      <div className={`${styles.calDay} ${styles.otherMonth}`}>31</div>
      <div className={styles.calDay}>1</div>
      <div className={styles.calDay}>2</div>
      <div className={`${styles.calDay} ${styles.today} ${styles.hasEvent}`}>3</div>
      <div className={styles.calDay}>4</div>
      <div className={styles.calDay}>5</div>
      <div className={styles.calDay}>6</div>

      {/* Row 2 */}
      <div className={styles.calDay}>7</div>
      <div className={styles.calDay}>8</div>
      <div className={styles.calDay}>9</div>
      <div className={styles.calDay}>10</div>
      <div className={styles.calDay}>11</div>
      <div className={styles.calDay}>12</div>
      <div className={styles.calDay}>13</div>

      {/* Row 3 */}
      <div className={styles.calDay}>14</div>
      <div className={styles.calDay}>15</div>
      <div className={styles.calDay}>16</div>
      <div className={styles.calDay}>17</div>
      <div className={`${styles.calDay} ${styles.hasEvent}`}>18</div>
      <div className={styles.calDay}>19</div>
      <div className={styles.calDay}>20</div>

      {/* Row 4 */}
      <div className={styles.calDay}>21</div>
      <div className={styles.calDay}>22</div>
      <div className={styles.calDay}>23</div>
      <div className={styles.calDay}>24</div>
      <div className={`${styles.calDay} ${styles.hasEvent}`}>25</div>
      <div className={styles.calDay}>26</div>
      <div className={styles.calDay}>27</div>

      {/* Row 5 */}
      <div className={styles.calDay}>28</div>
      <div className={styles.calDay}>29</div>
      <div className={styles.calDay}>30</div>
      <div className={`${styles.calDay} ${styles.otherMonth}`}>1</div>
      <div className={`${styles.calDay} ${styles.otherMonth} ${styles.hasEvent}`}>2</div>
      <div className={`${styles.calDay} ${styles.otherMonth}`}>3</div>
      <div className={`${styles.calDay} ${styles.otherMonth}`}>4</div>
    </div>

    <div
      style={{
        marginTop: "14px",
        paddingTop: "12px",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div
        style={{
          fontSize: "11px",
          color: "var(--text-3)",
          marginBottom: "8px",
          textTransform: "uppercase",
          letterSpacing: "0.6px",
        }}
      >
        Upcoming
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "7px",
          fontSize: "12.5px",
        }}
      >
        <div
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "2px",
            background: "var(--orange)",
            flexShrink: 0,
          }}
        ></div>
        <span style={{ color: "var(--text-2)" }}>
          Apr 18 — AI in IB Maths
        </span>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "7px",
          fontSize: "12.5px",
        }}
      >
        <div
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "2px",
            background: "var(--green)",
            flexShrink: 0,
          }}
        ></div>
        <span style={{ color: "var(--text-2)" }}>
          Apr 25 — NEP 2020 Assessment
        </span>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          fontSize: "12.5px",
        }}
      >
        <div
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "2px",
            background: "var(--purple)",
            flexShrink: 0,
          }}
        ></div>
        <span style={{ color: "var(--text-2)" }}>
          May 2 — Diff. Reading
        </span>
      </div>
    </div>
  </div>
</div>

  </div>

</div>
      </main>
    </>
  );
};

export default UserDashboard;