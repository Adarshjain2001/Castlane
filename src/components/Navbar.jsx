import React, { useState, useEffect } from 'react'
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#" className={styles.logo}>CASTLANE</a>

        <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ''}`}>
          <li><a href="#collections" onClick={() => setMenuOpen(false)}>Collections</a></li>
          <li><a href="#arrivals" onClick={() => setMenuOpen(false)}>New Arrivals</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
        </ul>

        <a href="#" className={styles.shopBtn}>Shop</a>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={menuOpen ? styles.bar1Open : styles.bar1}></span>
          <span className={menuOpen ? styles.bar2Open : styles.bar2}></span>
          <span className={menuOpen ? styles.bar3Open : styles.bar3}></span>
        </button>
      </div>
    </nav>
  )
}