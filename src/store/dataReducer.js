import { useReducer } from "react";
import {
  GET_SEARCH_CITY,
  SET_CITY,
  SET_WEATHER,
  SET_IS_LOADING,
  SET_ERROR,
  SET_CITY_LIST,
  SET_UVI_STYLE,
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
    case SET_CITY_LIST:
      // console.log("userReducer: SET_CITY_LIST:", action.cityList);
      return {
        ...state,
        cityList: action.cityList,
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
    case SET_UVI_STYLE:
      return {
        ...state,
        uviStyle: action.payload,
      };

    default:
      return state;
  }
};

export function useDataReducer(initialState) {
  return useReducer(reducer, initialState);
}
