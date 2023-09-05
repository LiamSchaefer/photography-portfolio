import "./App.css";
import NatureForestPortfolio from "./pages/NatureForestPortfolio";
import LandscapePortfolio from "./pages/LandscapePortolio";
import StreetPortfolio from "./pages/StreetPortfolio";
import WildLifePortfolio from "./pages/WildLifePortfolio";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./navigation/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/landscape-portfolio" element={<LandscapePortfolio />} />
        <Route
          path="/nature-forest-portfolio"
          element={<NatureForestPortfolio />}
        />
        <Route path="/street-portfolio" element={<StreetPortfolio />} />
        <Route path="/wild-life-portfolio" element={<WildLifePortfolio />} />
      </Routes>
    </div>
  );
}

export default App;
