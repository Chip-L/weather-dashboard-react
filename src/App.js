import styled from "styled-components";

import { StoreProvider } from "./store/GlobalState";

import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import CityList from "./components/CityList/CityList";
import Weather from "./components/Weather/Weather";

const Content = styled.div`
  max-width: 1320px;
  margin: auto;
  padding: 1rem;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: auto auto auto auto auto auto;
    gap: 1rem;

    aside {
      grid-column: 1;
    }

    section {
      grid-column: 2 / span 5;
    }
  }
`;

function App() {
  return (
    <div className="App">
      <Header />
      <StoreProvider>
        <Content>
          <aside>
            <Search />
            <CityList />
          </aside>
          <section>
            <Weather />
          </section>
        </Content>
      </StoreProvider>
    </div>
  );
}

export default App;
