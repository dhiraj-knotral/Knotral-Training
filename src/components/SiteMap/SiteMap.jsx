"use client";

import React from "react";
import Link from "next/link";
import styles from "./SiteMap.module.css";

const SiteMap = ({ productSlugs }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Pages</h1>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link href="/" className={styles.link}>Home</Link>
        </li>
        <li className={styles.item}>
          <Link href="/webinars?page=1" className={styles.link}>All Webinars</Link>
        </li>

        {/* 🔗 Dynamic product links */}
        {productSlugs.length > 0 && (
          <li className={styles.item}>
            <ul className={styles.sublist}>
              {productSlugs.map((product) => (
                <li key={product.slug} className={styles.subitem}>
                  <Link href={`/${product.slug}`} className={styles.link}>
                    {product.productName} by <strong>{product.organisedBy}</strong>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        )}

        <li className={styles.item}>
          <Link href="/privacy-policy" className={styles.link}>Privacy Policy</Link>
        </li>
        <li className={styles.item}>
          <Link href="/sitemap" className={styles.link}>Sitemap</Link>
        </li>
      </ul>
    </div>
  );
};

export default SiteMap;
