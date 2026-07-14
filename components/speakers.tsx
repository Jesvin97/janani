"use client";

import Image from "next/image";
import styles from "../styles/speakers.module.css";

const topSpeakers = [
  {
    name: "Dr. Emily Carter",
    role: "Chief AI Scientist, OpenAI",
    image: null,
  },
  {
    name: "Elon Park",
    role: "CTO, DeepMind",
    image: "/speakers/speaker-1.jpg",
  },
  {
    name: "Maya Thomas",
    role: "Founder, Future Labs",
    image: null,
  },
  {
    name: "Sarah Joseph",
    role: "Technology Leader",
    image: "/speakers/speaker-2.jpg",
  },
];

const bottomSpeakers = [
  {
    name: "Laura Kim",
    role: "Head of AI, Meta",
    image: "/speakers/speaker-3.jpg",
  },
  {
    name: "Dr. Alan Foster",
    role: "AI Research Lead, Stanford",
    image: null,
  },
  {
    name: "Nina George",
    role: "Founder, Women in Tech",
    image: "/speakers/speaker-4.jpg",
  },
  {
    name: "Anna Mathew",
    role: "Innovation Director",
    image: null,
  },
];

type Speaker = {
  name: string;
  role: string;
  image: string | null;
};

function SpeakerCard({ speaker }: { speaker: Speaker }) {
  if (speaker.image) {
    return (
      <article className={`${styles.card} ${styles.imageCard}`}>
        <Image
          src={speaker.image}
          alt={speaker.name}
          fill
          sizes="(max-width: 768px) 45vw, 260px"
          className={styles.image}
        />

        <div className={styles.imageOverlay}>
          <h3>{speaker.name}</h3>
          <p>{speaker.role}</p>
        </div>
      </article>
    );
  }

  return (
    <article className={`${styles.card} ${styles.textCard}`}>
      <h3>{speaker.name}</h3>
      <p>{speaker.role}</p>
    </article>
  );
}

function SpeakerTrack({
  speakers,
  direction,
}: {
  speakers: Speaker[];
  direction: "left" | "right";
}) {
  const duplicatedSpeakers = [...speakers, ...speakers];

  return (
    <div className={styles.row}>
      <div
        className={`${styles.track} ${
          direction === "right" ? styles.moveRight : styles.moveLeft
        }`}
      >
        {duplicatedSpeakers.map((speaker, index) => (
          <SpeakerCard
            key={`${speaker.name}-${index}`}
            speaker={speaker}
          />
        ))}
      </div>
    </div>
  );
}

export default function Speakers() {
  return (
    <section className={styles.speakers}>
      <header className={styles.header}>
        <h2>
          KEYNOTE
          <br />
          SPEAKERS
        </h2>

        <p>
          Meet the voices shaping leadership,
          <br />
          empowerment and the future.
        </p>
      </header>

      <div className={styles.marquee}>
        <SpeakerTrack speakers={topSpeakers} direction="right" />
        <SpeakerTrack speakers={bottomSpeakers} direction="left" />
      </div>
    </section>
  );
}