import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Charlotte" />
        <footer>
          This project was coded by Jacqueline Solorzano and is open-sourced on{" "}
          <a
            href="https://github.com/jacquelinesz/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
