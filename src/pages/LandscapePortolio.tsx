import React from "react";
import "./portfolio-pages.css";

function LandscapePortfolio() {
  return (
    <div className="container-custom">
      <h1>Landscapes</h1>
      <div className="img-container">
        <img src={require("../assets/landscapes/Eibsee-2.jpg")} alt="" />
        <img src={require("../assets/landscapes/Eibsee-3.jpg")} alt="" />
        <img src={require("../assets/landscapes/Eibsee-7.jpg")} alt="" />
        <img src={require("../assets/landscapes/Eibsee-11.jpg")} alt="" />
        <img src={require("../assets/landscapes/Eibsee-13.jpg")} alt="" />
        <img src={require("../assets/landscapes/Eibsee-14.jpg")} alt="" />
        <img
          src={require("../assets/landscapes/Eibsee-15.jpg")}
          alt=""
          style={{ width: "600px", height: "450px" }}
        />
      </div>
    </div>
  );
}

export default LandscapePortfolio;
