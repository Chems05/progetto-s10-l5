import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const news = () => {
  return (
    <div className="text-white">
      <h2 className="titoloNotizie" style={{ marginBottom: "3rem" }}>
        {" "}
        ULTIME NOTIZIE IN LIVE
      </h2>
      <Carousel
        showThumbs={false}
        infiniteLoop={false}
        useKeyboardArrows
        autoPlay
      >
        <div className="carousel">
          <iframe
            width="366"
            height="320"
            src="https://www.youtube.com/embed/Y_gsJrefyRQ"
            title="Tutte le news di Sky tg24"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            className="iFrame"
          ></iframe>
        </div>
        <div>
          <iframe
            width="366"
            height="320"
            src="https://www.youtube.com/embed/buAV1t5-23w"
            title="THE WORLD LIVE SHOWCASE - new partner and cameras showcase version | earthTV®"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            className="iFrame"
          ></iframe>
        </div>
      </Carousel>
      <p className="ultimaOra" style={{ marginBottom: "5rem" }}>
        {" "}
        ultima ora
      </p>
    </div>
  );
};

export default news;
