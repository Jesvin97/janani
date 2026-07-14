import styles from "./about.module.css";
function ValueVector({ type }: { type: string }) {
  switch (type) {
    case "orbit":
      return (
        <div className={`${styles.vector} ${styles.orbitVector}`}>
          <span className={styles.orbitOne} />
          <span className={styles.orbitTwo} />
          <span className={styles.orbitThree} />
          <span className={styles.orbitDot} />
        </div>
      );

    case "pulse":
      return (
        <div className={`${styles.vector} ${styles.pulseVector}`}>
          <span />
          <span />
          <span />
        </div>
      );

    case "rise":
      return (
        <div className={`${styles.vector} ${styles.riseVector}`}>
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
      );

    case "nodes":
      return (
        <div className={`${styles.vector} ${styles.nodesVector}`}>
          <span className={styles.nodeOne} />
          <span className={styles.nodeTwo} />
          <span className={styles.nodeThree} />
          <span className={styles.nodeFour} />

          <i className={styles.nodeLineOne} />
          <i className={styles.nodeLineTwo} />
          <i className={styles.nodeLineThree} />
        </div>
      );

    case "waves":
      return (
        <div className={`${styles.vector} ${styles.waveVector}`}>
          <span />
          <span />
          <span />
          <span />
        </div>
      );

    case "target":
      return (
        <div className={`${styles.vector} ${styles.targetVector}`}>
          <span />
          <span />
          <span />
          <i />
        </div>
      );

    case "grid":
      return (
        <div className={`${styles.vector} ${styles.gridVector}`}>
          {Array.from({ length: 16 }).map((_, index) => (
            <span key={index} />
          ))}
        </div>
      );

    case "collective":
      return (
        <div className={`${styles.vector} ${styles.collectiveVector}`}>
          {Array.from({ length: 7 }).map((_, index) => (
            <span
              key={index}
              style={
                {
                  "--i": index,
                } as React.CSSProperties
              }
            />
          ))}
        </div>
      );

    case "links":
      return (
        <div className={`${styles.vector} ${styles.linksVector}`}>
          <span />
          <span />
          <span />
        </div>
      );

    case "forward":
      return (
        <div className={`${styles.vector} ${styles.forwardVector}`}>
          <span />
          <span />
          <span />
          <span />
        </div>
      );

    default:
      return null;
  }
}
const values = [
  {
    number: "01",
    title: "DIGNITY",
    keyword: "INHERENT WORTH",
    description:
      "Honouring the inherent worth and contributions of every woman and mother.",
    type: "large",
    vector: "orbit",
  },
  {
    number: "02",
    title: "COMPASSION",
    keyword: "EMPATHY",
    description:
      "Leading with empathy, kindness, and a commitment to uplifting others.",
    type: "small",
    vector: "pulse",
  },
  {
    number: "03",
    title: "LEADERSHIP",
    keyword: "COURAGE & VISION",
    description:
      "Inspiring women to lead with courage, vision, and integrity across every sphere of society.",
    type: "small",
    vector: "rise",
  },
  {
    number: "04",
    title: "EMPOWERMENT",
    keyword: "POTENTIAL",
    description:
      "Creating opportunities that enable women to realize their full potential.",
    type: "wide",
    vector: "nodes",
  },
  {
    number: "05",
    title: "SERVICE",
    keyword: "SELFLESS ACTION",
    description:
      "Encouraging selfless action that transforms lives and strengthens communities.",
    type: "small",
    vector: "waves",
  },
  {
    number: "06",
    title: "EXCELLENCE",
    keyword: "HIGHER STANDARDS",
    description:
      "Celebrating achievement while pursuing the highest standards in every endeavor.",
    type: "feature",
    vector: "target",
  },
  {
    number: "07",
    title: "INNOVATION",
    keyword: "THINK FORWARD",
    description:
      "Embracing creativity, entrepreneurship, and forward-thinking solutions for societal progress.",
    type: "small",
    vector: "grid",
  },
  {
    number: "08",
    title: "INCLUSIVITY",
    keyword: "EVERY VOICE",
    description:
      "Fostering a platform where every voice matters, regardless of background or profession.",
    type: "small",
    vector: "collective",
  },
  {
    number: "09",
    title: "COLLABORATION",
    keyword: "BUILD TOGETHER",
    description:
      "Building meaningful partnerships to create lasting social impact.",
    type: "small",
    vector: "links",
  },
  {
    number: "10",
    title: "NATION BUILDING",
    keyword: "DEVELOPED INDIA",
    description:
      "Empowering women as catalysts for stronger families, resilient communities, and a developed India.",
    type: "wide",
    vector: "forward",
  },
];

