import dotenv from "dotenv/config";
import { useState, useEffect } from "react";

// shamelessly got this code from: https://www.youtube.com/watch?v=Jl4q2cccwf0&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=20

/**
 * Query is expected to be either:
 *    "weather?q=<cityName>&units=imperial"
 *    "onecall?lat=<latitude>&lon=<objCity.longitude>exclude=minutely,hourly&units=imperial"
 */
const useFetch = (query) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const requestUrl = `https://home.openweathermap.org//data/2.5/${query}&appid=${process.env.OPEN_WEATHER_API_KEY}`;

    setIsLoading(true);

    fetch(requestUrl)
      .then((res) => {
        if (!res.ok) {
          console.log(res);
          throw Error("Could not fetch the data for that resource");
        }
        return res.json;
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
