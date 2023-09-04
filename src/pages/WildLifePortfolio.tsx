import React from "react";
import "./wild-life-portfolio.css";

function WildLifePortfolio() {
  return (
    <div className="container">
      <h1>Wild Life</h1>
      <div>
        <div>
          <h1>Macro insect photography</h1>
        </div>
        <div className="img-container">
          <img
            src={require("../assets/wild_life_pictures/Grass Hopper1-min.png")}
            alt=""
          />
          <img
            src={require("../assets/wild_life_pictures/Grass Hopper2-min.png")}
            alt=""
          />
          <img
            src={require("../assets/wild_life_pictures/Schmetterling 1.jpg")}
            alt=""
          />
        </div>
      </div>

      <div>
        <h1>Birds</h1>
      </div>
      <div className="img-container">
        <img
          src={require("../assets/wild_life_pictures/Wildpark Poing-10-min.jpg")}
          alt=""
        />
        <img
          src={require("../assets/wild_life_pictures/Wildpark Poing-12-min.jpg")}
          alt=""
        />
        <img
          src={require("../assets/wild_life_pictures/Wildpark Poing-15-min.jpg")}
          alt=""
        />
        <img
          src={require("../assets/wild_life_pictures/Wildpark Poing-17-min.jpg")}
          alt=""
        />
        <img
          src={require("../assets/wild_life_pictures/Wildpark Poing-24-min.jpg")}
          alt=""
        />
        <img
          src={require("../assets/wild_life_pictures/Wildpark Poing-25-min.jpg")}
          alt=""
        />
        <img
          src={require("../assets/wild_life_pictures/Wildpark Poing-7-min.jpg")}
          alt=""
        />
      </div>

      <div>
        <h1>Northsea</h1>
      </div>
      <div className="img-container">
        <img
          src={require("../assets/wild_life_pictures/Wattenmeer-14-min.jpg")}
          alt=""
        />
        <img
          src={require("../assets/wild_life_pictures/Wattenmeer-15-min.jpg")}
          alt=""
        />
        <img
          src={require("../assets/wild_life_pictures/Wattenmeer-21-min.jpg")}
          alt=""
        />
        <img
          src={require("../assets/wild_life_pictures/Wattenmeer-4-min.jpg")}
          alt=""
        />
      </div>
      {/*   <img
            src={require("../assets/landscapes/Eibsee-15.jpg")}
            alt=""
            style={{ width: "600px", height: "450px" }}
          /> */}
    </div>
  );
}

export default WildLifePortfolio;
