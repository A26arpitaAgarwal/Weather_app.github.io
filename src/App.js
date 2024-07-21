import React, { useEffect, useState } from "react";
import "./App.css";
import Cart from "./cart.js";

const App = () => {
  const [searchV, setSearchV] = useState("Ajmer");
  const [tempInfo, setTempInfo] = useState({});
  const getWeather = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchV}&unit=metric&appid=8f8f048c8527d4aba2d54c7a83912900`;

      let res = await fetch(url);
      let data = await res.json();

      const { temp, humidity, pressure } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;
      const myWeather = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
      };
      setTempInfo(myWeather);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="Search City"
            autoFocus
            id="search"
            className="searchTerm"
            value={searchV}
            onChange={(e) => setSearchV(e.target.value)}
          />
          <button className="searchButton" type="button" onClick={getWeather}>
            Search
          </button>
        </div>
      </div>
      <Cart tempInfo={tempInfo} />
    </>
  );
};

export default App;
