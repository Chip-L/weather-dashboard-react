import React from "react";
import { degreeSymbol, formatDate } from "../../utils/helpers";

function Forecast({ forecast }) {
  const styles = {
    card: {
      background: "#2d3e50",
      color: "azure",
      fontSize: "1rem",
      fontWeight: "bold",
      lineHeight: 1.5,
      padding: ".5rem",
      // display: "flex",
      // flexDirection: "column",
      border: "1px solid rgba(0,0,0,.125)",
      borderRadius: ".25rem",
    },
    img: {
      verticalAlign: "middle",
    },
  };
  return (
    <div style={styles.card}>
      <p>{formatDate(forecast.dt)}</p>
      <img
        src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
        alt={forecast.weather[0].description}
        style={styles.img}
      />
      <p>High: {forecast.temp.max + degreeSymbol} F</p>
      <p>Low: {forecast.temp.min + degreeSymbol} F</p>
      <p>Wind: {forecast.wind_speed} MPH</p>
      <p>Humidity: {forecast.humidity}%</p>
    </div>
  );
}

export default Forecast;
