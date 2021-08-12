import styled from "styled-components";

import { useStoreContext } from "../../store/GlobalState";
import Forecast from "../Forecast/Forecast";

const Heading = styled.p`
  font-size: 1.75rem;
  font-weight: 700;
  margin: 0.5rem;
`;

const Div = styled.div`
  display: grid;
  gap: 1rem;
  padding: 1rem;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
`;

function FiveDayForecast() {
  const [{ weather }] = useStoreContext();

  return (
    <Div>
      <Heading>5 day forecast</Heading>
      <Row>
        {weather.fiveDayForecast.map((forecast) => (
          <Forecast forecast={forecast} key={forecast.dt} />
        ))}
      </Row>
    </Div>
  );
}

export default FiveDayForecast;
