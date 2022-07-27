import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Search for a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>Charlotte</h1>
      <ul>
        <li>Friday 06:00</li>
        <li>Sunny</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img src="http://openweathermap.org/img/wn/01d.png" alt="Sunny" />{" "}
          82°F
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 72%</li>
            <li>Wind: 5km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
