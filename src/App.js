import styled from "styled-components";

import CityList from "./components/CityList/CityList";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import { StoreProvider } from "./store/GlobalState";

const Content = styled.div`
  max-width: 1320px;
  margin: auto;
  padding: 1rem;

  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  gap: 1rem;
`;

const Aside = styled.aside`
  grid-column: 1;
`;

const Section = styled.section`
  grid-column: 2 / span 5;
  // border: "1px solid black"
`;

function App() {
  return (
    <div className="App">
      <Header />
      <StoreProvider>
        <Content>
          <Aside>
            <Search />
            <CityList />
          </Aside>
          <Section>
            <CurrentWeather />
          </Section>
        </Content>
      </StoreProvider>
    </div>
  );
}

export default App;
