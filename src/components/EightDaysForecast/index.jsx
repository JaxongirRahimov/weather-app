import React from "react";
import EightDaysForecastItem from "./EightDaysForecastItem";
import "./index.css";

const EightDaysForecastTable = ({ weatherData }) => {
  return (
    <section className="eight-day-ft">
      <header className="eight-day-ft__header">
        <h2 className="eight-day-ft__title">8 DAYS FORECAST</h2>
      </header>
      <ul className="eight-day-ft__list">
        {weatherData.daily.map((dailyWeather, index) => (
          <EightDaysForecastItem
            key={index}
            dailyWeather={dailyWeather}
            index={index}
          />
        ))}
      </ul>
    </section>
  );
};

export default EightDaysForecastTable;
