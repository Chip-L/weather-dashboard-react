import { useEffect, useState } from "react";
import styled from "styled-components";

import { OPEN_WEATHER_API_KEY } from "../../config/MyConfig";

import { useStoreContext } from "../../store/GlobalState";
import {
  getSearchCity,
  setCity,
  setIsError,
  setIsLoading,
} from "../../store/actions";

const Container = styled.section`
  margin: 0.5rem;
  border-bottom: 2px solid black;
`;

const Form = styled.form`
  display: grid;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  display: block;
  /* margin-top: 1rem; */
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
`;

const Button = styled.button`
  background: #5098e6;
  color: #c7dfe8;
  margin-bottom: 1rem;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`;

function Search() {
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
    <Container className="search">
      <Form onSubmit={handleSubmit}>
        <Label>Search for a City:</Label>
        <Input
          placeholder="City (no state)"
          type="text"
          value={cityInput}
          onChange={(e) => {
            setCityInput(e.target.value);
          }}
        />
        <Button type="submit">Search</Button>
      </Form>
    </Container>
  );
}

export default Search;
