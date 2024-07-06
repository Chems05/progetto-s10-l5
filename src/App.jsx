import "bootstrap/dist/css/bootstrap.css";
import Input from "./components/SearchInput";
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
          backgroundImage: `url("https://w0.peakpx.com/wallpaper/68/904/HD-wallpaper-sky-clouds-moon-atmosphere.jpg")`,
          height: "100vh",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className=" fixed-top">
          <GiSundial style={{ color: "yellow" }} size={100} />
          <Navbar />
          <Routes>
            <Route path="/" element={<Input />} />
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
