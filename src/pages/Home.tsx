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
      <section className="container">
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
