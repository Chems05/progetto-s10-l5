import { BiSearch } from "react-icons/bi";
import { useState, useEffect } from "react";

// Funzione per convertire da Kelvin a Celsius
const Celsius = (kelvin) => {
  return Math.floor(kelvin - 273.15);
};

// Funzione per convertire un timestamp Unix in un'ora leggibile
const Time = (u) => {
  // Crea un nuovo oggetto Date usando il timestamp Unix moltiplicato per 1000 (secondi -> millisecondi)
  const date = new Date(u * 1000);
  // Converte la data in un formato leggibile con solo ora e minuti
  return date.toLocaleTimeString([], { hour: "numeric", minute: "numeric" });
};

const Input = () => {
  // Stati per gestire la città cercata, le previsioni meteo e il nome della città
  const [search, setSearch] = useState("");
  const [forecast, setForecast] = useState([]);
  const [cityName, setCityName] = useState("");

  const apiKey = "2141587dc00d16d9bde4d4669d5c7558";

  const fetchForecast = async () => {
    // Se non c'è alcuna ricerca, non fare nulla
    if (!search) return;

    // Effettua una richiesta all'API di OpenWeatherMap
    const resp = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=${apiKey}`
    );

    if (resp.ok) {
      // Converte la risposta in formato JSON
      const data = await resp.json();
      // Prende solo i primi 6 elementi della lista delle previsioni per poi andare ad inserirli nella card attraverso un map che con lo slice ne genera 6 card
      const forecasts = data.list.slice(0, 6).map((item) => ({
        time: Time(item.dt), // Converte il timestamp Unix in un'ora leggibile
        temperature: Celsius(item.main.temp), // Converte la temperatura da Kelvin a Celsius
        minTemperature: Celsius(item.main.temp_min), // Converte la temperatura minima
        maxTemperature: Celsius(item.main.temp_max), // Converte la temperatura massima
        weatherIcon: item.weather[0].icon, // Prende l'icona del meteo
        description: item.weather[0].description, // Prende la descrizione del meteo
      }));
      setForecast(forecasts); // Aggiorna lo stato con le previsioni
      setCityName(data.city.name); // Aggiorna lo stato con il nome della città
    } else {
      // Se la risposta non è ok, resetta gli stati e mostra un avviso
      setForecast([]);
      setSearch("");
      setCityName("");
      alert("Città non trovata :(");
    }
  };

  const handleKeyPress = (event) => {
    // Se l'utente preme il tasto "Enter", chiama la funzione per ottenere le previsioni
    if (event.key === "Enter") {
      event.preventDefault();
      fetchForecast();
    }
  };

  // Mostra un avviso di impostare l'interfaccia a mobile attraverso l'ispeziona

  useEffect(() => {
    alert("IMPOSTA L'INTERFACCIA DA DESKTOP A MOBILE ATTRAVERSO LìISPEZIONE!");
  }, []);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <div style={{ flex: 1 }}>
        <form onSubmit={(e) => e.preventDefault()}>
          <label className="text-black mt-3">
            <input
              className="inputText text-black bg-white"
              type="text"
              placeholder="Cerca La Citta"
              // Aggiorna lo stato quando l'input cambia
              onChange={(e) => setSearch(e.target.value)}
              // Chiama handleKeyPress quando un tasto viene premuto
              onKeyPress={handleKeyPress}
            />
            <BiSearch
              // Chiama fetchForecast quando l'icona di ricerca viene cliccata
              onClick={fetchForecast}
              size={30}
              style={{ color: "green", marginLeft: "10px", cursor: "pointer" }}
              className="iconSearch"
            />
          </label>
        </form>
        {cityName && (
          // Mostra il nome della città solo se viene cercata
          <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>
            {cityName}
          </h1>
        )}
        <div
          className="forecast-container"
          style={{
            overflowX: "auto",
            maxHeight: "600px",
          }}
        >
          {forecast.length > 0 && (
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap",
              }}
            >
              {forecast.map((item, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: "gray",
                    fontWeight: "bold",
                    border: "1px solid black",
                    borderRadius: "8px",
                    padding: "16px",
                    margin: "8px",
                    textAlign: "center",
                    width: "150px",
                  }}
                >
                  {cityName && (
                    <h2
                      style={{
                        textAlign: "center",
                        marginTop: "1rem",
                        color: "blue",
                      }}
                    >
                      {cityName}
                    </h2>
                  )}
                  <h3>{item.time}</h3>
                  <img
                    src={`http://openweathermap.org/img/wn/${item.weatherIcon}@2x.png`}
                    alt="weather icon"
                  />
                  <p>{item.temperature}°C</p>
                  <p>Min: {item.minTemperature}°C</p>
                  <p>Max: {item.maxTemperature}°C</p>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Input;
