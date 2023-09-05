import React from "react";
import "./portfolio-pages.css";

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
            style={{ width: 430, height: 450 }}
          />
          <img
            src={require("../assets/wild_life_pictures/Spider 1-min.jpg")}
            alt=""
            style={{ width: 450, height: 450 }}
          />
          <img
            src={require("../assets/wild_life_pictures/Schmetterling 1.jpg")}
            alt=""
            style={{ width: 550, height: 450 }}
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
          src={require("../assets/wild_life_pictures/Wattenmeer-21-min.jpg")}
          alt=""
        />
        <img
          src={require("../assets/wild_life_pictures/Wattenmeer-4-min.jpg")}
          alt=""
          style={{ width: 550, height: 450 }}
        />
        <img
          src={require("../assets/wild_life_pictures/Durum-17-min.jpg")}
          alt=""
        />
        <img
          src={require("../assets/wild_life_pictures/Durum-22-min.jpg")}
          alt=""
        />
        <img
          src={require("../assets/wild_life_pictures/Wremen-3-min.jpg")}
          alt=""
        />
        <img
          src={require("../assets/wild_life_pictures/Wattenmeer-15-min.jpg")}
          alt=""
          style={{ width: 650, height: 450 }}
        />
      </div>
    </div>
  );
}

export default WildLifePortfolio;
