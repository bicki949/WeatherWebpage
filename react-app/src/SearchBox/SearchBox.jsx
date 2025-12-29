import React, { useState } from "react";
import "./SearchBox.css";
export default function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  const API_URL =
    "https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}";
  const API_KEY = "29f1b3f8a8f87577485a421bd8148dfa";

  let getWeatherInfo = async () => {
    let response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );
    let jsonResponse = await response.json();

    let result = {
      city: city,
      feels_like: jsonResponse.main.feels_like,
      humidity: jsonResponse.main.humidity,
      temp: jsonResponse.main.temp,
      temp_max: jsonResponse.main.temp_max,
      temp_min: jsonResponse.main.temp_min,
    };
    console.log(result);
    return result;
  };
  let handleChange = (event) => {
    setCity(event.target.value);
    //console.log(event.target.value);
  };
  let handleSubmit = async (event) => {
    event.preventDefault();
    setCity("");
    let newInfo = await getWeatherInfo();
    updateInfo(newInfo);
  };
  // getWeatherInfo();

  return (
    <form className="search-box" onSubmit={handleSubmit}>
      <label htmlFor="city" className="label">city</label>
      <br />
      <br />
      <input
        type="text"
        id="city"
        placeholder="city"
        value={city}
        onChange={handleChange}
        name="city"
      />
      <br />
      <br />
      <button>Search</button>
    </form>
  );
}
