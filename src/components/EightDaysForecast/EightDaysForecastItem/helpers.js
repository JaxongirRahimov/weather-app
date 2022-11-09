const formatDate = (seconds) => {
  const weekdays = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  const date = new Date(seconds * 1000);
  const monthDate = date.getDate();
  const weekday = weekdays[date.getDay()];
  return `${weekday} ${monthDate}`;
};
const convertToCelcius = (degree) => Math.ceil(degree - 273.15);

export { formatDate, convertToCelcius };
