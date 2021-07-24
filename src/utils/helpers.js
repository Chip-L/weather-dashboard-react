export function formatTime(date) {
  return date.toLocaleTimeString();
}

// The custom helper 'formatDate' takes in a timestamp
export function formatDate(date) {
  // for some resaon the date comes in in seconds, not milliseconds...
  const newDate = new Date(date * 1000);
  return `${
    newDate.getMonth() + 1
  }/${newDate.getDate()}/${newDate.getFullYear()}`;
}

export function getUVIStyle(curUvi) {
  if (curUvi <= 2) {
    return {
      backgroundColor: "green",
      color: "azure",
    };
  } else if (curUvi <= 5) {
    return {
      backgroundColor: "yellow",
    };
  } else if (curUvi <= 7) {
    return {
      backgroundColor: "orange",
    };
  } else if (curUvi <= 10) {
    return {
      backgroundColor: "red",
      color: "azure",
    };
  } else {
    return {
      backgroundColor: "violet",
      color: "azure",
    };
  }
}
