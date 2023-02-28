import React, { useState } from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const API_KEY = "c4389769c0dc4abe874133129232802";
  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleFormSubmit = (event) => {
   
    event.preventDefault();
    setWeatherData([]);
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
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
        <button type="submit">Gönder</button>
      </form>
      {weatherData.map((data) => (
        <Weather key={data.location.name} data={data} />
      ))}
    </div>
    </div>
  );
}

export default App;
