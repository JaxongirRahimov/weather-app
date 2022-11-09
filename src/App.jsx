import React, { useState, useEffect } from "react";
import SearchLocationInput from "./components/SearchLocationInput";
import LocationWeather from "./components/LocationWeather";
import EightDaysForecast from "./components/EightDaysForecast";
import FourtyEightHoursForecast from "./components/FourtyEightHoursForecast";
import Loader from "./components/Loader";
import * as Images from "./assets";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [currentLocation, setCurrentLocation] = useState([]);
  const [singleDayWeather, setSingleDayWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getUserCoordinates();
  }, []);

  useEffect(() => {
    fetchWeatherApi();
  }, [currentLocation]);

  const getUserCoordinates = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        fetchWeatherApi({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (err) => {
        alert(
          "Please allow location access. We use location data to find  weather in your area"
        );
      }
    );
  };

  const updateBackgroundImage = (weather) => {
    const weatherType = weather.main.split(" ")[0].toLowerCase();
    const isNight = weather.icon.slice(-1) === "n";
    const body = document.body;

    body.style = "background-position: center center; background-size: cover";

    switch (weatherType) {
      case "clear":
        body.style.backgroundImage = `url(${
          isNight ? Images.ClearSkyNight : Images.ClearSkyDay
        })`;
        break;
      case "rain":
        body.style.backgroundImage = `url(${
          isNight ? Images.RainNight : Images.RainDay
        })`;
        break;
      case "thunderstorm":
        body.style.backgroundImage = `url(${
          isNight ? Images.ThunderstormNight : Images.ThunderstormDay
        })`;
        break;
      case "snow":
        body.style.backgroundImage = `url(${
          isNight ? Images.SnowNight : Images.SnowDay
        })`;
        break;
      case "mist":
        body.style.backgroundImage = `url(${
          isNight ? Images.MistDay : Images.MistNight
        })`;
        break;
      case "clouds":
        body.style.backgroundImage = `url(${
          isNight ? Images.CloudsDay : Images.CloudsNight
        })`;
        break;
      default:
    }
  };

  const fetchWeatherApi = async (coordinates) => {
    try {
      setIsLoading(true);
      const userCoordinates =
        coordinates &&
        `lat=${coordinates.latitude}&lon=${
          coordinates.longitude
        }&appid=${"0a44599bef483c57540eed16fcddc18d"}`;

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?${
          coordinates
            ? userCoordinates
            : `q=${currentLocation}&appid=${"0a44599bef483c57540eed16fcddc18d"}`
        }`
      );
      const data = await response.json();

      if (Number(data.cod) === 404) {
        alert(data.message);
        setIsLoading(false);
      } else {
        const eightHourForecasttResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${
            data.coord.lat
          }&lon=${data.coord.lon}&appid=${"0a44599bef483c57540eed16fcddc18d"}`
        );
        const eightHourForecastData = await eightHourForecasttResponse.json();
        setIsLoading(false);
        setWeatherData(eightHourForecastData);
        setSingleDayWeather(data);
        updateBackgroundImage(data.weather[0]);
      }
    } catch (error) {
      setIsLoading(false);
      console.error(error.message);
    }
  };
  const updateCurrentLocation = (location) =>
    location.trim().length < 1
      ? alert("Input can't be empty! Please provide value")
      : setCurrentLocation(location);

  return (
    <main className="app">
      <SearchLocationInput updateCurrentLocation={updateCurrentLocation} />
      {weatherData && singleDayWeather && !isLoading ? (
        <>
          <LocationWeather singleDayWeather={singleDayWeather} />
          <EightDaysForecast weatherData={weatherData} />
          <FourtyEightHoursForecast weatherData={weatherData} />
        </>
      ) : (
        <Loader />
      )}
    </main>
  );
};

export default App;
