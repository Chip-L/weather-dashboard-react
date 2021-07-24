import { useReducer } from "react";
import {
  GET_SEARCH_CITY,
  SET_CITY,
  SET_WEATHER,
  SET_IS_LOADING,
  SET_ERROR,
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case GET_SEARCH_CITY:
      return {
        ...state,
        searchCity: action.city,
      };
    case SET_CITY:
      // console.log("userReducer: SET_SEARCH_CITY:", action.payload);
      return {
        ...state,
        isLoading: false,
        city: action.payload,
      };
    case SET_IS_LOADING:
      return {
        ...state,
        isLoading: true,
        isError: null,
        weather: { isSet: false },
      };
    case SET_WEATHER:
      return {
        ...state,
        isLoading: false,
        isError: null,
        weather: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: action.payload,
        weather: { isSet: false },
      };

    default:
      return state;
  }
};

export function useDataReducer(initialState) {
  return useReducer(reducer, initialState);
}
