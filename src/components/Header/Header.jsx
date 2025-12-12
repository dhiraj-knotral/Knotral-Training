"use client";

import React from 'react'
import styles from "./Header.module.css"
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      {/* <div className={`${styles.container} container`}> */}
              <div className= {styles.container}>

            <div className={styles.logoWrapper}>
        <Link href="/" className={styles.logo}>
          <img
            src="/7.png"       // path in /public folder
            alt="Knotral Logo"
            className={styles.logoImage}
          />
        </Link>
        </div>
        <nav className={styles.navLinks}>
          <Link
            href="/for-teachers"
            className={`${styles.navLink} ${pathname === "/for-teachers" ? styles.active : ""
              }`}
          >
            For Teachers
          </Link>
          <Link
            href="/for-schools"
            className={`${styles.navLink} ${pathname === "/for-schools" ? styles.active : ""
              }`}
          >
            For Schools</Link>
          <Link 
          href="/for-solution-providers"
            className={`${styles.navLink} ${pathname === "/for-solution-providers" ? styles.active : ""
              }`}
          >
            For Solution Providers</Link>
        </nav>
        <div className={styles.headerActions}>
          <button className="btn btnghost">Login</button>
          <button className="btn btnprimary">Sign Up</button>
        </div>
      </div>
    </header>
  )
}

export default Header