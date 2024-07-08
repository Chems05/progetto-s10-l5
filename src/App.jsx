import "bootstrap/dist/css/bootstrap.css";
import Meteo from "./components/MeteoPage";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/NavBar";
import NewsPage from "./components/NewsPage";
import { GiSundial } from "react-icons/gi";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div
        className="navbar fixed-top  p-4  d-flex justify-content-center"
        style={{
          backgroundImage: `url("https://s1.1zoom.me/b6730/156/Sky_Clouds_Sun_559129_1080x1920.jpg")`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          height: "100vh",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className=" fixed-top">
          <GiSundial style={{ color: "yellow" }} size={100} />
          <Navbar />
          <Routes>
            <Route path="/" element={<Meteo />} />
            <Route path="/home" element={<Home />} />
            <Route path="/news" element={<NewsPage />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
