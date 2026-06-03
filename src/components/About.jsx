import React from 'react'
import styles from "../styles/About.module.css";
import CastlaneImage from "../assets/Castlane.png";

export default function About() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.inner}>
        <div className={styles.left}>
          <p className={styles.eyebrow}>ABOUT CASTLANE</p>

          <h2 className={styles.title}>
            More Than<br />A Model.
          </h2>

          <p className={styles.desc}>
            Castlane is built for collectors who live and breathe cars.
            We bring you the world's finest diecast models, curated with
            passion, verified for quality and delivered with collectors in mind.
          </p>

          <a href="#" className={styles.storyBtn}>
            Our Story
          </a>
        </div>

        <div className={styles.right}>
          <div className={styles.imgWrapper}>
            <img
              src={CastlaneImage}
              alt="Castlane Collection"
              className={styles.img}
            />
          </div>
        </div>
      </div>
    </section>
  )
}