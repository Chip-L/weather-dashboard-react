import React from "react";

const styles = {
  header: {
    display: "flex",
    justifyContent: "center",

    background: "linear-gradient(to right, blue, navy)",
    color: "azure",

    maxWidth: "100%",
  },
  h1: {
    fontWeight: 700,
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
