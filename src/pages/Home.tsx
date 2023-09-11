import CarouselHome from "../components/Carousel";
import Image from "react-bootstrap/Image";
import "./home.css";

function Home() {
  return (
    <div>
      <div>
        {/*   <Image
          src={require("../assets/logo-photography.jpg")}
          alt=""
          style={{ height: "70px", width: "70px" }}
        /> */}
        <h1 className="home-headline">Luca Liam Photography</h1>
      </div>
      <CarouselHome />;
    </div>
  );
}

export default Home;
