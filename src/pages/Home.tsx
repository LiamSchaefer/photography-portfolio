import CarouselHome from "../components/Carousel";
import "./home.css";

function Home() {
  return (
    <div className="home-container">
      <div style={{ height: "70px", width: "100%", backgroundColor: "040D12" }}>
        {/*   <img
          src={require("../assets/Logo Wasserzeichen Weiß Logo Links.png")}
          alt=""
          style={{ height: "100%", width: "300px" }}
        /> */}
        {/* <h1 className="home-headline">Luca Liam Photography</h1> */}
      </div>
      <CarouselHome />
      <div className="home-text-container">
        <div className="home-about-me-text">
          <p>Hey my name is Liam</p>
          <p>I'm a passionated hobby photographer</p>
          <p>My journey has begun 2022 where i bought my first camera </p>
          <p>a Sony a6000 and i still use it until today.</p>
          <p>
            Since then i photographed every thing that comes in front of my
            lens,
          </p>
          <p>
            but especially the small things in nature and nature itself are very
            fascinating to me!
          </p>
          <p>
            {" "}
            I also like urban and street photography, because you never know
            what
          </p>
          <p>
            {" "}
            comes next and the best- it's not posed! Maybe I could make you{" "}
          </p>
          <p>
            a little interested in my work, so don't hold back and check out my
            pictures!
          </p>
        </div>

        <div className="home-about-me-img">
          <img
            src={require("../assets/me.jpg")}
            alt=""
            style={{ width: "600px", height: "400px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
