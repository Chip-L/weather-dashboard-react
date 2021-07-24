/** used in the search component to initially find the city */
export const GET_SEARCH_CITY = "SET_SEARCH_CITY";

/** used in the CityList component to search a stored city */
export const SET_CITY = "SET_CITY";

/** used to update the state of the weather (loading, data, errors) */
export const SET_WEATHER = "SET_WEATHER";
export const SET_IS_LOADING = "SET_IS_LOADING";
export const SET_ERROR = "SET_ERROR";

// The idea for action creators came from: https://dev.to/markusclaus/fetching-data-from-an-api-using-reactredux-55ao

export const getSearchCity = (city) => {
  return {
    type: GET_SEARCH_CITY,
    city: city,
  };
};

export const setCity = (city) => {
  return {
    type: SET_CITY,
    payload: city,
  };
};

export const setIsLoading = () => {
  return {
    type: SET_IS_LOADING,
  };
};

export const setWeather = (weather) => {
  return {
    type: SET_WEATHER,
    payload: weather,
  };
};

export const setIsError = (err) => {
  return {
    type: SET_ERROR,
    payload: err,
  };
};
