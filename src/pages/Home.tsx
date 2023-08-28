import { Dm } from "../components/Dm";
import { ArrowDown } from "../components/Icons";
import styles from "../css/Home.module.css";

export const Home = () => {
  return (
    <div>
      <section className={`container ${styles.hero}`}>
        <h1>Fernando Panduro</h1>
        <h2 className={`${styles.heroTitle}`}>
          I’m a Mexican Software Engineer based ↔ Sinaloa, MX passionate about
          shaping how humans interact with technology.
        </h2>
        <div>
          <a className={`${styles.arrowDown}`} href="#portfolio">
            <ArrowDown />
          </a>
        </div>
      </section>
      <section className={`container ${styles.portfolio}`}>
        <h2 className={styles.experienceTitle}>Portfolio</h2>
        <article className={`${styles.portfolioSection}`}>
          <aside className={`${styles.portfolioAside}`}>
            <h3 className={`${styles.portfolioTitle}`}>MG Motor</h3>
            <p className={`${styles.portfolioDescription}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
              quibusdam. Corporis illo nisi, quidem sit quaerat quasi alias quod
              eos adipisci ipsam ad magnam commodi enim perspiciatis
              voluptatibus. Aperiam, natus?
            </p>
            <div className={`${styles.portfolioButtons}`}>
              <a
                href="$2"
                title="View more"
                aria-label="View more"
                rel="noreferrer noopener"
                className={`${styles.portfolioButton}`}>
                View more
              </a>
              <a
                href="https://www.mgmotor.com.mx/"
                title="MG Motor"
                aria-label="MG Motor"
                target="_blank"
                rel="noreferrer noopener"
                className={`${styles.portfolioButton}`}>
                Website
              </a>
            </div>
          </aside>
          <picture className={`${styles.portfolioImage}`}>
            <img
              src="src/assets/images/mockups/mg-mockup-labtop.png"
              alt="Mockup Labtop MG"
              title="Mockup Labtop MG"
              aria-label="Mockup Labtop MG"
              className="$3"
              draggable="false"
              loading="lazy"
              decoding="async"
              width="450"
              height="300"
            />
          </picture>
        </article>
        <article className={`${styles.portfolioSection}`}>
          <aside className={`${styles.portfolioAside}`}>
            <h3 className={`${styles.portfolioTitle}`}>Kia México</h3>
            <p className={`${styles.portfolioDescription}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
              quibusdam. Corporis illo nisi, quidem sit quaerat quasi alias quod
              eos adipisci ipsam ad magnam commodi enim perspiciatis
              voluptatibus. Aperiam, natus?
            </p>
            <div className={`${styles.portfolioButtons}`}>
              <a
                href="$2"
                title="View more"
                aria-label="View more"
                rel="noreferrer noopener"
                className={`${styles.portfolioButton}`}>
                View more
              </a>
              <a
                href="https://www.kia.com/mx/main.html/"
                title="Kia Mexico"
                aria-label="Kia Mexico"
                target="_blank"
                rel="noreferrer noopener"
                className={`${styles.portfolioButton}`}>
                Website
              </a>
            </div>
          </aside>
          <picture className={`${styles.portfolioImage}`}>
            <img
              src="src/assets/images/mockups/kia-mockup-phone.png"
              alt="Mockup Phone Kia"
              title="Mockup Phone Kia"
              aria-label="Mockup Phone Kia"
              className="$3"
              draggable="false"
              loading="lazy"
              decoding="async"
              width="450"
              height="300"
            />
          </picture>
        </article>
        <article className={`${styles.portfolioSection}`}>
          <aside className={`${styles.portfolioAside}`}>
            <h3 className={`${styles.portfolioTitle}`}>Chirey México</h3>
            <p className={`${styles.portfolioDescription}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
              quibusdam. Corporis illo nisi, quidem sit quaerat quasi alias quod
              eos adipisci ipsam ad magnam commodi enim perspiciatis
              voluptatibus. Aperiam, natus?
            </p>
            <div className={`${styles.portfolioButtons}`}>
              <a
                href="$2"
                title="View more"
                aria-label="View more"
                rel="noreferrer noopener"
                className={`${styles.portfolioButton}`}>
                View more
              </a>
              <a
                href="https://www.chirey.mx/"
                title="Chirey"
                aria-label="Chirey"
                target="_blank"
                rel="noreferrer noopener"
                className={`${styles.portfolioButton}`}>
                Website
              </a>
            </div>
          </aside>
          <picture className={`${styles.portfolioImage}`}>
            <img
              src="src/assets/images/mockups/chirey-mockup-tablet.png"
              alt="Mockup Tablet Chirey"
              title="Mockup Tablet Chirey"
              aria-label="Mockup Tablet Chirey"
              className="$3"
              draggable="false"
              loading="lazy"
              decoding="async"
              width="450"
              height="300"
            />
          </picture>
        </article>
      </section>
      <section id="portfolio" className="container">
        <h3 className={styles.experienceTitle}>Past & Present</h3>
        <article className={`${styles.experience}`}>
          <div className={`${styles.experienceDescription}`}>
            <div className={`${styles.detailsWork}`}>
              <h4 className={`${styles.company}`}>Abeha</h4>
              <span className={`${styles.job}`}>Software Engineer</span>
            </div>
            <span className={styles.dates}>2023-Now</span>
          </div>
        </article>
        <article className={`${styles.experience}`}>
          <div className={`${styles.experienceDescription}`}>
            <div className={`${styles.detailsWork}`}>
              <h4 className={`${styles.company}`}>Vendetta</h4>
              <span className={`${styles.job}`}>Front-End Developer</span>
            </div>
            <span className={styles.dates}>2022-23</span>
          </div>
        </article>
        <article className={`${styles.experience}`}>
          <div className={`${styles.experienceDescription}`}>
            <div className={`${styles.detailsWork}`}>
              <h4 className={`${styles.company}`}>LLantera Garcia</h4>
              <span className={`${styles.job}`}>Web Developer</span>
            </div>
            <span className={styles.dates}>2020-22</span>
          </div>
        </article>
      </section>
      <Dm />
    </div>
  );
  // 1. Hero
  // 2. Portfolio
  // 3. Past & Present ✅
  // 4. Blog
  // 5. Contact ✅
};
