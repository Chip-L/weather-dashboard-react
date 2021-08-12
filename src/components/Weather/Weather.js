import React from "react";
import { useEffect } from "react";
import { OPEN_WEATHER_API_KEY } from "../../config/MyConfig";

import CurrentWeather from "../CurrentWeather/CurrentWeather";
import { formatDate, getUVIStyle } from "../../utils/helpers";

import { useStoreContext } from "../../store/GlobalState";
import {
  setIsError,
  setIsLoading,
  setWeather,
  setUVIStyle,
} from "../../store/actions";

const Weather = () => {
  const [{ city, isLoading, isError, weather }, dispatch] = useStoreContext();

  useEffect(() => {
    // check if this can even run
    if (city.name === "") return;

    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${city.latitude}&lon=${city.longitude}&exclude=minutely,hourly&units=imperial&appid=${OPEN_WEATHER_API_KEY}`;

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
        // console.log(data);

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
        dispatch(setUVIStyle(getUVIStyle(objWeather.curUvi)));
      })
      .catch((err) => {
        dispatch(setIsError(err));
      });
  }, [city]);

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {isError && <div>{isError.message}</div>}

      {weather.isSet && <CurrentWeather />}
    </>
  );
};

export default Weather;
