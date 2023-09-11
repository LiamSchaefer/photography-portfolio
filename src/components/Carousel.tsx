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
          src={require("../assets/carousel_pictures/Eibsee-15 (1).jpg")}
          style={{
            width: "100%",
            objectFit: "cover",
            height: "700px",
          }}
        />
        <Carousel.Caption>
          <h1>First slide label</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={require("../assets/carousel_pictures/Eibsee-15 (1).jpg")}
          style={{ width: "100%", objectFit: "cover", height: "700px" }}
        />
        <Carousel.Caption>
          <div style={{ top: "0px" }}>
            <h1>Second slide label</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={require("../assets/carousel_pictures/Eibsee-15 (1).jpg")}
          style={{ width: "100%", objectFit: "cover", height: "700px" }}
        />
        <Carousel.Caption>
          <h1>Third slide label</h1>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
