import Header from "./components/Header/Header";
import Search from "./components/Search/Search";
import { StoreProvider } from "./store/GlobalState";

const styles = {
  content: {
    maxWidth: "1400px",
    margin: "auto",
    padding: "1rem",
  },
};

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content" style={styles.content}>
        <StoreProvider>
          <aside>
            <Search />
          </aside>
        </StoreProvider>
      </div>
    </div>
  );
}

export default App;
