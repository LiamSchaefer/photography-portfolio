import React from "react";
import "./nature-wildlife-portfolio.css";

function Nature_Wildlife_Portfolio() {
  return (
    <div className="container">
      <h1>Wild Life and Nature</h1>
      <div className="img-container">
        <img
          src={require("../assets/forest_pictures/Augsburg Siebentischwald-29-min.jpg")}
          alt=""
        />
        {/*   <img
          src={require("../assets/forest_pictures/Augsburg Siebentischwald-30-min.jpg")}
          alt=""
        /> */}
        <img
          src={require("../assets/forest_pictures/Augsburg Siebentischwald-31-min.jpg")}
          alt=""
        />
        <img
          src={require("../assets/forest_pictures/Augsburg Siebentischwald-33-min.jpg")}
          alt=""
        />
        <img
          src={require("../assets/forest_pictures/Wandertour Nordic-15-min.jpg")}
          alt=""
        />
        <img
          src={require("../assets/forest_pictures/Wandertour Nordic-17-min.jpg")}
          alt=""
        />
        <img
          src={require("../assets/forest_pictures/Wandertour Nordic-23-min.jpg")}
          alt=""
        />
        <img
          src={require("../assets/forest_pictures/Wandertour Nordic-28-min.jpg")}
          alt=""
        />
        <img
          src={require("../assets/forest_pictures/Wandertour Nordic-35-min.jpg")}
          alt=""
        />
        <img
          src={require("../assets/forest_pictures/Wandertour Nordic-37-min.jpg")}
          alt=""
        />
        {/*   <img
          src={require("../assets/forest_pictures/Wandertour Nordic-9-min.jpg")}
          alt=""
        /> */}
        <img
          src={require("../assets/forest_pictures/Westliche Wälder-1-min.jpg")}
          alt=""
          style={{ width: "600px", height: "450px" }}
        />
        <img
          src={require("../assets/forest_pictures/Westliche Wälder-5-min.jpg")}
          alt=""
        />
        <img
          src={require("../assets/forest_pictures/Westliche Wälder-7-min.jpg")}
          alt=""
        />
        <img src={require("../assets/forest_pictures/efeu.jpg")} alt="" />
        <img src={require("../assets/forest_pictures/Forest1.JPG")} alt="" />
        <img src={require("../assets/forest_pictures/Forest2.JPG")} alt="" />
        <img
          src={require("../assets/forest_pictures/plant with raindrop.jpg")}
          alt=""
        />
      </div>
    </div>
  );
}

export default Nature_Wildlife_Portfolio;
