import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Legacy.module.css";

export default function Legacy() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2>
            INSPIRED
            <br />
            BY A VISION
          </h2>

          <p>
            The timeless vision guiding JANANI 2026 and a generation
            determined to rise.
          </p>
        </header>

        <div className={styles.grid}>
          {/* IMAGE */}

          <article className={styles.imageCard}>
            <Image
              src="/images/kalam.jpg"
              alt="Dr. A.P.J. Abdul Kalam"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className={styles.image}
            />

            <span className={styles.imageLabel}>
              DR. A.P.J. ABDUL KALAM
            </span>
          </article>

          {/* CONTENT */}

          <article className={styles.contentCard}>
            <span className={styles.index}>01 / LEGACY</span>

            <h3>
              DREAM.
              <br />
              RISE.
              <br />
              TRANSFORM.
            </h3>

            <p>
              JANANI 2026 is guided by Dr. Kalam&apos;s timeless vision
              of an empowered India — where every woman has the
              opportunity to rise, lead and transform the world.
            </p>

            <Link href="/legacy" className={styles.cta}>
              Explore His Legacy
              <span>↗</span>
            </Link>
          </article>

          {/* QUOTE */}

          <article className={styles.quoteCard}>
            <span className={styles.quoteMark}>“</span>

            <blockquote>
              Dream, dream, dreams transform into thoughts and thoughts
              result in action.
            </blockquote>

            <span className={styles.author}>
              — DR. A.P.J. ABDUL KALAM
            </span>
          </article>
        </div>
      </div>
    </section>
  );
}