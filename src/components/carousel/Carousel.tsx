import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./carousel.css";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: any) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          src={require("../../assets/carousel_pictures/Eibsee-15 (1).jpg")}
          style={{
            width: "100%",
            objectFit: "cover",
            height: "700px",
            filter: "brightness(70%)",
          }}
          alt=""
        />
        <Carousel.Caption>
          <h1>Welcome to my photography world</h1>
          <p className="text-carousel-big">
            where you can find landscape photos...
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={require("../../assets/forest_and_nature_pictures/Westliche Wälder-3-min.jpg")}
          style={{
            width: "100%",
            objectFit: "cover",
            height: "700px",
            filter: "brightness(50%)",
          }}
          alt=""
        />
        <Carousel.Caption>
          <div style={{ top: "0px" }}>
            <h1>Nature photography</h1>
            <p className="text-carousel-big">
              All around the nature and its animals, flowers and the smallest
              inhabitants.{" "}
            </p>
            <p className="text-carousel-big">
              ~Sometimes the smallest things in life are the most beautiful~
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={require("../../assets/carousel_pictures/F0589CC2-7AD0-4CC6-9271-DA33A894 (1).jpg")}
          style={{
            width: "100%",
            objectFit: "cover",
            height: "700px",
            filter: "brightness(50%)",
          }}
          alt=""
        />
        <Carousel.Caption>
          <h1>Street & Urban Photography</h1>
          <p className="text-carousel-big">
            See cities from another perspective.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={require("../../assets/wild_life_pictures/Wattenmeer-15-min.jpg")}
          style={{
            width: "100%",
            objectFit: "cover",
            height: "700px",
            filter: "brightness(50%)",
          }}
          alt=""
        />
        <Carousel.Caption>
          <h1>Wildlife</h1>
          <p className="text-carousel-big">
            All around animals both the small and large ones.
          </p>
          <p className="text-carousel-smaller">
            Here, for example, you can see insects in such detail that the naked
            eye could never see them.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
