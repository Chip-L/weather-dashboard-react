export const degreeSymbol = String.fromCharCode(176);

export function formatTime(date) {
  return date.toLocaleTimeString();
}

// The custom helper 'formatDate' takes in a timestamp
export function formatDate(date) {
  // for some reason the date comes in in seconds, not milliseconds...
  const newDate = new Date(date * 1000);
  return `${
    newDate.getMonth() + 1
  }/${newDate.getDate()}/${newDate.getFullYear()}`;
}

export function getUVIStyle(curUvi) {
  const uviStyle = {
    borderRadius: ".25rem",
    padding: ".25rem .5rem",
    fontSize: "1.25rem",
  };

  console.log(curUvi);

  if (curUvi <= 2) {
    uviStyle.backgroundColor = "green";
    uviStyle.color = "azure";
  } else if (curUvi <= 5) {
    uviStyle.backgroundColor = "yellow";
  } else if (curUvi <= 7) {
    uviStyle.backgroundColor = "orange";
  } else if (curUvi <= 10) {
    uviStyle.backgroundColor = "red";
    uviStyle.color = "azure";
  } else {
    uviStyle.backgroundColor = "violet";
    uviStyle.color = "azure";
  }
  return uviStyle;
}
