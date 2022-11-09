import React from "react";
import { formatDate, convertToCelcius } from "./helpers";
import "./index.css";

const EightDaysForecastItem = ({ dailyWeather, index }) => {
  return (
    <li className="eight-day-ft__item">
      <span className="eight-day-ft__item-date">
        {index === 0 ? "Today" : formatDate(dailyWeather.dt)}
      </span>
      <img
        src={`${process.env.REACT_APP_WEATHER_ICON}/${dailyWeather.weather[0].icon}@2x.png`}
        alt=""
        className="eight-day-ft__img"
      />
      <span className="eight-day-ft__degree">
        {convertToCelcius(dailyWeather.temp.min)}
        <sup>o</sup>C
      </span>
      <span className="eight-day-ft__degree">
        {convertToCelcius(dailyWeather.temp.max)}
        <sup>o</sup>C
      </span>
    </li>
  );
};

export default EightDaysForecastItem;
