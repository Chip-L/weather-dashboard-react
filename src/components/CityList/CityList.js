import { useEffect } from "react";
import { setCity, setCityList } from "../../store/actions";
import { useStoreContext } from "../../store/GlobalState";

function CityList() {
  const styles = {
    container: {
      display: "grid",
      gridGap: ".5rem",
      margin: ".5rem",
      marginTop: "1rem",
    },
    button: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: "1.5rem",
      color: "#fff",
      backgroundColor: "#6c757d",
      border: "1px solid #6c757d",
      borderRadius: ".25rem",
      marginBottom: "1rem",
      padding: ".375rem .75rem",
    },
  };

  const [{ cityList, city }, dispatch] = useStoreContext();

  /**  Store the information of the city.
   *   If it is a new city it will add it to the front of the list. If it is an old city, move it to the front of the list.
   * */
  useEffect(() => {
    const storageKey = "weatherCityList";
    const maxInHistoryList = 10;

    // get the list from local storage
    const storedList = JSON.parse(localStorage.getItem(storageKey)) || [];
    // console.log(storedList);

    if (city.name) {
      // get the index of the city to see if it is already in the list and remove it if it is
      const currentIndex = storedList.findIndex(
        (storedCity) => storedCity.name === city.name
      );
      if (currentIndex > -1) {
        storedList.splice(currentIndex, 1);
      }

      // add city to the front of the array
      storedList.unshift(city);

      // set the size of the list
      if (storedList.length > maxInHistoryList) {
        storedList.length = maxInHistoryList;
      }

      // put back in local storage
      localStorage.setItem(storageKey, JSON.stringify(storedList));
    }
    // update the cityList state
    dispatch(setCityList(storedList));
  }, [city]);

  if (!cityList.length) {
    return <div></div>;
  } else {
    return (
      <div style={styles.container}>
        {cityList.map((storedCity) => (
          <button
            key={storedCity.name}
            onClick={() => dispatch(setCity(storedCity))}
            style={styles.button}
          >
            {storedCity.name}
          </button>
        ))}
      </div>
    );
  }
}

export default CityList;
