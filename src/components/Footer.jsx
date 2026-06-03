import React from "react";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <h2>CASTLANE</h2>
            <p>Your Lane for Diecast.</p>

            <div className={styles.socials}>
              <a href="#">IG</a>
              <a href="#">YT</a>
              <a href="#">FB</a>
            </div>
          </div>

          <div className={styles.links}>
            <h4>SHOP</h4>
            <a href="#">Collections</a>
            <a href="#">Brands</a>
            <a href="#">New Arrivals</a>
          </div>

          <div className={styles.links}>
            <h4>COMPANY</h4>
            <a href="#">About Us</a>
            <a href="#">Our Story</a>
            <a href="#">Contact</a>
          </div>

          <div className={styles.links}>
            <h4>HELP</h4>
            <a href="#">Shipping & Delivery</a>
            <a href="#">Returns</a>
            <a href="#">FAQ</a>
          </div>

          <div className={styles.newsletter}>
            <h4>STAY IN YOUR LANE</h4>

            <p>
              Get updates on new drops
              <br />
              and exclusive releases.
            </p>

            <div className={styles.inputBox}>
              <input
                type="email"
                placeholder="Enter your email"
              />

              <button>→</button>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>© 2026 Castlane. All rights reserved.</p>

          <div className={styles.bottomLinks}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}