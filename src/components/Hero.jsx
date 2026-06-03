import React from "react";
import styles from "../styles/Hero.module.css";
import heroF1 from "../assets/hero-f1.png";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bgText}>CASTLANE</div>

      <div className={styles.content}>
        <div className={styles.left}>
          <p className={styles.eyebrow}>YOUR LANE FOR DIECAST.</p>

          <h1 className={styles.headline}>
            COLLECT
            <br />
            THE
            <br />
            EXCEPTIONAL
          </h1>

          <p className={styles.subtext}>
            Discover premium diecast models curated
            <br />
            for collectors who appreciate precision,
            <br />
            craftsmanship and automotive culture.
          </p>

          <a href="#collections" className={styles.ctaBtn}>
            Explore Collection <span className={styles.arrow}>→</span>
          </a>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNum}>500+</span>
              <span className={styles.statLabel}>MODELS</span>
            </div>

            <div className={styles.stat}>
              <span className={styles.statNum}>50+</span>
              <span className={styles.statLabel}>BRANDS</span>
            </div>

            <div className={styles.stat}>
              <span className={styles.statNum}>10K+</span>
              <span className={styles.statLabel}>COLLECTORS</span>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.carWrapper}>
            <img
              src={heroF1}
              alt="Premium Diecast F1 Model"
              className={styles.carImg}
            />
          </div>
        </div>
      </div>
    </section>
  );
}