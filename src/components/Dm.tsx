import styles from "../css/Dm.module.css";

export const Dm = () => {
  return (
    <div>
      <h2 className={`${styles.title}`}>SAY HI</h2>
      <p className={`${styles.text}`}>
        Hit me up at contacto@ferpanduro.com or (
        <a
          href="https://www.linkedin.com/in/fernando-panduro/"
          title="Linkedin"
          aria-label="Linkedin"
          target="_blank"
          rel="noreferrer noopener"
          className="">
          click here
        </a>
        ) send me a DM.
      </p>
    </div>
  );
};
