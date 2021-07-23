import React from "react";

const styles = {
  header: {
    display: "flex",
    justifyContent: "center",

    padding: ".5rem .75rem",
    background: "linear-gradient(to right, blue, navy)",
    color: "azure",

    maxWidth: "100%",
  },
  h1: {
    fontSize: "2.5rem",
    fontWeight: 500,
    marginBottom: ".5rem",
  },
};

function header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.h1}>Weather Dashboard</h1>
    </header>
  );
}

export default header;
