import React from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {}
  let latitude = props.coordinates.lat;
  let longitude = props.coordinates.lon;
  let apiKey = "1aad50f526a10f50f488a96bc9113044";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-date">Mon</div>
          <WeatherIcon code="01d" size={32} />
          <div className="WeatherForecast-temperature">
            <span className="WeatherForecast-low">10°</span>|
            <span className="WeatherForecast-high">20°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
