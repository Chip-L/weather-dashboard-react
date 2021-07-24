import React from "react";
import { degreeSymbol, formatDate } from "../../utils/helpers";

function Forecast({ forecast }) {
  const styles = {
    card: {
      background: "#2d3e50",
      color: "azure",
      fontWeight: "bold",
    },
  };
  return (
    <div style={styles.card}>
      <p>{formatDate(forecast.dt)}</p>
      <img
        src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
        alt={forecast.weather[0].description}
      />
      <p>High: {forecast.temp.max + degreeSymbol} F</p>
      <p>Low: {forecast.temp.min + degreeSymbol} F</p>
      <p>Wind Speed: {forecast.wind_speed} MPH</p>
      <p>Humidity: {forecast.humidity}%</p>
    </div>
  );
}

export default Forecast;
