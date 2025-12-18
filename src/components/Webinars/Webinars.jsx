"use client";

import React from 'react'
import styles from "./Webinars.module.css"
import Link from 'next/link'
import moment from 'moment';
import { useRouter, useSearchParams } from "next/navigation";



const WebinarsList = ({ webinars, pagination, filters }) => {
    const endItem = Math.min(pagination.page * pagination.limit, pagination.totalItems);

    const router = useRouter();
    const searchParams = useSearchParams();

    const updateFilter = (key, value) => {
        const params = new URLSearchParams(searchParams.toString());

        if (value) {
            params.set(key, value);
        } else {
            params.delete(key);
        }

        params.set("page", 1); // reset pagination on filter change

        router.push(`/webinars?${params.toString()}`);
    };

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
                            <select
                                value={filters.category}
                                onChange={(e) => updateFilter("category", e.target.value)}
                            >
                                <option value="">All Categories</option>
                                <option value="Mathematics">Mathematics</option>
                                <option value="Literacy">Literacy</option>
                                <option value="Science">Science</option>
                                <option value="EdTech">EdTech</option>
                                <option value="SEL & Wellbeing">SEL & Wellbeing</option>
                                <option value="Assessment">Assessment</option>
                                <option value="NEP 2020">NEP 2020</option>
                                <option value="Arts & Music">Arts & Music</option>
                                <option value="Languages">Languages</option>
                                <option value="Early Years">Early Years</option>
                            </select>
                        </div>

                        <div>
                            <label>Type:</label>
                            <select
                                value={filters.type}
                                onChange={(e) => updateFilter("type", e.target.value)}
                            >
                                <option value="">All Types</option>
                                <option value="live">Live Webinar</option>
                                <option value="ondemand">On-Demand</option>
                                <option value="certified">Certification</option>
                            </select>
                        </div>

                        <div>
                            <label>Price:</label>
                            <select
                                value={filters.price}
                                onChange={(e) => updateFilter("price", e.target.value)}
                            >
                                <option value="">All</option>
                                <option value="free">Free Only</option>
                                <option value="paid">Paid</option>
                            </select>
                        </div>

                        <input
                            type="text"
                            className={styles.searchinput}
                            placeholder="Search by topic or provider..."
                            defaultValue={filters.search}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    updateFilter("search", e.target.value);
                                }
                            }}
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
                            Showing <strong>{endItem}</strong> of <strong>{pagination.totalItems}</strong> trainings
                        </div>

                        <div>
                            <label className={styles.filterlabel}>
                                Sort by:
                            </label>
                            <select
                                className={styles.filterselect}
                                value={filters.sort}
                                onChange={(e) => updateFilter("sort", e.target.value)}
                            >
                                <option value="dateNew">Date (Newest First)</option>
                                <option value="dateOld">Date (Oldest First)</option>
                                <option value="popular">Most Popular</option>
                                <option value="provider">Provider A–Z</option>
                            </select>
                        </div>
                    </div>


                    <div className={styles.webinarlist}>
                        {webinars.map((item) => (
                            <React.Fragment key={item._id}>
                                <div className={styles.webinarcard}>
                                    <div className={styles.splogo}>
                                        <img
                                            src={item.logo.url}
                                            alt={item.title || "Webinar Logo"}
                                        />
                                    </div>

                                    <div className={styles.content}>
                                        <div className={styles.badges}>

                                            {item.isLive && (
                                                <span className="badge badgelive">LIVE</span>
                                            )}

                                            {item.isFree && (
                                                <span className="badge badgefree">FREE</span>
                                            )}

                                            {item.isCertified && (
                                                <span className="badge badgecert">CERTIFIED</span>
                                            )}

                                            {item.isOnDemand && (
                                                <span className="badge badgeondemand">ON DEMAND</span>
                                            )}

                                        </div>

                                        <h3>{item.title}</h3>

                                        <div className={styles.meta}>
                                            <span>📅 {moment(item.date).format("MMM DD, YYYY")}</span>
                                            {item.time && <span>🕓 {item.time}</span>}
                                            <span>⏱️ {item.duration}</span>
                                            <span>👤 {item.organisedBy}</span>
                                        </div>
                                    </div>

                                    <div className={styles.actions}>
                                        <div
                                            className={`${styles.price} ${item.isFree ? styles.free : ""}`}
                                        >
                                            {item.isFree ? "FREE" : `₹${item.price}`}
                                        </div>
                                        <Link
                                            href={`/${item.slug}`}
                                            className={`btn ${item.actions?.canStartProgram
                                                ? "btnsecondary"
                                                : item.actions?.canEnroll
                                                    ? "btnsecondary"
                                                    : "btnprimary"
                                                }`}
                                        >
                                            {item.actions?.canStartProgram
                                                ? "Start Course"
                                                : item.actions?.canEnroll
                                                    ? "Watch Now"
                                                    : "Register"}
                                        </Link>
                                    </div>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>

                    <div className={styles.pagination}>

                        {/* Previous Button */}
                        {pagination.page > 1 && (() => {
                            const params = new URLSearchParams(searchParams.toString());
                            params.set("page", pagination.page - 1);

                            return (
                                <Link
                                    href={`/webinars?${params.toString()}`}
                                    className={styles.pageBtn}
                                >
                                    ←
                                </Link>
                            );
                        })()}

                        {/* Numbered Pages */}
                        {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map((p) => {
                            const params = new URLSearchParams(searchParams.toString());
                            params.set("page", p);

                            return (
                                <Link
                                    key={p}
                                    href={`/webinars?${params.toString()}`}
                                    className={p === pagination.page ? styles.active : styles.pageBtn}
                                >
                                    {p}
                                </Link>
                            );
                        })}

                        {/* Next Button */}
                        {pagination.page < pagination.totalPages && (() => {
                            const params = new URLSearchParams(searchParams.toString());
                            params.set("page", pagination.page + 1);

                            return (
                                <Link
                                    href={`/webinars?${params.toString()}`}
                                    className={styles.pageBtn}
                                >
                                    →
                                </Link>
                            );
                        })()}

                    </div>
                </div>
            </section>
        </>
    )
}

export default WebinarsList
