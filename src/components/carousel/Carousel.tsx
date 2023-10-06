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
            filter: "brightness(60%)",
          }}
          alt=""
        />
        <Carousel.Caption>
          <h1>Welcome to my photography world</h1>
          <p className="text-carousel-big">
            where you can find landscape photos...
          </p>
          <p className="text-carousel-smaller">
            ~The mind is never more highly gratified than in contemplating a
            natural landscape~
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
            <p className="text-carousel-smaller">
              ~Sometimes the smallest things in life are the most beautiful~
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={require("../../assets/carousel_pictures/Plärrer-5.jpg")}
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
            See cities from another perspective
          </p>
          <p className="text-carousel-smaller">
            ~In the city, you never know what you'll find around the next
            corner~
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
            ~Each species is a masterpiece, a creation assembled with extreme
            care and genius.~
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={require("../../assets/carousel_pictures/Wanderung Winter-8.jpg")}
          style={{
            width: "100%",
            objectFit: "cover",
            height: "700px",
            filter: "brightness(50%)",
          }}
          alt=""
        />
        <Carousel.Caption>
          <h1>Forest Pictures</h1>
          <p className="text-carousel-big">
            find pictures from the beautiful vegetation and forests in different
            seasons
          </p>
          <p className="text-carousel-smaller">
            ~I enjoy an easy walk in the forest with my own thoughts, I can
            escape from the world for a bit~
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
