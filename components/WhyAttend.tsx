import styles from "../styles/WhyAttend.module.css";

type Award = {
  id: string;
  title: string;
  description: string;
  visual:
    | "motherhood"
    | "leadership"
    | "service"
    | "shakti"
    | "global";
};

const awards: Award[] = [
  {
    id: "01",
    title: "Mathruthvam",
    description:
      "Honouring women who have placed family at the heart of their journey while achieving professional excellence, proving that success and motherhood can flourish together.",
    visual: "motherhood",
  },
  {
    id: "02",
    title: "Nayika",
    description:
      "Celebrating women who lead in public life, governance, politics, business, and industry, inspiring progress through visionary leadership and purposeful action.",
    visual: "leadership",
  },
  {
    id: "03",
    title: "Seva",
    description:
      "Celebrating individuals whose unwavering commitment to service has transformed lives through healthcare, education, social welfare, humanitarian action, and environmental stewardship, leaving a lasting impact on society.",
    visual: "service",
  },
  {
    id: "04",
    title: "Shakti",
    description:
      "Celebrating women entrepreneurs, innovators, and business leaders who transform ideas into impact, create opportunities, generate employment, and drive sustainable economic and social progress.",
    visual: "shakti",
  },
  {
    id: "05",
    title: "Vishwadeepthi",
    description:
      "Honouring women from Kerala who have carried the spirit of the state to the world, achieving excellence beyond borders and becoming global ambassadors of inspiration, leadership, and service.",
    visual: "global",
  },
];

function MotherhoodVisual() {
  return (
    <svg
      className={styles.visualSvg}
      viewBox="0 0 420 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <circle className={styles.orbitOuter} cx="210" cy="210" r="172" />
      <circle className={styles.orbitDash} cx="210" cy="210" r="153" />

      <path
        d="M250 112C225 89 183 91 158 116C139 135 132 163 138 188C143 210 156 226 174 237"
        className={styles.artLine}
      />
      <path
        d="M253 112C275 130 286 158 280 185C276 205 266 219 250 232"
        className={styles.artLine}
      />
      <path
        d="M163 172C172 145 193 128 220 126C244 124 264 136 276 157"
        className={styles.artLine}
      />

      <circle cx="203" cy="221" r="37" className={styles.artLine} />
      <path
        d="M177 220C183 203 197 194 211 196C225 198 236 207 240 221"
        className={styles.artLine}
      />
      <path
        d="M144 294C152 255 173 234 203 232C236 229 261 252 271 294"
        className={styles.artLine}
      />
      <path
        d="M126 299C136 258 152 231 177 215"
        className={styles.artLine}
      />
      <path
        d="M294 299C286 259 267 233 240 216"
        className={styles.artLine}
      />

      <path
        d="M100 279C111 263 124 252 141 244M105 280C92 270 85 256 83 240"
        className={styles.artLine}
      />
      <path
        d="M317 276C304 260 291 250 277 243M315 277C329 265 336 251 338 235"
        className={styles.artLine}
      />

      <path
        d="M291 196C299 182 314 182 320 194C326 182 341 183 347 196C347 211 331 222 320 231C309 222 291 211 291 196Z"
        className={styles.artLine}
      />

      <circle cx="84" cy="151" r="3" className={styles.artDot} />
      <circle cx="328" cy="115" r="3" className={styles.artDot} />
      <circle cx="350" cy="261" r="2" className={styles.artDot} />
    </svg>
  );
}

