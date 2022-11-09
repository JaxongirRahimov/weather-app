const formatDate = (seconds) => {
  const date = new Date(seconds * 1000);
  const hours = date.getHours();
  return `${hours % 24 > 11 ? `${hours} PM` : `${hours % 24} AM`}`;
};
const convertToCelcius = (degree) => Math.ceil(degree - 273.15);

export { formatDate, convertToCelcius };
