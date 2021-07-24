import { useEffect, useState } from "react";
import { OPEN_WEATHER_API_KEY } from "../../config/MyConfig";

import { formatDate, getUVIStyle } from "../../utils/helpers";

import { useStoreContext } from "../../store/GlobalState";
import { setIsError, setIsLoading, setWeather } from "../../store/actions";
const degreeSymbol = String.fromCharCode(176);

function CurrentWeather() {
  const styles = {
    div: {
      display: "grid",
      gap: "1rem",
      padding: "1rem",

      border: "1px solid black",
      fontSize: "1.5rem",
    },
    city: {
      fontSize: "2rem",
      fontWeight: 700,
      marginBottom: ".5rem",
    },
    img: {
      verticalAlign: "middle",
    },
  };

  const [{ city, isLoading, isError, weather }, dispatch] = useStoreContext();

  const [uviStyle, setUVIStyle] = useState({});

  useEffect(() => {
    // check if this can even run
    if (city.name === "") return;

    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${city.latitude}&lon=${city.longitude}&exclude=minutely,hourly&units=imperial&appid=${OPEN_WEATHER_API_KEY}`;
    console.log(url);

    // this should control if the search is terminated before the results are back - I don't think I'm using it correct though
    // TODO: fix abort controller
    const controller = new AbortController();

    dispatch(setIsLoading());

    // get the data
    fetch(url, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          const message = `An error has occurred: ${response.status}`;
          throw new Error(message);
        }

        return response.json();
      })
      .then((data) => {
        console.log(data);

        const objWeather = {
          isSet: true,
          icon: {
            src: `https://openweathermap.org/img/wn/${data.current.weather[0].icon}.png`,
            alt: data.current.weather[0].description,
          },
          curTemp: data.current.temp,
          curWindSpd: data.current.wind_speed,
          curHumidity: data.current.humidity,
          curUvi: data.current.uvi,
          asOfDate: formatDate(data.current.dt),
          fiveDayForecast: data.daily.slice(1, 6), // 0 is today's forecast
        };

        dispatch(setWeather(objWeather));
        setUVIStyle(getUVIStyle(weather.curUvi));
      })
      .catch((err) => {
        dispatch(setIsError(err));
      });
  }, [city]);

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {isError && <div>{isError.message}</div>}

      {weather.isSet && (
        <>
          <div style={styles.div}>
            <p style={styles.city}>
              {city.name} ({weather.asOfDate}){" "}
              <img
                style={styles.img}
                src={weather.icon.src}
                alt={weather.icon.alt}
              />
            </p>
            <p>Temp: {weather.curTemp + degreeSymbol} F</p>
            <p>Wind: {weather.curWindSpd} MPH</p>
            <p>Humidity: {weather.curHumidity}%</p>
            <p>
              UV Index: <span style={uviStyle}>{weather.curUvi}</span>
            </p>
          </div>
          {/* add fiveDayForecast component call here */}
        </>
      )}
    </>
  );
}

export default CurrentWeather;
