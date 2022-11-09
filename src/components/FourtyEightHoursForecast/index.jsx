import React from "react";
import FourtyFourHoursFtItem from "./FourtyEightHoursFtItem";
import "./index.css";

const FourtyFourHoursForecast = ({ weatherData }) => {
  return (
    <section className="fourty-four-hft">
      <header className="fourty-four-hft__header">
        <h2 className="fourty-four-hft__title">48 HOURS FORECAST</h2>
      </header>
      <ul className="fourty-four-hft__list">
        {weatherData.hourly.map((hourlyWeather, index) => (
          <FourtyFourHoursFtItem key={index} hourlyWeather={hourlyWeather} />
        ))}
      </ul>
    </section>
  );
};

export default FourtyFourHoursForecast;
