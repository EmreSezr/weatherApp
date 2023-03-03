import React from "react";
import "./Weather.css";

function Weather(props) {
  const { location, current } = props.data;
  return (
    <div className="Weather">
      <h2>Hava Durumu: {location.name}</h2>
      <img src={current.condition.icon} alt={current.condition.text} />
      <div className="Weather-Results">
        <p>Sıcaklık: {current.temp_c}°C </p>
        <p>Durum: {current.condition.text}</p>
        <p>Rüzgar: {current.wind_kph} km/s</p>
        <p>Nem: {current.humidity}%</p>
        <p>Hissedilen Derece: {current.feelslike_c}°C</p>
      </div>
    </div>
  );
}

export default Weather;
