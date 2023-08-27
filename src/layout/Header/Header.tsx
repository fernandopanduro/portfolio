import { Link } from "react-router-dom";
import { FocusIcon, GasIcon, HomeIcon, MailIcon } from "../../components/Icons";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={`${styles.header}`}>
      <nav className={`${styles.nav}`}>
        <ul className={`${styles.list}`}>
          <li className={`${styles.listItem}`}>
            <Link title="Home" className={`${styles.link}`} to="/">
              <HomeIcon />
            </Link>
          </li>
          <li className={`${styles.listItem}`}>
            <Link
              title="Portfolio"
              className={`${styles.link}`}
              to="/portfolio">
              <GasIcon />
            </Link>
          </li>
          <li className={`${styles.listItem}`}>
            <Link
              title="Experience"
              className={`${styles.link}`}
              to="/experience">
              <FocusIcon />
            </Link>
          </li>
          <li className={`${styles.listItem}`}>
            <Link title="Contact" className={`${styles.link}`} to="/contact">
              <MailIcon />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
