import React from 'react'
import styles from "../styles/Collections.module.css";

import Collection1 from "../assets/Collection_1.png";
import Collection2 from "../assets/Collection_2.png";
import Collection3 from "../assets/Collection_3.png";
import Collection4 from "../assets/Collection_4.png";

const collections = [
  {
    title: 'FORMULA',
    img: Collection1,
    emoji: '🏎️'
  },
  {
    title: 'JDM',
    img: Collection2,
  },
  {
    title: 'HYPERCARS',
    img: Collection3,
  },
  {
    title: 'LIMITED EDITIONS',
    img: Collection4,
  },
];

export default function Collections() {
  return (
    <section className={styles.section} id="collections">
      <div className={styles.inner}>
        <div className={styles.header}>
          <div>
            <p className={styles.eyebrow}>COLLECTIONS</p>
            <h2 className={styles.title}>Featured Collections</h2>
          </div>

          <a href="#" className={styles.viewAll}>
            View all collections <span>→</span>
          </a>
        </div>

        <div className={styles.grid}>
          {collections.map((col, i) => (
            <a href="#" className={styles.card} key={i}>
              <img
                src={col.img}
                alt={col.title}
                className={styles.cardImg}
              />

              <div className={styles.overlay}>
                <h3 className={styles.cardTitle}>{col.title}</h3>

                <div className={styles.cardArrow}>
                  <span>●</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}