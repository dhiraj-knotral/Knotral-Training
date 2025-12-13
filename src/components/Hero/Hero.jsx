import React from "react";
import styles from "./Hero.module.css"

const Hero = () => {
    return (
        <section className={styles.hero}>
            
            <div className="container">
                <h1>
                    Free Professional Development
                    <br />
                    from Global EdTech Leaders
                </h1>

                <p>Live webinars • Certifications • Classroom-ready strategies</p>

                <div className={styles.searchBar}>
                    <input
                        type="text"
                        placeholder="Search trainings by topic, subject, or provider..."
                    />
                </div>

                <div className={styles.popularTags}>
                    <span>NEP 2020</span>
                    <span>Formative Assessment</span>
                    <span>EdTech Integration</span>
                    <span>Differentiation</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
