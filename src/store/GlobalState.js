import { createContext, useContext } from "react";
import { useDataReducer } from "./dataReducer";

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useDataReducer({
    city: {
      name: "",
      latitude: "",
      longitude: "",
    },

    searchCity: "",

    isLoading: false,
    isError: null,

    weather: {
      isSet: false,
      icon: {
        src: "",
        alt: "",
      },
      curTemp: null,
      curWindSpd: null,
      curHumidity: null,
      curUvi: null,
      fiveDayForecast: [],
    },

    cityList: [],
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
