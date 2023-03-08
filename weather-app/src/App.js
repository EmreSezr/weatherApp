import React, { useState } from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const API_KEY =process.env.REACT_APP_API_KEY;


  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setWeatherData([]);
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&lang=tr&units=metric`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Şehir bulunamadı!");
        }
        return response.json();
      })
      .then((data) => {
        setWeatherData((prevData) => {
          const newData = [...prevData, data].slice(-3);
          return newData;
        });
        setCity("");
      })
      .catch((error) => {
        alert("Şehir bulunamadı. Geçerli şehir ismi giriniz..");
        console.log(error);
      });
  };

  return (
    <div className="all">
      <div className="App">
        <h1>Weather App</h1>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="city">Şehir İsmi:</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="Şehir..."
            value={city}
            onChange={handleInputChange}
          />
          <button className="submit-button" type="submit">
            Gönder
          </button>
        </form>

        <form id="popular-search" onSubmit={handleFormSubmit}>
          <h4>Popular Search: </h4>
          <button className="popular-search-button"  value="İstanbul" onClick={handleInputChange}>İstanbul</button>
          <button className="popular-search-button"  value="İzmir" onClick={handleInputChange}>İzmir</button>
          <button className="popular-search-button" value="Ankara" onClick={handleInputChange}>Ankara</button>
          <button className="popular-search-button" value="Bursa" onClick={handleInputChange}>Bursa</button>
          <button className="popular-search-button"  value="Antalya" onClick={handleInputChange}>Antalya</button>
        </form>
        {weatherData.map((data) => (
          <Weather key={data.name} data={data} />
        ))}
      </div>
    </div>
  );
}

export default App;
