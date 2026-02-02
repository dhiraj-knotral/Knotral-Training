"use client"
import React from 'react'
import styles from "./PastSessions.module.css"
import Link from 'next/link';
import moment from "moment"
import { useRouter, useSearchParams } from 'next/navigation';

const PastSessions = ({ webinars }) => {
    const router = useRouter();

    const stoppedWebinars = webinars
        .filter((webinar) => webinar.isStopped)
        .sort((a, b) => moment(a.date).diff(moment(b.date)));

    return (
        <section className="section">
            <div className="container">
                <div className="sectionheader">
                    <h2 className="sectiontitle">Past Sessions</h2>
                    <Link href="/past-webinars?page=1" className="viewall">
                        View All →
                    </Link>
                </div>
                <div className={styles.cardgrid}>
                    {stoppedWebinars.slice(0, 4).map((item, index) => (
                        <div
                            key={index}
                            className={styles.trainingcardlink}
                            style={{ cursor: "pointer" }}
                        >
                            <div className={styles.trainingcard}>
                                <div className={styles.cardheader}>
                                    {item.logo?.url && (
                                        <Link
                                            href={item.link || "/"}
                                            target={item.link ? "_blank" : "_self"}
                                            rel={item.link ? "noopener noreferrer" : undefined}
                                            className={styles.productlink}
                                        >
                                            <div className={styles.splogo}>
                                                <img src={item.logo.url} alt={item.title} />
                                            </div>
                                        </Link>
                                    )}
                                    <span className={`badge ${item.isFree ? "badgefree" : "badgepaid"}`}>
                                        {item.isFree ? "FREE" : "PAID"}
                                    </span>
                                </div>

                                <h3 className={styles.cardtitle}>{item.title}</h3>

                                <div className={styles.cardmeta}>
                                    <span>📅 {moment(item.date).format("MMM DD, YYYY")}</span>
                                    <span>🕓 {item.startTime}</span>
                                </div>

                                <div className={styles.cardfooter}>
                                    {/* <span
                                        className={`${styles.cardprice} ${item.isFree ? styles.free : ""
                                            }`}
                                    >
                                        {item.isFree ? "FREE" : `₹${item.price}`}
                                    </span> */}

                                    <span
                                        className="btn btnprimary btnsm"
                                        onClick={(e) => {
                                            e.stopPropagation();

                                            // keep existing UTMs automatically
                                            router.push(`/${item.slug}`);
                                        }}
                                    >
                                        View
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PastSessions;

