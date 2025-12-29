import React from "react";
import "./Infobox.css";
export default function Infobox({ info }) {
  return (
    <div className="infobox">
      <h2 className="city-name">{info.city}</h2>
      <div className="weather-datails">
        <p>🌡Temperature: {info.temp}°C </p>
        <p>🤗Feels Like: {info.feels_like}°C</p>
        <p>💧Humidity: {info.humidity}%</p>
        <p>⬆Max Temp: {info.temp_max}°C </p>
        <p>⬇Min Temp: {info.temp_min} °C </p>
      </div>
    </div>
  );
}
