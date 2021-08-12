import styled from "styled-components";

import { degreeSymbol } from "../../utils/helpers";

import { useStoreContext } from "../../store/GlobalState";

const Div = styled.div`
  display: grid;
  gap: 1rem;
  padding: 1rem;

  border: 1px solid black;
  font-size: 1.5rem;
`;

const City = styled.p`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const Img = styled.img`
  vertical-align: middle;
`;

function CurrentWeather() {
  const [{ city, weather, uviStyle }] = useStoreContext();

  return (
    <>
      <Div>
        <City>
          {city.name} ({weather.asOfDate}){" "}
          <Img src={weather.icon.src} alt={weather.icon.alt} />
        </City>
        <p>Temp: {weather.curTemp + degreeSymbol} F</p>
        <p>Wind: {weather.curWindSpd} MPH</p>
        <p>Humidity: {weather.curHumidity}%</p>
        <p>
          UV Index: <span style={uviStyle}>{weather.curUvi}</span>
        </p>
      </Div>
      {/*
          <div style={styles.fdfDiv}>
            <p style={styles.fdfHeading}>5 day forecast</p>
            <div style={styles.fdfRow}>
              {weather.fiveDayForecast.map((forecast) => (
                <Forecast forecast={forecast} key={forecast.dt} />
              ))}
            </div>
          </div>
          */}
    </>
  );
}

export default CurrentWeather;
