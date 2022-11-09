import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./index.css";

const SearchLocationInput = ({ updateCurrentLocation }) => {
  const [currentLocation, setCurrentLocation] = useState("");

  const handleUpdateCurrentLocationSubmit = (e) => {
    e.preventDefault();
    updateCurrentLocation(currentLocation);
  };
  const handleUpdateCurrentLocationChange = (e) =>
    setCurrentLocation(e.target.value);

  return (
    <form onSubmit={handleUpdateCurrentLocationSubmit}>
      <input
        onChange={handleUpdateCurrentLocationChange}
        value={currentLocation}
        type="text"
        name="location"
        placeholder="Please enter country or city name"
      />
      <button>
        <FaSearch />
      </button>
    </form>
  );
};

export default SearchLocationInput;
