import Image from "next/image";
import styles from "../styles/ChairmanMessage.module.css";

export default function ChairmanMessage() {
  return (
    <section className={styles.section}>
      <div className={styles.shell}>
        <header className={styles.sectionHeader}>
          <div className={styles.eyebrow}>
            <span className={styles.index}>02</span>
            <span className={styles.divider}>/</span>
            <span>MESSAGE</span>
          </div>

          <p className={styles.headerMeta}>
            JANANI 2026
            <br />
            LEADERSHIP NOTE
          </p>
        </header>

        <div className={styles.layout}>
          <article className={styles.portraitCard}>
            <div className={styles.portraitMedia}>
              <Image
                src="/images/chairman.jpg"
                alt="Dr. Jerry Mathew, Executive Chairman of JANANI 2026"
                fill
                priority={false}
                sizes="(max-width: 768px) 100vw, 43vw"
                className={styles.portrait}
              />

              <div className={styles.imageOverlay} />
            </div>

            <div className={styles.scanField} aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>

            <div className={styles.portraitTop}>
              <span>EXECUTIVE CHAIRMAN</span>
              <span>JANANI / 2026</span>
            </div>

            <div className={styles.identity}>
              <span className={styles.identityLabel}>FROM THE DESK OF</span>

              <h3>
                DR. JERRY
                <br />
                MATHEW
              </h3>

              <p>
                Director — Medical &amp; Education
                <br />
                Dr. APJ Abdul Kalam International Foundation
              </p>
            </div>
          </article>

          <article className={styles.messageCard}>
            <div className={styles.messageVector} aria-hidden="true">
              <div className={styles.orbit}>
                <span className={styles.orbitCore} />
                <span className={styles.orbitNode} />
              </div>

              <div className={styles.vectorLine} />
            </div>

            <div className={styles.messageContent}>
              <span className={styles.messageLabel}>
                MESSAGE FROM THE
                <br />
                EXECUTIVE CHAIRMAN
              </span>

              <h2>
                EVERY
                <br />
                VOICE
                <br />
                MATTERS.
              </h2>

              <div className={styles.copy}>
                <p className={styles.salutation}>Dear Friends,</p>

                <p>
                  It is with immense joy and gratitude that I welcome you to
                  JANANI 2026, a heartfelt initiative of the Dr. APJ Abdul Kalam
                  International Foundation. JANANI is more than a celebration —
                  it is a movement that honours the strength of mothers,
                  celebrates women who lead with purpose, and inspires future
                  generations to build a compassionate and progressive society.
                </p>

                <p>
                  Guided by the vision of Bharat Ratna Dr. A.P.J. Abdul Kalam,
                  JANANI brings together inspiring voices from healthcare,
                  public service, education, entrepreneurship, arts, media, and
                  social leadership to share experiences that encourage
                  learning, collaboration, and meaningful change.
                </p>

                <p>
                  Our theme, <em>&ldquo;Every Voice Matters,&rdquo;</em> reflects
                  our belief that every story has the power to inspire, every
                  experience carries wisdom, and every individual can contribute
                  to shaping a better tomorrow.
                </p>

                <p>
                  Whether you are a delegate, speaker, partner, or visitor, your
                  presence enriches this journey. Together, let us celebrate,
                  connect, and create a legacy that empowers women, strengthens
                  families, and transforms communities.
                </p>
              </div>

              <footer className={styles.messageFooter}>
                <p>
                  WELCOME TO JANANI —
                  <br />
                  WHERE EVERY VOICE MATTERS.
                </p>

                <span>DR. JERRY MATHEW / 2026</span>
              </footer>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}