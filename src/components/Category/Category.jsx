import React from 'react'
import styles from "./Category.module.css"
import Link from 'next/link';

const categories = [
  { icon: "/cat1.png", name: "Franchise & Edupreneurs" },
  { icon: "/cat2.png", name: "Curriculum & Publishers" },
  { icon: "/cat9.png", name: "Early Years" },
  { icon: "/cat4.png", name: "EdTech & Digital Learning" },
  { icon: "/cat5.png", name: "SEL & Wellbeing" },
  { icon: "/cat6.png", name: "Teacher Professional Development" },
  { icon: "/cat7.png", name: "Inclusion & Special Needs" },
  { icon: "/cat8.png", name: "Higher Education" },
  { icon: "/cat3.png", name: "Corporate & Professional Development" },
  { icon: "/cat10.png", name: "Online & Alternate Schooling" },
];

const Category = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="sectionheader">
          <h2 className="sectiontitle">Browse by Category</h2>
        </div>
        <div className={styles.categorygrid}>
          {categories.map((item, index) => (
            <Link
              key={index}
              href={`/webinars?page=1&category=${encodeURIComponent(item.name)}`}
              className={styles.categorypill}
            >
               <img src={item.icon} alt={item.name} />
              <div className={styles.name}>{item.name}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Category