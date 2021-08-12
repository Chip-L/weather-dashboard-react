import React from "react";
import styled from "styled-components";
import { degreeSymbol, formatDate } from "../../utils/helpers";

function Forecast({ forecast }) {
  const Card = styled.div`
    display: flex;
    justify-content: center;

    padding: 0.5rem;
    margin-bottom: 0.5rem;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;

    background: #2d3e50;
    color: azure;
    font-size: 1rem;
    font-weight: bold;
    line-height: 1.5;
  `;

  const Img = styled.img`
    vertical-align: middle;
  `;

  return (
    <Card>
      <div class="content">
        <p>{formatDate(forecast.dt)}</p>
        <Img
          src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
          alt={forecast.weather[0].description}
        />
        <p>High: {forecast.temp.max + degreeSymbol} F</p>
        <p>Low: {forecast.temp.min + degreeSymbol} F</p>
        <p>Wind: {forecast.wind_speed} MPH</p>
        <p>Humidity: {forecast.humidity}%</p>
      </div>
    </Card>
  );
}

export default Forecast;
