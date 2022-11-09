import React from "react";
import { formatDate, convertToCelcius } from "./helpers";
import "./index.css";

const FourtyFourHoursFtItem = ({ hourlyWeather, index }) => {
  return (
    <li className="fourty-four-hft__item">
      <span className="fourty-four-hft__item-date">
        {index === 0 ? "Today" : formatDate(hourlyWeather.dt)}
      </span>
      <img
        src={`${process.env.REACT_APP_WEATHER_ICON}/${hourlyWeather.weather[0].icon}@2x.png`}
        alt=""
        className="fourty-four-hft__img"
      />
      <span className="fourty-four-hft__degree">
        {convertToCelcius(hourlyWeather.feels_like)}
        <sup>o</sup>C
      </span>
    </li>
  );
};

export default FourtyFourHoursFtItem;
