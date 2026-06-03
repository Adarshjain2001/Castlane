import React from 'react'
import styles from "../styles/Brands.module.css";

const brands = [
  'Hot Wheels', 'Matchbox', 'Majorette', 'Tomica', 'Mini GT', 'Bburago', 'Maisto',
  'Hot Wheels', 'Matchbox', 'Majorette', 'Tomica', 'Mini GT', 'Bburago', 'Maisto',
]

export default function Brands() {
  return (
    <section className={styles.brands} id="brands">
      <div className={styles.ticker}>
        <div className={styles.track}>
          {brands.map((brand, i) => (
            <React.Fragment key={i}>
              <span className={styles.brandName}>{brand}</span>
              <span className={styles.dot}>·</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}