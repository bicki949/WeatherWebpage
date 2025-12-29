import { useState } from "react";
import "./Weather.css";
import SearchBox from "../SearchBox/SearchBox";
import Infobox from "../Infobox/Infobox";

export default function Weather() {
  let [weatherInfo, setWeatherInfo] = useState({
    city: "delhi",
    feels_like: 27,
    humidity: 2,
    temp: 30.99,
    temp_max: 30.99,
    temp_min: 29,
  });
  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };
  return (
    <div className="weather">
      <h1 className="weather-title">weather</h1>
      <SearchBox updateInfo={updateInfo} />
      <Infobox info={weatherInfo} />
    </div>
  );
}