function LeadershipVisual() {
  return (
    <svg
      className={styles.visualSvg}
      viewBox="0 0 420 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <circle className={styles.orbitOuter} cx="210" cy="210" r="172" />
      <circle className={styles.orbitDash} cx="210" cy="210" r="151" />

      <circle cx="116" cy="180" r="28" className={styles.sunRing} />
      <path d="M116 134V151M116 209V226M70 180H87M145 180H162" className={styles.artLine} />
      <path d="M83 147L95 159M137 201L149 213M149 147L137 159M95 201L83 213" className={styles.artLine} />

      <path
        d="M254 101C229 92 201 103 187 125C175 144 175 166 185 184"
        className={styles.artLine}
      />
      <path
        d="M256 101C280 113 293 138 291 164C289 186 278 205 260 218"
        className={styles.artLine}
      />
      <path
        d="M193 154C211 137 232 130 254 134C270 137 282 145 291 158"
        className={styles.artLine}
      />
      <path
        d="M198 196C213 210 231 215 250 210"
        className={styles.artLine}
      />
      <path
        d="M186 304C194 256 214 225 250 211C281 225 300 256 309 304"
        className={styles.artLine}
      />

      <path d="M74 303V255H91V303M98 303V230H118V303M126 303V270H145V303" className={styles.artLine} />
      <path d="M64 303H156" className={styles.artLine} />

      <path
        d="M315 104L322 119L338 122L326 133L329 149L315 141L301 149L304 133L292 122L308 119Z"
        className={styles.artLine}
      />

      <circle cx="73" cy="113" r="3" className={styles.artDot} />
      <circle cx="340" cy="221" r="3" className={styles.artDot} />
    </svg>
  );
}

function ServiceVisual() {
  return (
    <svg
      className={styles.visualSvg}
      viewBox="0 0 420 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <circle className={styles.orbitOuter} cx="210" cy="210" r="172" />
      <circle className={styles.orbitDash} cx="210" cy="210" r="151" />

      <path
        d="M242 104C213 91 179 102 162 129C149 150 149 177 160 198"
        className={styles.artLine}
      />
      <path
        d="M244 104C270 118 284 143 281 170C279 194 265 214 244 226"
        className={styles.artLine}
      />
      <path
        d="M169 161C186 140 208 130 232 133C252 135 268 146 280 162"
        className={styles.artLine}
      />
      <path d="M174 208C193 224 216 229 240 221" className={styles.artLine} />

      <path
        d="M151 309C161 260 185 232 221 222C259 233 284 262 293 309"
        className={styles.artLine}
      />

      <path
        d="M192 258C199 242 216 241 223 255C230 241 247 242 254 258C254 276 235 289 223 300C210 289 192 276 192 258Z"
        className={styles.artLine}
      />

      <path d="M223 257V285M209 271H237" className={styles.artLineStrong} />

      <path
        d="M97 256C104 235 117 220 136 210M101 256C87 246 80 232 78 216"
        className={styles.artLine}
      />
      <path
        d="M319 257C310 236 297 222 280 212M318 257C333 246 341 231 343 214"
        className={styles.artLine}
      />

      <circle cx="103" cy="133" r="3" className={styles.artDot} />
      <circle cx="327" cy="139" r="3" className={styles.artDot} />
    </svg>
  );
}

function ShaktiVisual() {
  return (
    <svg
      className={styles.visualSvg}
      viewBox="0 0 420 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <circle className={styles.orbitOuter} cx="210" cy="210" r="172" />
      <circle className={styles.orbitDash} cx="210" cy="210" r="151" />

      <circle cx="155" cy="117" r="23" className={styles.artLine} />
      <path
        d="M142 141C130 155 126 176 132 194L144 228L137 284"
        className={styles.artLine}
      />
      <path d="M167 141C181 156 185 177 180 196L170 229L180 284" className={styles.artLine} />
      <path d="M137 284H112M180 284H204" className={styles.artLine} />
      <path d="M145 167L177 181L211 143" className={styles.artLineStrong} />

      <path d="M211 143V76" className={styles.artLineStrong} />
      <path d="M211 80C246 89 269 102 292 121C267 130 242 128 211 117" className={styles.artLine} />

      <path d="M231 287V250H254V287M263 287V222H286V287M295 287V190H318V287" className={styles.artLine} />
      <path d="M219 287H330" className={styles.artLine} />

      <path
        d="M229 234L264 205L285 213L329 166"
        className={styles.artLineStrong}
      />
      <path d="M311 166H329V184" className={styles.artLineStrong} />

      <circle cx="317" cy="111" r="22" className={styles.artLine} />
      <path d="M309 101H323M309 108H323M316 108C316 120 309 124 306 126M316 108C324 108 326 101 323 97" className={styles.artLine} />

      <circle cx="91" cy="159" r="3" className={styles.artDot} />
      <circle cx="336" cy="235" r="3" className={styles.artDot} />
    </svg>
  );
}

