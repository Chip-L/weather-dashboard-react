import { useReducer } from "react";
import {
  SET_SEARCH_CITY,
  SET_CITY,
  SET_DATA,
  SET_IS_LOADING,
  SET_ERROR,
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_SEARCH_CITY:
      console.log("userReducer: SET_SEARCH_CITY");
      break;
    case SET_CITY:
      console.log("userReducer: SET_SEARCH_CITY:", action.payload);
      return {
        ...state,
        city: action.payload,
      };
    default:
      return state;
  }
};

export function useDataReducer(initialState) {
  return useReducer(reducer, initialState);
}
