import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Charlotte" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://transcendent-snickerdoodle-662c96.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Jacqueline Solorzano
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/jacquelinesz/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://luxury-licorice-8af185.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