export default function AboutPage() {
  return (
    <main className={styles.aboutPage}>
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className={styles.hero}>
        <div className={styles.heroMeta}>
          
          <span>JANANI 2026 / INDIA</span>
        </div>

        <div className={styles.heroContent}>
          <h1>
            MORE THAN
            <br />
            AN EVENT.
          </h1>

          <div className={styles.heroStatement}>
            <span className={styles.blueDot} />

            <p>
              JANANI 2026 is a national movement and an immersive experience
              celebrating the strength of motherhood, the potential of women,
              and their power to build stronger families, communities and a
              better nation.
            </p>
          </div>
        </div>

        <div className={styles.heroFooter}>
          <span>CELEBRATING WOMEN</span>
          <span>EMPOWERING GENERATIONS</span>
          <span>BUILDING A BETTER NATION</span>
        </div>
      </section>

      {/* =====================================================
          VISION
      ===================================================== */}

      <section className={styles.visionSection}>
        <div className={styles.sectionIntro}>
          <span className={styles.sectionIndex}>OUR VISION</span>

          <h2>
            THE FUTURE
            <br />
            WE SEE.
          </h2>
        </div>

        <div className={styles.visionGrid}>
          <article className={styles.visionLead}>
            <div className={styles.cardTop}>
              <span>VISION / 2026</span>
              <span className={styles.circleArrow}>↗</span>
            </div>

            <p>
              To ignite a global movement where every mother is honoured,
              every woman is empowered to lead.
            </p>
          </article>

          <article className={styles.visionSecondary}>
            <span className={styles.cardNumber}>01</span>

            <div>
              <span className={styles.cardKeyword}>EVERY GENERATION</span>

              <p>
                Inspired to build a compassionate, equitable, and developed
                nation.
              </p>
            </div>
          </article>

          <article className={styles.visionGraphic}>
            <div className={styles.graphicCircle}>
              <span>HONOUR</span>
              <strong>+</strong>
              <span>EMPOWER</span>
            </div>

            <span className={styles.graphicLabel}>
              GLOBAL MOVEMENT / JANANI
            </span>
          </article>
        </div>
      </section>

      {/* =====================================================
          CORE VALUES
      ===================================================== */}

      <section className={styles.valuesSection}>
        <div className={styles.valuesIntro}>
          <span className={styles.sectionIndex}>03 / CORE VALUES</span>

          <h2>
            TEN VALUES.
            <br />
            ONE MOVEMENT.
          </h2>

          <p>
            The principles defining how JANANI honours women, empowers
            leadership and contributes to a stronger nation.
          </p>
        </div>

       <div className={styles.valuesGrid}>
  {values.map((value) => (
    <article
      key={value.number}
      className={`${styles.valueCard} ${
        styles[value.type as keyof typeof styles]
      }`}
    >
      <div className={styles.valueTop}>
        <span className={styles.valueNumber}>{value.number}</span>

        <span className={styles.valueKeyword}>{value.keyword}</span>
      </div>

      <ValueVector type={value.vector} />

      <div className={styles.valueBottom}>
        <h3>{value.title}</h3>

        <p>{value.description}</p>
      </div>
    </article>
  ))}
</div>
         
      </section>

      {/* =====================================================
          MOTTO
      ===================================================== */}

      <section className={styles.mottoSection}>
        <div className={styles.mottoMeta}>
          <span>04 / JANANI MOTTO</span>
          <span>COLLECTIVE STATEMENT / 2026</span>
        </div>

        <div className={styles.mottoContent}>
          <div className={styles.mottoLine}>
            <span className={styles.mottoNumber}>01</span>
            <h2>EVERY VOICE MATTERS.</h2>
          </div>

          <div className={styles.mottoLine}>
            <span className={styles.mottoNumber}>02</span>
            <h2>EVERY WOMAN LEADS.</h2>
          </div>

          <div className={styles.mottoLine}>
            <span className={styles.mottoNumber}>03</span>
            <h2>EVERY GENERATION RISES.</h2>
          </div>
        </div>

        <div className={styles.mottoFooter}>
          <span>HONOURING WOMEN.</span>
          <span>STRENGTHENING FAMILIES.</span>
          <span>INSPIRING NATION BUILDING.</span>
        </div>
      </section>
    </main>
  );
}