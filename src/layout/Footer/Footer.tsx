import { EmailIcon, LinkedinIcon, YoutubeIcon } from "../../components/Icons";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={`container ${styles.footer}`}>
      <h6 className={`${styles.title}`}>
        WORKING REMOTELY. CURRENTLY IN SINALOA, MÉXICO 🇲🇽
      </h6>
      <p>contacto@ferpanduro.com</p>
      <nav className={`${styles.nav}`}>
        <ul className={`${styles.list}`}>
          <li className={`${styles.listItem}`}>
            <a
              href="https://www.linkedin.com/in/fernando-panduro/"
              title="Linkedin de Fernando"
              aria-label="Linkedin de Fernando"
              target="_blank"
              rel="noreferrer noopener"
              className="">
              <LinkedinIcon />
            </a>
          </li>
          <li className={`${styles.listItem}`}>
            <a
              href="mailto:contacto@ferpanduro.com"
              title="Linkedin de Fernando"
              aria-label="Linkedin de Fernando"
              target="_blank"
              rel="noreferrer noopener"
              className="">
              <EmailIcon />
            </a>
          </li>
          <li className={`${styles.listItem}`}>
            <a
              href="https://www.youtube.com/@fernandopanduro"
              title="Linkedin de Fernando"
              aria-label="Linkedin de Fernando"
              target="_blank"
              rel="noreferrer noopener"
              className="">
              <YoutubeIcon />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};
