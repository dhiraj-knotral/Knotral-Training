"use client";

import React, { useEffect, useState } from 'react'
import styles from "./Header.module.css"
import Link from 'next/link'
import { usePathname } from 'next/navigation';

import { FiMenu, FiX } from "react-icons/fi";


const Header = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className={styles.header}>
      {/* <div className={`${styles.container} container`}> */}
      <div className={styles.container}>

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
          {/* <Link href="/contact-us" className="btn btnprimary">Get in touch</Link> */}
          <Link href="/sign-up" className="btn btnprimary">Sign Up</Link>
        </div>



        {/* Hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <Link
            href="/for-teachers"
            onClick={() => setMenuOpen(false)}
            className={`${styles.mobileLink} ${pathname === "/for-teachers" ? styles.active : ""
              }`}
          >
            For Teachers
          </Link>

          <Link
            href="/for-schools"
            onClick={() => setMenuOpen(false)}
            className={`${styles.mobileLink} ${pathname === "/for-schools" ? styles.active : ""
              }`}
          >
            For Schools
          </Link>

          <Link
            href="/for-solution-providers"
            onClick={() => setMenuOpen(false)}
            className={`${styles.mobileLink} ${pathname === "/for-solution-providers" ? styles.active : ""
              }`}
          >
            For Solution Providers
          </Link>
        </div>
      )}
    </header>
  )
}

export default Header