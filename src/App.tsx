import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Achievements } from "./pages/Achievements";
import { Contact } from "./pages/Contact";
import { Experience } from "./pages/Experience";
import { Home } from "./pages/Home";
import { Portfolio } from "./pages/Portfolio";
import { PortfolioDetails } from "./pages/PortfolioDetails";

function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:project" element={<PortfolioDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/achievements" element={<Achievements />} />

          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
