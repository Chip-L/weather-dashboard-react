import { useEffect } from "react";
import { setCityList } from "../../store/actions";
import { useStoreContext } from "../../store/GlobalState";

function CityList() {
  const styles = {};

  const [{ cityList, city }, dispatch] = useStoreContext();

  /**  Store the information of the city.
   *   If it is a new city it will add it to the front of the list. If it is an old city, move it to the front of the list.
   * */
  useEffect(() => {
    const storageKey = "weatherCityList";
    const maxInHistoryList = 10;

    if (!city.name) return;

    // get the list from local storage
    const storedList = JSON.parse(localStorage.getItem(storageKey)) || [];
    console.log(storedList);

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

    // update the cityList state
    dispatch(setCityList(storedList));
  }, [city]);

  if (!cityList.length) {
    return <div></div>;
  } else {
    return <div>{/* //add buttons here */}</div>;
  }
}

export default CityList;
