import { useState } from "react";

function Search() {
  const styles = {
    container: {
      display: "flex",
    },
    button: {
      background: "#5098e6",
      color: "#c7dfe8",
      marginBottom: "1rem",
      fontWeight: 400,
      borderRadius: ".25rem",
      transition:
        "color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out",
    },
  };

  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(city);
    setCity("");
  };

  return (
    <section className="search" style={styles.container}>
      <h1>Search for a City:</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="City (no state)"
          type="text"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
        <button type="submit" style={styles.button}>
          Search
        </button>
      </form>
    </section>
  );
}

export default Search;
