import React, { useEffect } from "react";
import "./App.css";
const Cart = ({ tempInfo }) => {
  const [State, setState] = React.useState("");
  const {
    temp,
    humidity,
    pressure,
    weathermood,
    name,
    speed,
    country,
    sunset,
  } = tempInfo;

  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Clouds":
          setState("wi-cloudy");
          break;
        case "Haze":
          setState("wi-fog");
          break;
        case "Clear":
          setState("wi-day-sunny");
          break;
        case "Rain":
          setState("wi-rain");
          break;
        case "Mist":
          setState("wi-day-mist");
          break;
        default:
          setState("wi-sunny");
          break;
      }
    }
  }, [weathermood]);

  const cels = temp - 273.15;

  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;

  return (
    <>
      <article className="widge">
        <div className="icon">
          <i className={`wi ${State}`}></i>
          <div>
            <div className="info">
              <div className="temp">
                <span>{cels.toFixed(2)}&deg;</span>
                <div>
                  <div className="description">
                    <div className="condition">{weathermood}</div>
                    <div className="place">
                      {" "}
                      {name}, {country}
                    </div>
                  </div>
                </div>
                <div className="date">{new Date().toLocaleString()}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="extra-temp">
          <div className="temp-info">
            <div className="section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info">
                {timeStr} PM <br />
                Sunset
              </p>
            </div>

            <div className="section">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info">
                {humidity}
                <br /> Humidity
              </p>
            </div>

            <div className="section">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="extra-info">
                {pressure} <br />
                Pressure
              </p>
            </div>

            <div className="section">
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className="extra-info">
                {speed} <br />
                Speed
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Cart;
