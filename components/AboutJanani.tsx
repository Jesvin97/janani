"use client";

import Link from "next/link";
import styles from "../styles/AboutJanani.module.css";

const petals = Array.from({ length: 12 });

export default function AboutJanani() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <span className={styles.label}>01 / ABOUT JANANI</span>

          <h2>
            WHAT IS
            <br />
            JANANI 2026?
          </h2>

          <p>
            JANANI 2026 is a national movement and an immersive experience
            celebrating the strength of motherhood, the potential of women,
            and their power to build stronger families, communities and a
            better nation.
          </p>

          <Link href="/about" className={styles.cta}>
            Discover More
            <span>↗</span>
          </Link>
        </div>

        <div className={styles.visual} aria-hidden="true">
          <div className={styles.outerText}>
            <span>RISE</span>
            <span>LEAD</span>
            <span>CREATE</span>
            <span>TRANSFORM</span>
          </div>

          <div className={styles.orbitOuter} />
          <div className={styles.orbitInner} />

          <div className={styles.bloom}>
            {petals.map((_, index) => (
              <span
                key={index}
                className={styles.petal}
                style={
                  {
                    "--rotation": `${index * 30}deg`,
                    "--delay": `${index * -0.25}s`,
                  } as React.CSSProperties
                }
              />
            ))}

            <div className={styles.core}>
              <span>JANANI</span>
              <strong>2026</strong>
            </div>
          </div>

          <span className={styles.visualIndex}>COLLECTIVE / 01</span>
        </div>
      </div>
    </section>
  );
}