import React from "react";
import { FaTemperatureHigh } from "react-icons/fa";
import { GrWaypoint } from "react-icons/gr";
import { BiWind } from "react-icons/bi";
import { BsDroplet, BsSpeedometer2 } from "react-icons/bs";
import { IoLeafOutline } from "react-icons/io5";
import { formatDate, calculateDewPoint, convertToCelcius } from "./helper";
import "./index.css";

const LocationWeather = ({ singleDayWeather }) => {
  return (
    <section className="location-weather">
      <header className="location-weather__header">
        <h1 className="location-weather__header-title">
          {singleDayWeather.name}
        </h1>
        <time
          dateTime={new Date(singleDayWeather.dt * 1000)}
          className="location-weather__header-time"
        >
          Updated as of {formatDate(singleDayWeather.dt)}
        </time>
      </header>
      <div className="location-weather__body">
        <img
          className="location-weather__img"
          src={`${process.env.REACT_APP_WEATHER_ICON}/${singleDayWeather.weather[0].icon}@2x.png`}
          alt={singleDayWeather.weather[0].description}
        />
        <span class="location-weather__degree">
          {convertToCelcius(singleDayWeather.main.feels_like)}
          <sup>o</sup> <span>C</span>
        </span>
        <span className="location-weather__description">
          {singleDayWeather.weather[0].description}
        </span>
      </div>
      <footer className="location-weather__footer">
        <ul className="location-weather__list">
          <li className="location-weather__item">
            <FaTemperatureHigh />
            <div className="location-weather__item-text-box">
              <span>FEELS LIKE</span>
              <span>
                {convertToCelcius(singleDayWeather.main.feels_like)}
                <sup>o</sup>C{" "}
              </span>
            </div>
          </li>
          <li className="location-weather__item">
            <BiWind />
            <div className="location-weather__item-text-box">
              <span>WIND</span>
              <span className="location-weather__item-icon-box">
                {singleDayWeather.wind.speed} mph
                <GrWaypoint
                  style={{
                    transform: `rotate(${singleDayWeather.wind.deg}deg)`,
                  }}
                />
              </span>
            </div>
          </li>
          <li className="location-weather__item">
            <BsDroplet />
            <div className="location-weather__item-text-box">
              <span>HUMIDITY</span>
              <span>{singleDayWeather.main.humidity}%</span>
            </div>
          </li>
          <li className="location-weather__item">
            <BsSpeedometer2 />
            <div className="location-weather__item-text-box">
              <span>PRESSURE</span>
              <span>{singleDayWeather.main.pressure} mb</span>
            </div>
          </li>
          <li className="location-weather__item">
            <IoLeafOutline />
            <div className="location-weather__item-text-box">
              <span>DEW POINT</span>
              <span>
                {calculateDewPoint(
                  singleDayWeather.main.humidity,
                  convertToCelcius(singleDayWeather.main.feels_like)
                )}
                <sup>o</sup>C
              </span>
            </div>
          </li>
        </ul>
      </footer>
    </section>
  );
};

export default LocationWeather;
