function timeConversion(s) {
  // Write your code here

  const amOrPm = s.slice(s.length - 2);

  const timeSplit = s.split(":");

  const hr =
    amOrPm === "PM"
      ? +timeSplit[0] === 12
        ? "12"
        : +timeSplit[0] + 12
      : +timeSplit[0] === 12
      ? "00"
      : timeSplit[0];

  return hr + s.slice(2, s.length - 2);
}

console.log(timeConversion("12:01:00AM"));
