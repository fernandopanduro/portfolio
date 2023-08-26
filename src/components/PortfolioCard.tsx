import Atropos from "atropos/react";
import { Link } from "react-router-dom";
import styles from "../css/PortfolioCard.module.css";

interface Props {
  project: string;
  imgBg: string;
  imgMiddle: string;
  imgFront: string;
}

export const PortfolioCard: React.FC<Props> = ({
  project,
  imgBg,
  imgMiddle,
  imgFront,
}) => {
  return (
    <Atropos className="my-atropos" activeOffset={40} shadowScale={1.05}>
      <Link to={`/portfolio/:${project}`}>
        <img
          src={imgBg}
          data-atropos-offset="-5"
          className={`${styles.imgBg}`}
        />

        <img
          src={imgMiddle}
          data-atropos-offset="0"
          className={`${styles.img} ${styles.imgMiddle}`}
        />

        <img
          src={imgFront}
          data-atropos-offset="5"
          className={`${styles.img} ${styles.imgFront}`}
        />
      </Link>
    </Atropos>
  );
};
