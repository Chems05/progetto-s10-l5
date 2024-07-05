import "bootstrap/dist/css/bootstrap.css";
import Input from "./components/SearchInput";
import "./App.css";
import Navbar from "./components/NavBar";
import TimeLocation from "./components/Location";

const App = () => {
  return (
    <div className="navbar fixed-top m-2 p-4 bg-primary bg-gradient d-flex justify-content-center">
      <div className="">
        <img src="" alt="METEO" />
        <Navbar />
        <Input />
        <TimeLocation />
      </div>
    </div>
  );
};

export default App;
