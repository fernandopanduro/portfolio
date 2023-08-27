import { Dm } from "../components/Dm";
import styles from "../css/Contact.module.css";
export const Contact = () => {
  return (
    <div className={`${styles.contact}`}>
      <Dm />
      <div className={`${styles.listSocial}`}>
        <h1 className={`${styles.title}`}>I too, am social</h1>
        <div className={`${styles.itemContainer}`}>
          <span>Email</span>
          <hr />
          <a
            href="mailto:contacto@ferpanduro.com"
            title="contact me to Mail"
            aria-label="contact me to Mail"
            target="_blank"
            rel="noreferrer noopener"
            className="">
            contacto@ferpanduro.com
          </a>
        </div>
        <div className={`${styles.itemContainer}`}>
          <span>Linkedin</span>
          <hr />
          <a
            href="https://www.linkedin.com/in/fernando-panduro/"
            title="contact me to Linkedin"
            aria-label="contact me to Linkedin"
            target="_blank"
            rel="noreferrer noopener"
            className="">
            @fernando-panduro
          </a>
        </div>
        <div className={`${styles.itemContainer}`}>
          <span>Youtube</span>
          <hr />
          <a
            href="https://www.youtube.com/@fernandopanduro"
            title="contact me to Youtube"
            aria-label="contact me to Youtube"
            target="_blank"
            rel="noreferrer noopener"
            className="">
            @fernandopanduro
          </a>
        </div>
        <div className={`${styles.itemContainer}`}>
          <span>Instagram</span>
          <hr />
          <a
            href="https://www.instagram.com/fernandpha/"
            title="contact me to Instagram"
            aria-label="contact me to Instagram"
            target="_blank"
            rel="noreferrer noopener"
            className="">
            @fernanpha
          </a>
        </div>
      </div>
    </div>
  );
};
