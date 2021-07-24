import { useEffect, useState } from "react";

import { OPEN_WEATHER_API_KEY } from "../../config/MyConfig";

import { useStoreContext } from "../../store/GlobalState";
import {
  getSearchCity,
  setCity,
  setIsError,
  setIsLoading,
} from "../../store/actions";

function Search() {
  const styles = {
    container: {
      margin: ".5rem",
      borderBottom: "2px solid black",
    },
    form: {
      display: "grid",
      gridGap: ".5rem",
    },
    label: {
      fontSize: "1.75rem",
      fontWeight: 700,
      marginBottom: ".5rem",
    },
    input: {
      display: "block",
      // marginTop: "1rem",
      padding: ".375rem .75rem",
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.5,
      border: "1px solid #ced4da",
      borderRadius: ".25rem",
    },
    button: {
      background: "#5098e6",
      color: "#c7dfe8",
      marginBottom: "1rem",
      padding: ".375rem .75rem",
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: "1.5rem",
      border: "1px solid transparent",
      borderRadius: ".25rem",
      transition:
        "color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out",
    },
  };

  const [{ searchCity }, dispatch] = useStoreContext();

  const [cityInput, setCityInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cityInput) {
      dispatch(getSearchCity(cityInput));
    }
    setCityInput("");
  };

  useEffect(() => {
    // if no search city - skip this
    if (!searchCity) return;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&units=imperial&appid=${OPEN_WEATHER_API_KEY}`;

    // this should control if the search is terminated before the results are back - I don't think I'm using it correct though
    // TODO: fix abort controller
    const controller = new AbortController();

    // set loading to true (these will be reset in the other dispatches)
    dispatch(setIsLoading());

    // get the data
    fetch(url, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) {
          let message = "";
          if (response.status === 404) {
            message = `Unable to find ${searchCity}`;
          } else {
            message = `An error has occurred: ${response.status}`;
          }
          throw new Error(message);
        }

        return response.json();
      })
      .then((data) => {
        const objCity = {
          name: data.name,
          latitude: data.coord.lat,
          longitude: data.coord.lon,
        };

        dispatch(setCity(objCity));
      })
      .catch((err) => {
        dispatch(setIsError(err));
      });
    // reset search city to "" so we don't keep trying to execute this block
    dispatch(getSearchCity(""));
  }, [searchCity]);

  return (
    <section className="search" style={styles.container}>
      <form style={styles.form} onSubmit={handleSubmit}>
        <label style={styles.label}>Search for a City:</label>
        <input
          placeholder="City (no state)"
          type="text"
          style={styles.input}
          value={cityInput}
          onChange={(e) => {
            setCityInput(e.target.value);
          }}
        />
        <button type="submit" style={styles.button}>
          Search
        </button>
      </form>
    </section>
  );
}

export default Search;
