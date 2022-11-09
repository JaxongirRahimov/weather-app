const padZero = (time, start, val = "0") =>
  time.toString().padStart(start, val);

const formatDate = (seconds) => {
  const date = new Date(seconds * 1000);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const hoursConversion = hours % 12;
  return `${padZero(hoursConversion, 2, "0")}:${padZero(minutes, 2, "0")} ${
    hours % 24 > 11 ? "PM" : "AM"
  }`;
};

const calculateDewPoint = (humidity, temp) => {
  return Math.round(
    (humidity / 100) ** (1 / 8) * (112 + 0.9 * temp) + 0.1 * temp - 112
  );
};
const convertToCelcius = (degree) => Math.ceil(degree - 273.15);

export { padZero, formatDate, calculateDewPoint, convertToCelcius };
