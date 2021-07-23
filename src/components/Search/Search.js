import { useState } from "react";

function Search() {
  const styles = {
    container: {
      margin: ".5rem",
      borderBottom: "2px solid black",
    },
    form: {
      display: "grid",
      gridGap: ".5rem",
    },
    label: {
      fontSize: "1.75rem",
      fontWeight: 700,
      marginBottom: ".5rem",
    },
    input: {
      display: "block",
      // marginTop: "1rem",
      padding: ".375rem .75rem",
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.5,
      border: "1px solid #ced4da",
      borderRadius: ".25rem",
    },
    button: {
      background: "#5098e6",
      color: "#c7dfe8",
      marginBottom: "1rem",
      padding: ".375rem .75rem",
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: "1.5rem",
      border: "1px solid transparent",
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
      <form style={styles.form} onSubmit={handleSubmit}>
        <label style={styles.label}>Search for a City:</label>
        <input
          placeholder="City (no state)"
          type="text"
          style={styles.input}
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