function GlobalVisual() {
  return (
    <svg
      className={styles.visualSvg}
      viewBox="0 0 760 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <ellipse cx="432" cy="179" rx="214" ry="150" className={styles.orbitOuter} />
      <ellipse cx="432" cy="179" rx="189" ry="128" className={styles.orbitDash} />

      <path
        d="M281 121C316 88 366 70 422 70C489 70 547 96 580 139"
        className={styles.artLine}
      />
      <path
        d="M270 178C317 154 368 143 425 143C487 143 546 158 595 185"
        className={styles.artLine}
      />
      <path
        d="M290 237C328 258 375 270 425 270C484 270 537 253 575 225"
        className={styles.artLine}
      />
      <path d="M432 51C390 87 372 126 371 178C371 227 390 268 431 306" className={styles.artLine} />
      <path d="M432 51C477 89 495 130 494 180C494 230 475 269 431 306" className={styles.artLine} />

      <path
        d="M404 107L421 98L441 104L451 121L470 127L464 143L444 148L437 165L417 160L405 145L389 136L393 119Z"
        className={styles.artLine}
      />
      <path
        d="M491 188L510 176L531 182L543 199L535 218L513 224L494 211Z"
        className={styles.artLine}
      />
      <path
        d="M335 183L353 169L373 176L381 196L369 214L347 211L332 198Z"
        className={styles.artLine}
      />

      <path d="M154 292V220H177V292M183 292V247H207V292M213 292V198H239V292" className={styles.artLine} />
      <path d="M126 292H632" className={styles.artLine} />

      <path
        d="M405 290C412 254 427 231 452 219C478 232 493 255 500 290"
        className={styles.artLine}
      />
      <circle cx="452" cy="194" r="24" className={styles.artLine} />

      <path d="M452 170C434 154 431 133 441 118M452 170C470 153 474 132 464 116" className={styles.artLine} />

      <path d="M92 292V247M78 292H108M84 247H102L96 222L90 247" className={styles.artLine} />
      <path d="M650 292V228M635 292H666M641 228H659L650 196L641 228" className={styles.artLine} />

      <circle cx="282" cy="111" r="3" className={styles.artDot} />
      <circle cx="570" cy="112" r="3" className={styles.artDot} />
      <circle cx="595" cy="225" r="3" className={styles.artDot} />
    </svg>
  );
}

function AwardVisual({ type }: { type: Award["visual"] }) {
  switch (type) {
    case "motherhood":
      return <MotherhoodVisual />;
    case "leadership":
      return <LeadershipVisual />;
    case "service":
      return <ServiceVisual />;
    case "shakti":
      return <ShaktiVisual />;
    case "global":
      return <GlobalVisual />;
  }
}

export default function WhyAttend() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.eyebrow}>
            <span>WHY ATTEND</span>
            <span className={styles.eyebrowLine} />
          </div>

          <h2>The Five
Pillars</h2>

          <p>
            Discover why JANANI 2026 is a collective experience for women,
            leaders, creators and changemakers.
          </p>
        </header>

        <div className={styles.grid}>
          {awards.map((award) => (
            <article
              className={`${styles.card} ${
                award.id === "05" ? styles.wideCard : ""
              }`}
              key={award.id}
            >
              <div className={styles.cardIndex}>
                <span>{award.id}</span>
                <span className={styles.indexLine} />
              </div>

              <div className={styles.cardContent}>
                <h3>{award.title}</h3>
                <p>{award.description}</p>
              </div>

              <div className={styles.visual}>
                <AwardVisual type={award.visual} />
              </div>

              <span className={styles.largeNumber} aria-hidden="true">
                {award.id}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}