import Header from "./components/Header/Header";
import Search from "./components/Search/Search";

const styles = {
  content: {
    maxWidth: "1400px",
    margin: "auto",
  },
};

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content" style={styles.content}>
        <aside>
          <Search />
        </aside>
      </div>
    </div>
  );
}

export default App;
