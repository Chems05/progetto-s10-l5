import "bootstrap/dist/css/bootstrap.css";
import Input from "./components/SearchInput";
import "./App.css";
import Navbar from "./components/NavBar";
import { GiSundial } from "react-icons/gi";

const App = () => {
  return (
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
        <Input />
      </div>
    </div>
  );
};

export default App;
