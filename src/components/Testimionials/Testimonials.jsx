import React from "react";
import styles from "./Testimonials.module.css";


const testimonials = [
  {
    quote: "This was the most practical PD I've attended in 10 years. I used the exit ticket technique the very next day!",
    author: "Sneha M.",
    role: "Math Teacher, Delhi",
  },
  {
    quote: "The EdShed certification helped me get promoted to Academic Coordinator. It's recognized by my school management.",
    author: "Priya K.",
    role: "Academic Coordinator, Mumbai",
  },
  {
    quote: "Got certified and my school adopted the platform. Win-win for everyone including my students.",
    author: "Amit S.",
    role: "Science Teacher, Bangalore",
  },
];

const Testimonials = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="sectionheader">
          <h2 className="sectiontitle">What Teachers Say</h2>
        </div>

        <div className={styles.testimonialgrid}>
          {testimonials.map((item, index) => (
            <div className={styles.testimonialcard}key={index}>
              <div className={styles.avatar}>  <img src="/defaultImage.webp" alt="avatar" />
              </div>
              <blockquote>"{item.quote}"</blockquote>
              <div className={styles.author}>{item.author}</div>
              <div className={styles.role}>{item.role}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
