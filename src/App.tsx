import "./App.css";
import NatureForestPortfolio from "./pages/NatureForestPortfolio";
import LandscapePortfolio from "./pages/LandscapePortolio";
import StreetPortfolio from "./pages/StreetPortfolio";
import WildLifePortfolio from "./pages/WildLifePortfolio";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NavbarMui from "./navigation/NavbarMui";
import Footer from "./components/footer/Footer";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const handleContextmenu = (e: Event) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextmenu);
    return function cleanup() {
      document.removeEventListener("contextmenu", handleContextmenu);
    };
  }, []);

  return (
    <div className="App">
      <NavbarMui />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landscape-portfolio" element={<LandscapePortfolio />} />
        <Route
          path="/nature-forest-portfolio"
          element={<NatureForestPortfolio />}
        />
        <Route path="/street-portfolio" element={<StreetPortfolio />} />
        <Route path="/wild-life-portfolio" element={<WildLifePortfolio />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
