"use client";

import React, { useMemo, useState } from "react";
import styles from "./Hero.module.css"
import Link from "next/link";

const Hero = ({ webinars }) => {
    const [searchText, setSearchText] = useState("");

    // Filter webinars by search text (case-insensitive)
    const filteredWebinars = useMemo(() => {
        if (!searchText) return webinars;
        return webinars.filter(w =>
            w.title.toLowerCase().includes(searchText.toLowerCase()) ||
            (w.category && w.category.toLowerCase().includes(searchText.toLowerCase())) ||
            (w.provider && w.provider.toLowerCase().includes(searchText.toLowerCase()))
        );
    }, [searchText, webinars]);

    // Generate popular tags dynamically from filtered webinars
    const popularTags = useMemo(() => {
        // Collect all categories from filtered webinars
        const allCategories = filteredWebinars
            .map(w => w.category)
            .filter(Boolean);

        // Count frequency of each category
        const tagCount = {};
        allCategories.forEach(tag => {
            tagCount[tag] = (tagCount[tag] || 0) + 1;
        });

        // Sort tags by frequency and take top 4
        const sortedTags = Object.keys(tagCount).sort(
            (a, b) => tagCount[b] - tagCount[a]
        );

        return sortedTags.slice(0, 4);
    }, [filteredWebinars]);
    return (
        <section className={styles.hero}>

            <div className="container">
                <h1>
                    Professional Development
                    <br />
                    from Global Education Leaders
                </h1>

                <p>Live webinars • Certifications • Classroom-ready strategies</p>

                <div className={styles.searchBar}>
                    <input
                        type="text"
                        placeholder="Search trainings by category...."
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                </div>

                <div className={styles.popularTags}>
                    {/* <span>NEP 2020</span>
                    <span>Formative Assessment</span>
                    <span>EdTech Integration</span>
                    <span>Differentiation</span> */}
                    {popularTags.map(tag => (
                        <Link
                            key={tag}
                            href={`/webinars?page=1&category=${encodeURIComponent(tag)}`}
                            className={styles.popularTagSpan} // style like a span
                        >
                            <span>{tag}</span>
                        </Link>))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
