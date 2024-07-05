import "bootstrap/dist/css/bootstrap.css";
import Input from "./components/SearchInput";
import "./App.css";
import Navbar from "./components/NavBar";
import TimeLocation from "./components/Location";
import { GiSundial } from "react-icons/gi";

const App = () => {
  return (
    <div
      className="navbar fixed-top  p-4  d-flex justify-content-center"
      style={{
        backgroundImage: `url("https://w0.peakpx.com/wallpaper/693/384/HD-wallpaper-starry-sky-clouds.jpg")`,
      }}
    >
      <div className="">
        <GiSundial style={{ color: "yellow" }} size={100} />
        <Navbar />
        <Input />
        <TimeLocation />
      </div>
    </div>
  );
};

export default App;
