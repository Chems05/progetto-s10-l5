import { BiSearch } from "react-icons/bi";
import { useState } from "react";

const Input = () => {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState("");

  const apiKey = "2141587dc00d16d9bde4d4669d5c7558";

  const response = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}`
    )
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };

  return (
    <div>
      <form>
        <label className="text-black m-4 ">
          <input
            className="inputText text-black bg-white "
            type="text"
            placeholder="Cerca La Citta"
            onChange={(e) => setSearch(e.target.value)}
          />
          <BiSearch
            onClick={response}
            size={30}
            style={{ color: "white", marginRight: "0px", cursor: "pointer" }}
            className="user-select-all"
          />
        </label>
      </form>
      <p>{weather.name}</p>
    </div>
  );
};
export default Input;
