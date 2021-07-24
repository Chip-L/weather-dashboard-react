import CityList from "./components/CityList/CityList";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import { StoreProvider } from "./store/GlobalState";

const styles = {
  content: {
    maxWidth: "1320px",
    margin: "auto",
    padding: "1rem",

    display: "grid",
    gridTemplateColumns: "auto auto auto auto auto auto",
    gridGap: "1rem",
  },
  aside: {
    gridColumn: 1,
  },
  section: {
    gridColumn: "2 / span 5",
    // border: "1px solid black",
  },
};

function App() {
  return (
    <div className="App">
      <Header />
      <StoreProvider>
        <div className="content" style={styles.content}>
          <aside style={styles.aside}>
            <Search />
            <CityList />
          </aside>
          <section style={styles.section}>
            <CurrentWeather />
          </section>
        </div>
      </StoreProvider>
    </div>
  );
}

export default App;
