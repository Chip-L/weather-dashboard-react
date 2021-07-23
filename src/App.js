import Header from "./components/Header/Header";

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
      <div className="content" style={styles.content}></div>
    </div>
  );
}

export default App;
