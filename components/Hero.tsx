"use client";

import Link from "next/link";
import styles from "../styles/Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroCard}>
        {/* TOP META */}
        <div className={styles.topBar}>
          <span className={styles.foundation}>
            APJ ABDUL KALAM INTERNATIONAL FOUNDATION
          </span>

          
        </div>

        {/* HERO STATEMENT */}
        <div className={styles.heroContent}>
          <div className={styles.statement}>
            <span className={styles.eyebrow}>HONOURING</span>

            <h1 className={styles.heroWord}>MOTHERS</h1>

            <div className={styles.divider}>
              <span className={styles.dividerLine} />

              <span className={styles.dividerLabel}>
                EMPOWERING
              </span>

              <span className={styles.dividerLine} />
            </div>

            <h1 className={styles.heroWord}>WOMEN</h1>

            <div className={styles.divider}>
              <span className={styles.dividerLine} />

              <span className={styles.dividerLabel}>
                BUILDING
              </span>

              <span className={styles.dividerLine} />
            </div>

            <h1 className={styles.heroWord}>NATIONS</h1>
          </div>
        </div>

        {/* BOTTOM INFORMATION */}
        <div className={styles.bottomContent}>
          <p className={styles.description}>
            JANANI 2026 is a global platform celebrating women who
            lead, inspire and transform communities. Bringing together
            mothers, entrepreneurs, educators, healthcare
            professionals, innovators and changemakers to shape a
            better tomorrow.
          </p>

         
            <Link href="/about" className={styles.discoverButton}>
                <span className={styles.buttonText}>Explore Janani</span>

                <span className={styles.buttonArrow} aria-hidden="true">
                     

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 19L19 5M19 5H8M19 5V16"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="square"
                      strokeLinejoin="miter"
                    />
                  </svg>
                   
                </span>
              </Link>
           
        </div>

        {/* ANIMATED BLOOM */}
        <div className={styles.bloomWrapper} aria-hidden="true">
          <svg
            className={styles.bloom}
            viewBox="0 0 400 400"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g className={styles.orbit}>
              <path
                className={`${styles.petal} ${styles.petalOne}`}
                d="M200 185C164 142 159 92 200 44C241 92 236 142 200 185Z"
              />

              <path
                className={`${styles.petal} ${styles.petalTwo}`}
                d="M215 190C218 134 250 94 311 89C312 151 276 184 215 190Z"
              />

              <path
                className={`${styles.petal} ${styles.petalThree}`}
                d="M221 207C267 174 318 176 356 221C307 258 257 250 221 207Z"
              />

              <path
                className={`${styles.petal} ${styles.petalFour}`}
                d="M211 222C268 225 307 257 311 319C250 319 217 283 211 222Z"
              />

              <path
                className={`${styles.petal} ${styles.petalFive}`}
                d="M194 226C228 272 224 323 178 359C143 309 151 260 194 226Z"
              />

              <path
                className={`${styles.petal} ${styles.petalSix}`}
                d="M178 215C174 272 142 310 80 314C81 253 117 220 178 215Z"
              />

              <path
                className={`${styles.petal} ${styles.petalSeven}`}
                d="M174 199C128 233 77 229 41 183C91 148 140 156 174 199Z"
              />

              <path
                className={`${styles.petal} ${styles.petalEight}`}
                d="M187 187C130 183 92 151 89 89C150 91 183 127 187 187Z"
              />
            </g>

            <circle
              className={styles.bloomCore}
              cx="200"
              cy="200"
              r="27"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}