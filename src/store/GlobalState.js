import { createContext, useContext } from "react";
import { useDataReducer } from "./dataReducer";

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useDataReducer({
    city: {
      name: "",
      lat: "",
      lon: "",
    },

    searchCity: "",

    isLoading: false,
    isError: null,

    data: {
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
