import React from "react";
import "./Weather.css";

const Weather = ({ data }) => {
  const { name, main, wind, weather } = data;
  const iconCode = weather[0].icon;
  const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
  const windSpeed = Math.floor(wind.speed * (3.6))  ;
  const tempRound = Math.round(main.temp);
  return (
    <div className="Weather">
      <h2>Hava Durumu: {name}</h2>
      <img src={iconUrl} alt={"Weather Icon"} />
      <div className="Weather-Results">
        <p>Sıcaklık: {tempRound}°C</p>
        <p>Açıklama : {weather[0].description}</p>
        <p>Rüzgar Hızı: {windSpeed} km/h</p>
        <p>Nem : {main.humidity}%</p>
        <p>Hissedilen Sıcaklık: {Math.round(main.feels_like)}°C</p>
        
      </div>
    </div>
  );
};

export default Weather;
