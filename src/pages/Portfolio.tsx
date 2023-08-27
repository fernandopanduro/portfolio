// Atropos component
import { Dm } from "../components/Dm";
import { PortfolioCard } from "../components/PortfolioCard";
import styles from "../css/Portfolio.module.css";

export const Portfolio = () => {
  return (
    <div className={`container ${styles.portfolio}`}>
      <h1>Portfolio</h1>
      <div id="app" className={`${styles.projects}`}>
        {/* Atropos */}
        <PortfolioCard
          project="mg"
          imgBg="src/assets/images/portfolio/mg-live-shopping-back.jpg"
          imgMiddle="src/assets/images/logos/mg-logo@2x.png"
          imgFront="src/assets/images/portfolio/mg-gv-slide-hs.png"
        />
        <PortfolioCard
          project="chirey"
          imgBg="src/assets/images/portfolio/mg-live-shopping-back.jpg"
          imgMiddle="src/assets/images/logos/chirey-logo-header-blanco@2x.png"
          imgFront="src/assets/images/portfolio/tiggo-8-pro.png"
        />
        <PortfolioCard
          project="kia"
          imgBg="src/assets/images/portfolio/mg-live-shopping-back.jpg"
          imgMiddle="src/assets/images/logos/kia-logo.png"
          imgFront="src/assets/images/portfolio/sportage.png"
        />
      </div>
      <Dm />
    </div>
  );
  // Projects
  // Product Design Case Studies
};
