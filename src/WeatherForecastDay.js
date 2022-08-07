import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecastDay(props) {
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div className="WeatherForecastDay">
      <div className="WeatherForecast-date">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={32} />
      <div className="WeatherForecast-temperature">
        <span className="WeatherForecast-low">{minTemperature()}</span>|
        <span className="WeatherForecast-high">{maxTemperature()}</span>
      </div>
    </div>
  );
}
