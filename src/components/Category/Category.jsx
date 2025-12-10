import React from 'react'
import styles from "./Category.module.css"

const categories = [
  { icon: "📐", name: "Mathematics" },
  { icon: "📖", name: "Literacy" },
  { icon: "🔬", name: "Science" },
  { icon: "💻", name: "EdTech" },
  { icon: "🧠", name: "SEL & Wellbeing" },
  { icon: "🎨", name: "Arts & Music" },
  { icon: "🌍", name: "Languages" },
  { icon: "📋", name: "NEP 2020" },
  { icon: "👶", name: "Early Years" },
  { icon: "✅", name: "Assessment" },
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
    <div key={index} className={styles.categorypill}>
      <div className={styles.icon}>{item.icon}</div>
      <div className={styles.name}>{item.name}</div>
    </div>
  ))}
    </div>
  </div>
</section>
  )
}

export default Category