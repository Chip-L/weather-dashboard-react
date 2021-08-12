import { useEffect } from "react";
import styled from "styled-components";

import { setCity, setCityList } from "../../store/actions";
import { useStoreContext } from "../../store/GlobalState";

const Container = styled.div`
  display: grid;
  gap: 0.5rem;
  margin: 0.5rem;
  margin-top: 1rem;
`;

const Button = styled.button`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  color: #fff;
  background-color: #6c757d;
  border: 1px solid #6c757d;
  border-radius: 0.25rem;
  margin-bottom: 1rem;
  padding: 0.375rem 0.75rem;
`;

function CityList() {
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
    return <Container></Container>;
  } else {
    return (
      <Container>
        {cityList.map((storedCity) => (
          <Button
            key={storedCity.name}
            onClick={() => dispatch(setCity(storedCity))}
          >
            {storedCity.name}
          </Button>
        ))}
      </Container>
    );
  }
}

export default CityList;
