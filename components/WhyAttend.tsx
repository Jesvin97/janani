import styles from "../styles/WhyAttend.module.css";

const reasons = [
  {
    number: "01",
    title: "COLLECTIVE VOICES",
    description:
      "Hear powerful perspectives from women shaping communities, industries and the future.",
  },
  {
    number: "02",
    title: "SHARED LEARNING",
    description:
      "Engage in meaningful conversations, experiences and ideas designed to inspire growth.",
  },
  {
    number: "03",
    title: "REAL CONNECTIONS",
    description:
      "Connect with leaders, creators and changemakers through a collective space for women.",
  },
  {
    number: "04",
    title: "STORIES OF IMPACT",
    description:
      "Discover authentic stories of resilience, leadership and transformative change.",
  },
  {
    number: "05",
    title: "A MOVEMENT FORWARD",
    description:
      "Be part of a growing movement celebrating women, collective strength and a stronger future.",
  },
];

export default function WhyAttend() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h2 className={styles.title}>WHY ATTEND?</h2>

          <p className={styles.intro}>
            Discover why JANANI 2026 is a collective experience for women,
            leaders, creators and changemakers.
          </p>
        </header>

        <div className={styles.grid}>
          {reasons.map((reason, index) => (
            <article
              key={reason.number}
              className={`${styles.card} ${
                index === reasons.length - 1 ? styles.featuredCard : ""
              }`}
            >
              <span className={styles.number}>{reason.number}</span>

              <div className={styles.cardContent}>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}