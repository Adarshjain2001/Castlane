import React from 'react'
import styles from "../styles/LatestDrops.module.css";

import Latest1 from "../assets/Latest_1.png";
import Latest2 from "../assets/Latest_2.png";
import Latest3 from "../assets/Latest_3.png";
import Latest4 from "../assets/Latest_4.png";

const products = [
  {
    name: 'Red Bull RB19',
    price: '₹699',
    img: Latest1,
  },
  {
    name: 'Ferrari SF23',
    price: '₹749',
    img: Latest2,
  },
  {
    name: 'Mercedes W14',
    price: '₹699',
    img: Latest3,
  },
  {
    name: 'McLaren MCL60',
    price: '₹799',
    img: Latest4,
  },
];

export default function LatestDrops() {
  return (
    <section className={styles.section} id="arrivals">
      <div className={styles.inner}>
        <div className={styles.header}>
          <div>
            <p className={styles.eyebrow}>NEW ARRIVALS</p>
            <h2 className={styles.title}>Latest Drops</h2>
          </div>

          <a href="#" className={styles.viewAll}>
            View all products <span>→</span>
          </a>
        </div>

        <div className={styles.grid}>
          {products.map((product, i) => (
            <div className={styles.card} key={i}>
              <div className={styles.imgWrapper}>
                <img
                  src={product.img}
                  alt={product.name}
                  className={styles.productImg}
                />
              </div>

              <div className={styles.info}>
                <div className={styles.meta}>
                  <span className={styles.productName}>
                    {product.name}
                  </span>
                  <span className={styles.price}>
                ₹<span className={styles.priceBlur}>799</span>
</span>
                </div>

                <a href="#" className={styles.viewBtn}>
                  View Details <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}