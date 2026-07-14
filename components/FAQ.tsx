import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Awards.module.css";

export default function Awards() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2>
            JANANI
            <br />
            AWARDS
          </h2>

          <p>
            Recognising women and organisations creating meaningful impact
            across society.
          </p>
        </header>

        <div className={styles.grid}>
          {/* TROPHY IMAGE */}

          <article className={styles.imageCard}>
            <Image
              src="/images/janani-award.jpg"
              alt="JANANI 2026 Award"
              fill
              sizes="(max-width: 768px) 100vw, 58vw"
              className={styles.image}
            />

            <div className={styles.imageMeta}>
              <span>JANANI 2026</span>
              <span>09 / AWARDS</span>
            </div>
          </article>

          {/* AWARD CONTENT */}

          <article className={styles.contentCard}>
            <span className={styles.label}>HONOURING EXCELLENCE</span>

            <h3>
              IMPACT.
              <br />
              COURAGE.
              <br />
              CHANGE.
            </h3>

            <p>
              Celebrating outstanding women and organisations whose work,
              leadership and ideas are transforming communities and shaping a
              stronger future.
            </p>

            <Link href="/awards" className={styles.cta}>
              Explore Awards
              <span aria-hidden="true">↗</span>
            </Link>
          </article>

          {/* STATEMENT CARD */}

          <article className={styles.statementCard}>
            <span className={styles.number}>09</span>

            <div>
              <h3>RECOGNISING THOSE WHO MOVE SOCIETY FORWARD.</h3>

              <p>
                JANANI honours stories of leadership, resilience and
                extraordinary contribution.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}