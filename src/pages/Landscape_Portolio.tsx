import React from "react";
import "./landscape-portfolio.css";

function Landscape_Portfolio() {
  return (
    <div className="container">
      <h1>Landscapes</h1>
      <div className="img-container">
        <img src={require("../assets/landscapes/Eibsee-2-min.png")} alt="" />
        <img src={require("../assets/landscapes/Eibsee-3.png")} alt="" />
        <img src={require("../assets/landscapes/Eibsee-8.png")} alt="" />
        <img src={require("../assets/landscapes/Eibsee-11.png")} alt="" />
        <img src={require("../assets/landscapes/Eibsee-13.png")} alt="" />
        <img
          src={require("../assets/landscapes/Eibsee-15.png")}
          alt=""
          style={{ width: "600px", height: "450px" }}
        />
      </div>
    </div>
  );
}

export default Landscape_Portfolio;
